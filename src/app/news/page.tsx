import { LongNewsCard } from "@/widgets/news/long-news-card";
import Link from "next/link";
import { cn } from "@/shared/libs/shadcn-utils";

// async function revalidateNews(formData: FormData) {
//     "use server";
//
//     revalidatePath("/news");
//     revalidatePath("/news/1");
// }
// const newsList: INews[] = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/news`).then((res) => res.json());
// <form action={revalidateNews}>
//     <Button type="submit">Revalidate</Button>
// </form>

export interface IListPosts {
    id: number;
    seo_title: string;
    title: string;
    short_body: string;
    picture: string | null;
    created_at: number;
}

const getNews = async (): Promise<IListPosts[]> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/news?limit=10&offset=0`).then((res) => res.json());
};

const NewsPage = async ({ searchParams }: { searchParams: { page: number } }) => {
    const currentPage = searchParams.page || 1;
    let newsList = await getNews();

    const pagination = {
        count: newsList.length,
        limit: 2,
        offset: (currentPage - 1) * 2
    };
    const pageCount = Math.ceil(pagination.count / pagination.limit);

    newsList = newsList.slice(pagination.offset, pagination.offset + pagination.limit);

    return (
        <div className="flex flex-col space-y-10 pt-16">
            <h1 className="w-fit text-3xl font-semibold">Новости</h1>

            <div className="flex justify-between">
                <div className="flex flex-col space-y-10">
                    {newsList.map((news) => (
                        <LongNewsCard
                            key={news.id}
                            id={`${news.seo_title}-${news.id}`}
                            title={news.title}
                            body={news.short_body}
                            createdAt={news.created_at}
                            currentPage={currentPage}
                        />
                    ))}
                    <div className="flex h-12 w-full items-center justify-center space-x-10 rounded-[10px] bg-[#EBEBEB]">
                        {Array.from({ length: pageCount }).map((_, i) => (
                            <Link
                                key={i}
                                href={`/news?page=${i + 1}`}
                                className={cn("text-[#767676] opacity-30", currentPage == i + 1 && "font-bold opacity-100")}
                            >
                                {i + 1}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="m-16 mt-0 w-fit space-y-10">
                    <h2 className="w-fit text-3xl font-semibold">Фильтры</h2>
                    <h2 className="w-fit text-3xl font-semibold">Разделы</h2>

                    <div className="flex flex-col space-y-5">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-semibold">Объявления</h2>
                            <Link href="/" className="text-[17px] font-normal leading-[20px] text-[#0F91D6]">
                                Все
                            </Link>
                        </div>
                        {/*{newsList.map((news) => (*/}
                        {/*    <NewsCard key={news.id} id={news.id} title={news.title} createdAt={news.created_at} />*/}
                        {/*))}*/}
                    </div>

                    <div className="space-y-5">
                        <h2 className="w-fit text-3xl font-semibold">Контакты</h2>
                        <div className="w-[300px] rounded-[5px] bg-white p-8">
                            <p>
                                <b>E-mail:</b> pr@id.vsau.ru
                            </p>
                            <p>
                                <b>Телефон:</b> +7(473) 253-81-57
                            </p>
                            <p>
                                <b>Адрес:</b> Россия, 394087, г. Воронеж, ул. Мичурина, 1
                            </p>
                            <p>
                                <b>График работы:</b> с 8:00 до 17:00, перерыв с 12:15 до 13:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
