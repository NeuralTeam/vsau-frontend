import { createStore } from "zustand/vanilla";
import { IListPost } from "@/app/news/[id]/page";
import { ITopic } from "@/widgets/news/news-filter";

export type PostsState = {
    searchParams: { page: number; perPage: number; topic: number };
    posts: IListPost[];
    countPages: number;
    topics: ITopic[];
    startDate: number | null;
    endDate: number | null;
    search: string;
};

export type PostsActions = {
    setSearchParams: (
        searchParams: { page: number; perPage: number; topic: number },
        startDate: number | null,
        endDate: number | null,
        search: string
    ) => void;
    setPosts: (posts: IListPost[]) => void;
    setCountPages: (count: number) => void;
};

export type PostsStore = PostsState & PostsActions;

export const createPostsStore = (initState: PostsState) => {
    return createStore<PostsStore>()((set) => ({
        ...initState,

        setSearchParams: async (
            searchParams: { page: number; perPage: number; topic: number },
            startDate: number | null,
            endDate: number | null,
            search: string
        ) => {
            const url = new URL(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1`);
            url.searchParams.set("page", searchParams.page.toString());
            url.searchParams.set("perPage", searchParams.perPage.toString());
            if (searchParams.topic !== 0) url.searchParams.set("topic", searchParams.topic.toString());

            if (startDate) url.searchParams.set("startDate", String(startDate));
            if (endDate) url.searchParams.set("endDate", String(endDate));
            if (search) url.searchParams.set("search", search);

            const response = await fetch(url.href);
            const news: { count_page: number; current_page: number; posts: IListPost[] } = await response.json();

            set(() => ({
                searchParams: searchParams,
                posts: news.posts,
                countPages: news.count_page,
                startDate: startDate,
                endDate: endDate,
                search: search
            }));
        },
        setPosts: (posts: IListPost[]) => set(() => ({ posts: posts })),
        setCountPages: (count: number) => set(() => ({ countPages: count }))
    }));
};
