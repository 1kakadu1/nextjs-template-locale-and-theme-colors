export interface IBannerProps{
    className?: string;
    image: {
        url: string;
        alt: string;
    };
    card:{
        link: string;
        user:{
            name: string;
            preview: string;
        }
        date: string;
        title: string;
        category: string;
    }
}
