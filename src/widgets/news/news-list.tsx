import { IListPost } from "@/shared/ui/vsau/posts/post-list-block";
import { LongNewsCard } from "@/widgets/news/long-news-card";
import NewsPagination from "@/widgets/news/news-pagination";

const NewsList = async ({ pagination, topic }: { pagination: { currentPage: number; offsetPage: number; limitOnPage: number }; topic: string }) => {
    console.log("asd");
    let newsList: { count: number; posts: IListPost[] } = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/news?${topic === undefined ? "" : `topic=${topic}&`}limit=${pagination.limitOnPage}&offset=${pagination.offsetPage}`,
        { cache: "no-cache" }
    ).then((res) => {
        const data = res.json();
        if (res.status !== 200) return undefined;

        return data;
    });

    if (newsList === undefined) return <div className="h-[396px] w-[900px]">Пум Пум Пум ... Новостей по вашему запросу не нашлось</div>;

    const pageCount = Math.ceil(newsList.count / pagination.limitOnPage);

    return (
        <>
            {/*{newsList.posts.map((news) => (*/}
            {/*    <LongNewsCard*/}
            {/*        key={news.id}*/}
            {/*        // id={`${news.seo_title}-${news.id}`}*/}
            {/*        title={news.title}*/}
            {/*        // body={news.short_body}*/}
            {/*        createdAt={news.created_at}*/}
            {/*        currentPage={pagination.currentPage}*/}
            {/*    />*/}
            {/*))}*/}
            <NewsPagination pageCount={pageCount} />
        </>
    );
};

export default NewsList;
