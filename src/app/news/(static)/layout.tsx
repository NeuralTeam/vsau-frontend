import { ReactNode } from "react";
import Link from "next/link";
import SectionFilter, { ITopic } from "@/widgets/news/news-filter";
import NewsCard from "@/widgets/news/news-card";
import { IListPost } from "@/app/news/[id]/page";
import { slugifyReplace } from "@/shared/libs/slugify";
import SectionSearchAndDate from "@/widgets/news/news-search-and-date";

const NewsLayout = async ({
    children
}: Readonly<{
    children: ReactNode;
}>) => {
    const topics: ITopic[] = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts/topics`, { cache: "no-store" }).then((res) => res.json());
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&page=1&perPage=4`, { cache: "no-store" });
    const news: { count_page: number; current_page: number; posts: IListPost[] } = await response.json();

    return (
        <main className="grid justify-center gap-x-16 space-y-7 pt-16">
            <h1 className="col-span-2 w-fit text-3xl font-semibold">Новости</h1>
            {children}
            <div className="w-[300px] space-y-10">
                <div className="space-y-5">
                    <h2 className="w-fit text-xl font-semibold">Фильтры</h2>
                    <SectionSearchAndDate />
                </div>

                <div className="space-y-5">
                    <h2 className="w-fit text-xl font-semibold">Разделы</h2>
                    <SectionFilter topics={topics} />
                </div>

                <div className="flex flex-col space-y-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Объявления</h2>
                        <Link href="/public" className="text-[17px] font-normal leading-[20px] text-[#0F91D6]">
                            Все
                        </Link>
                    </div>
                    {news.posts.map((data) => (
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
    );
};

export default NewsLayout;
