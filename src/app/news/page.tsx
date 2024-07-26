import { PostFilterBlock, ITopic } from "@/shared/ui/vsau/posts/post-filter-block";
import { PostListBlock, IListPost } from "@/shared/ui/vsau/posts/post-list-block";
import { Suspense } from "react";
import { StoreProvider } from "@/shared/providers/store-provider";
import { PostListPaginationBlock } from "@/shared/ui/vsau/posts/post-list-pagination-block";

const fetchPosts = async (params: string): Promise<{ count: number; posts: IListPost[] }> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&${params}`, { cache: "no-cache" });
    return response.json();
};

const NewsPage = async ({ searchParams }: { searchParams: { topic: string; page: string } }) => {
    const params = new URLSearchParams();
    if (searchParams.topic) params.set("topic", searchParams.topic.toString());
    if (searchParams.page) params.set("page", searchParams.page.toString());

    let response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts/topics`);
    const topics: ITopic[] = await response.json();
    const posts = await fetchPosts(params.toString());

    return (
        <main className="w-[calc(100vw-230px)] max-w-[80%] space-y-8 pt-[50px]">
            <h1 className="text-3xl font-semibold">Новости</h1>

            <div className="flex space-x-[70px]">
                <StoreProvider posts={posts.posts} count={posts.count}>
                    <div className="w-full space-y-8">
                        <PostListBlock />
                        <PostListPaginationBlock />
                    </div>

                    <PostFilterBlock topics={topics} />
                </StoreProvider>
            </div>
        </main>
    );
};

export default NewsPage;
