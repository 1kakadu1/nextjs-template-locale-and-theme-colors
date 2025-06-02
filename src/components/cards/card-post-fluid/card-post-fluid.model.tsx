export interface ICardPostFluidProps{
    className?: string;
    post: ICardPostFluid;
    position?: "bottom" | "center"
}

export interface ICardPostFluid {
	preview: string;
	category: string;
	title: string;
	date: string;
	user: {
		avatar: string;
		name: string;
	};
	href: string;
}