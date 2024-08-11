import NewsList from "@/widgets/news/news-list";
import NewsPagination from "@/widgets/news/news-pagination";
import { CounterStoreProvider } from "@/shared/providers/posts-store-provider";
import SectionFilter, { ITopic } from "@/widgets/news/news-filter";
import { IListPost } from "@/app/news/[id]/page";
import SectionSearchAndDate from "@/widgets/news/news-search-and-date";
import Link from "next/link";
import NewsCard from "@/widgets/news/news-card";
import { slugifyReplace } from "@/shared/libs/slugify";
import { ReactNode } from "react";

const NewsPage = async ({
    searchParams
}: Readonly<{
    searchParams: { page: string; perPage: string; topic: string };
}>) => {
    const page = searchParams.page === undefined ? 1 : +searchParams.page;
    const perPage = searchParams.perPage === undefined ? 3 : +searchParams.perPage;
    const topic = searchParams.topic === undefined ? 0 : +searchParams.topic;

    const url = new URL(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1`);
    url.searchParams.set("page", page.toString());
    url.searchParams.set("perPage", perPage.toString());
    if (topic !== 0) url.searchParams.set("topic", topic.toString());

    const topics: ITopic[] = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts/topics`, { cache: "no-store" }).then((res) => res.json());

    const responseAds = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&page=1&perPage=4`, { cache: "no-store" });
    const ads: { count_page: number; current_page: number; posts: IListPost[] } = await responseAds.json();

    const response = await fetch(url.href, { cache: "no-store" });
    const news: { count_page: number; current_page: number; posts: IListPost[] } = await response.json();

    return (
        <CounterStoreProvider
            initState={{
                searchParams: { page: page, perPage: perPage, topic: topic },
                posts: news.posts,
                countPages: news.count_page,
                topics: topics
            }}
        >
            <main className="grid justify-center gap-x-16 space-y-7 pt-16">
                <h1 className="col-span-2 w-fit text-3xl font-semibold">Новости</h1>

                <div className="space-y-10">
                    <NewsList />
                    <NewsPagination />
                </div>

                <div className="w-[300px] space-y-10">
                    <div className="space-y-5">
                        <h2 className="w-fit text-xl font-semibold">Фильтры</h2>
                        <SectionSearchAndDate />
                    </div>

                    <div className="space-y-5">
                        <h2 className="w-fit text-xl font-semibold">Разделы</h2>
                        <SectionFilter />
                    </div>

                    <div className="flex flex-col space-y-5">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-semibold">Объявления</h2>
                            <Link href="/public" className="text-[17px] font-normal leading-[20px] text-[#0F91D6]">
                                Все
                            </Link>
                        </div>
                        {ads.posts.map((data) => (
                            <NewsCard
                                key={data.id}
                                id={`${slugifyReplace(data.title, { lower: true, strict: true })}-${data.id}`}
                                title={data.title}
                                createdAt={data.released_at}
                            />
                        ))}
                    </div>

                    <div className="space-y-5">
                        <h2 className="w-fit text-3xl font-semibold">Контакты</h2>
                        <div className="w-[300px] space-y-1 rounded-[5px] bg-white p-8">
                            <p className="leading-[20px]">
                                <b>E-mail:</b> pr@id.vsau.ru
                            </p>
                            <p className="leading-[20px]">
                                <b>Телефон:</b> +7(473) 253-81-57
                            </p>
                            <p className="leading-[20px]">
                                <b>Адрес:</b> Россия, 394087, г. Воронеж, ул. Мичурина, 1
                            </p>
                            <p className="leading-[20px]">
                                <b>График работы:</b> с 8:00 до 17:00, перерыв с 12:15 до 13:00
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </CounterStoreProvider>
    );
};

export default NewsPage;
