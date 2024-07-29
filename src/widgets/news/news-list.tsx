import { LongNewsCard } from "@/widgets/news/long-news-card";
import NewsPagination from "@/widgets/news/news-pagination";
import { IListPost } from "@/app/news/[id]/page";
import { slugifyReplace } from "@/shared/libs/slugify";

const NewsList = async ({ pagination, topic }: { pagination: { page: number; perPage: number }; topic: string }) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?${topic === undefined ? "" : `topic=${topic}&`}type=1&page=${pagination.page}&perPage=${pagination.perPage}`,
        { cache: "no-cache" }
    );
    const newsList: { count_page: number; current_page: number; posts: IListPost[] } = await response.json();

    if (!newsList.posts.length) return <div className="h-[396px] w-[900px]">Пум Пум Пум ... Новостей по вашему запросу не нашлось</div>;

    return (
        <>
            {newsList.posts.map((post) => (
                <LongNewsCard
                    key={post.id}
                    id={`${slugifyReplace(post.title, { lower: true, strict: true })}-${post.id}`}
                    title={post.title}
                    body={post.body}
                    createdAt={post.created_at}
                    currentPage={pagination.page}
                />
            ))}
            <NewsPagination pageCount={newsList.count_page} />
        </>
    );
};

export default NewsList;
