import RootCarousel from "@/widgets/root/root-carousel";
import NewsCard from "@/widgets/news/news-card";
import Link from "next/link";
import { IListPosts } from "@/app/news/page";

const getNews = async (): Promise<IListPosts[]> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/news?limit=10&offset=0`).then((res) => res.json());
};

const RootPage = async () => {
    const news = await getNews();

    return (
        <>
            <RootCarousel />

            <div className="mt-8 space-y-8">
                <div className="flex flex-col space-y-8">
                    <div className="mr-[45px] flex items-center justify-between">
                        <h1 className="line-clamp-1 w-fit text-3xl font-semibold">
                            <Link href="/news">Новости</Link>
                        </h1>
                        <Link href="/news" className="text-[17px] font-normal leading-[20px] text-[#0F91D6] hover:underline">
                            Все новости
                        </Link>
                    </div>

                    <div className="flex flex-col space-y-4 pb-3 sm:flex-row sm:flex-nowrap sm:gap-8 sm:space-y-0 sm:overflow-x-scroll">
                        {news.map((data) => (
                            <NewsCard key={data.id} id={`${data.seo_title}-${data.id}`} title={data.title} createdAt={data.created_at} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-8">
                    <div className="mr-[45px] flex items-center justify-between">
                        <h1 className="line-clamp-1 w-fit text-3xl font-semibold">
                            <Link href="/news">Объявления</Link>
                        </h1>
                        <Link href="/news" className="text-[17px] font-normal leading-[20px] text-[#0F91D6] hover:underline">
                            Все объявления
                        </Link>
                    </div>

                    <div className="flex flex-col space-y-4 pb-3 sm:flex-row sm:flex-nowrap sm:gap-8 sm:space-y-0 sm:overflow-x-scroll">
                        {news.map((data) => (
                            <NewsCard key={data.id} id={`${data.seo_title}-${data.id}`} title={data.title} createdAt={data.created_at} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RootPage;
