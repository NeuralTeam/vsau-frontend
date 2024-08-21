import { createStore } from "zustand/vanilla";
import { IListPost } from "@/app/[lang]/news/[id]/page";
import { ITopic } from "@/widgets/news/news-filter";

export type PostsState = {
    searchParams: { page: number; perPage: number; topic: number };
    posts: IListPost[];
    countPages: number;
    topics: ITopic[];
};

export type PostsActions = {
    setSearchParams: (searchParams: { page: number; perPage: number; topic: number }) => void;
    setPosts: (posts: IListPost[]) => void;
    setCountPages: (count: number) => void;
};

export type PostsStore = PostsState & PostsActions;

export const createPostsStore = (initState: PostsState) => {
    return createStore<PostsStore>()((set) => ({
        ...initState,

        setSearchParams: async (searchParams: { page: number; perPage: number; topic: number }) => {
            const url = new URL(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1`);
            url.searchParams.set("page", searchParams.page.toString());
            url.searchParams.set("perPage", searchParams.perPage.toString());
            if (searchParams.topic !== 0) url.searchParams.set("topic", searchParams.topic.toString());

            const response = await fetch(url.href);
            const news: { count_page: number; current_page: number; posts: IListPost[] } = await response.json();

            set(() => ({ searchParams: searchParams, posts: news.posts, countPages: news.count_page }));
        },
        setPosts: (posts: IListPost[]) => set(() => ({ posts: posts })),
        setCountPages: (count: number) => set(() => ({ countPages: count }))
    }));
};
