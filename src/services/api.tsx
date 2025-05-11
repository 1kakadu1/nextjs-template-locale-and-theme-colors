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
