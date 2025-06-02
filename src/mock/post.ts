import { ICardPost } from "@/components/cards/card-post";
import post1 from "@/assets/images/post/p1.jpg";
import post2 from "@/assets/images/post/p2.jpg";
import post3 from "@/assets/images/post/p3.jpg";
import post4 from "@/assets/images/post/p4.jpg";
import post5 from "@/assets/images/post/p5.jpg";
import post6 from "@/assets/images/post/p6.jpg";
import post7 from "@/assets/images/post/p7.jpg";
import post8 from "@/assets/images/post/p8.jpg";
import post9 from "@/assets/images/post/p9.jpg";
import user1 from "@/assets/images/users/user1.png";
import user2 from "@/assets/images/users/user2.png";
import user3 from "@/assets/images/users/user3.png";
import user4 from "@/assets/images/users/user4.png";
import postFull from "@/assets/images/post/pf1.png";


export const MOCK_POSTS: ICardPost[] = [
    {
        preview: post1.src,
        category:"Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing The Impact of Technology on the Workplace: How Technology is Changing The Impact of Technology on the Workplace: How Technology is Changing",
        date:"August 20, 2022",
        user: {
            avatar: user1.src,
            name: "Jason Francisco",
        },
        href:"#"
    },
        {
        preview: post2.src,
        category:"Technology",
        title: "The Impact",
        date:"August 20, 2022",
        user: {
            avatar: user2.src,
            name: "Tracey Wilson",
        },
        href:"#"
    },
        {
        preview: post3.src,
        category:"Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date:"August 20, 2022",
        user: {
            avatar: user3.src,
            name: "",
        },
        href:"#"
    },
        {
        preview: post4.src,
        category:"Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date:"August 20, 2022",
        user: {
            avatar: user4.src,
            name: "Elizabeth Slavin",
        },
        href:"#"
    },
        {
        preview: post5.src,
        category:"Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date:"August 20, 2022",
        user: {
            avatar: user1.src,
            name: "Jason Francisco",
        },
        href:"#"
    },
        {
        preview: post6.src,
        category:"Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date:"August 20, 2022",
        user: {
            avatar: user2.src,
            name: "Tracey Wilson",
        },
        href:"#"
    },
        {
        preview: post7.src,
        category:"Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date:"August 20, 2022",
        user: {
            avatar: user4.src,
            name: "Elizabeth Slavin",
        },
        href:"#"
    },
        {
        preview: post8.src,
        category:"Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date:"August 20, 2022",
        user: {
            avatar: user4.src,
            name: "Ernie Smith",
        },
        href:"#"
    },
        {
        preview: post9.src,
        category:"Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date:"August 20, 2022",
        user: {
            avatar: user2.src,
            name: "Ernie Smith",
        },
        href:"#"
    },
];

export const MOCK_POSTS_FLUID: ICardPost[] = MOCK_POSTS.map((item)=>({...item, preview: postFull.src}));

