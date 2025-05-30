export type Post = {
	id: number;
	title: string;
	body: string;
};

export const QUERY_KEYS: { [key: string]: string[] } = {
	posts: ['posts'],
};

class Api {
	private readonly _baseUrl = 'https://jsonplaceholder.typicode.com';
	readonly queryKeys: { [key: string]: string[] } = {};

	constructor(params: { queryKeys: { [key: string]: string[] } }) {
		this.queryKeys = params.queryKeys;
	}

	fetchPosts = async (limit: number): Promise<Array<Post>> => {
		const response = await fetch(this._baseUrl + '/posts');
		const data = await response.json();
		return data.filter((x: Post) => x.id <= limit);
	};
}

export const appApi = new Api({ queryKeys: QUERY_KEYS });

export type RequestInterceptor = (
	request: RequestInit,
) => RequestInit | Promise<RequestInit>;
export type ResponseInterceptor<T = any> = (
	response: Response,
) => T | Promise<T>;
export type ErrorInterceptor = (error: Error) => Error | Promise<Error>;

export interface Interceptors {
	request?: RequestInterceptor[];
	response?: ResponseInterceptor[];
	error?: ErrorInterceptor[];
}

export interface FetchServiceConfig {
	baseUrl?: string;
	defaultHeaders?: Record<string, string>;
	interceptors?: Interceptors;
}

class FetchService {
	private baseUrl: string;
	private defaultHeaders: Record<string, string>;
	private interceptors: {
		request: RequestInterceptor[];
		response: ResponseInterceptor[];
		error: ErrorInterceptor[];
	};

	constructor(config: FetchServiceConfig = {}) {
		this.baseUrl = config.baseUrl || '';
		this.defaultHeaders = config.defaultHeaders || {};
		this.interceptors = {
			request: config.interceptors?.request || [],
			response: config.interceptors?.response || [],
			error: config.interceptors?.error || [],
		};
	}

	public async request<T = any>(
		url: string,
		options: RequestInit = {},
	): Promise<T> {
		try {
			const headers = {
				...this.defaultHeaders,
				...(options.headers || {}),
			};
			let request: RequestInit = {
				...options,
				headers,
			};
			for (const interceptor of this.interceptors.request) {
				request = await interceptor(request);
			}
			const fullUrl = this.getFullUrl(url);
			const response = await fetch(fullUrl, request);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			let processedResponse: Response = response;

			for (const interceptor of this.interceptors.response) {
				processedResponse = (await interceptor(processedResponse)) as Response;
			}
			try {
				return (await processedResponse.json()) as T;
			} catch {
				return (await processedResponse.text()) as T;
			}
		} catch (error) {
			let err = error instanceof Error ? error : new Error(String(error));

			for (const interceptor of this.interceptors.error) {
				err = await interceptor(err);
			}

			throw err;
		}
	}

	public get<T = any>(url: string, options?: RequestInit): Promise<T> {
		return this.request<T>(url, {
			...options,
			method: 'GET',
		});
	}

	public post<T = any>(
		url: string,
		body?: any,
		options?: RequestInit,
	): Promise<T> {
		return this.request<T>(url, {
			...options,
			method: 'POST',
			body: JSON.stringify(body),
		});
	}

	public put<T = any>(
		url: string,
		body?: any,
		options?: RequestInit,
	): Promise<T> {
		return this.request<T>(url, {
			...options,
			method: 'PUT',
			body: JSON.stringify(body),
		});
	}

	public patch<T = any>(
		url: string,
		body?: any,
		options?: RequestInit,
	): Promise<T> {
		return this.request<T>(url, {
			...options,
			method: 'PATCH',
			body: JSON.stringify(body),
		});
	}

	public delete<T = any>(url: string, options?: RequestInit): Promise<T> {
		return this.request<T>(url, {
			...options,
			method: 'DELETE',
		});
	}

	public addRequestInterceptor(interceptor: RequestInterceptor): void {
		this.interceptors.request.push(interceptor);
	}

	public addResponseInterceptor(interceptor: ResponseInterceptor): void {
		this.interceptors.response.push(interceptor);
	}

	public addErrorInterceptor(interceptor: ErrorInterceptor): void {
		this.interceptors.error.push(interceptor);
	}

	private getFullUrl(url: string): string {
		if (/^https?:\/\//i.test(url)) {
			return url;
		}
		return `${this.baseUrl}${url}`;
	}
}

export default FetchService;

const apiService = new FetchService({
	baseUrl: 'https://api.example.com',
	defaultHeaders: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},

	//   interceptors: {
	//     request: [
	//       (request) => {
	//         const token = localStorage.getItem('authToken');
	//         if (token) {
	//           return {
	//             ...request,
	//             headers: {
	//               ...request.headers,
	//               'Authorization': `Bearer ${token}`,
	//             },
	//           };
	//         }
	//         return request;
	//       },
	//     ],
	//     response: [
	//       async (response) => {
	//         if (response.status === 401) {
	//           localStorage.removeItem('authToken');
	//           window.location.href = '/login';
	//         }
	//         return response;
	//       },
	//     ],
	//     error: [
	//       (error) => {
	//         console.error('API Error:', error);
	//         return error;
	//       },
	//     ],
	//   },
});
