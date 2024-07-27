import RootCarousel from "@/widgets/root/root-carousel";
import Link from "next/link";
import { IListPosts } from "@/app/news/(static)/page";
import { CarouselSize } from "@/widgets/news/news-carousel";
import Image from "next/image";
import relevantPlug from "@/shared/images/plugs/relevant.png";

const getNews = async (): Promise<{ count: number; posts: IListPosts[] }> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/news?limit=7&offset=0`, { next: { revalidate: 3600 } }).then((res) => res.json());
};

const RootPage = async () => {
    const news = await getNews();

    return (
        <>
            <RootCarousel />

            <div className="mt-8 select-none space-y-8">
                <div className="flex flex-col space-y-8">
                    <div className="mr-[45px] flex items-center justify-between">
                        <h1 className="line-clamp-1 w-fit text-3xl font-semibold">
                            <Link href="/news">Новости</Link>
                        </h1>
                        <Link href="/news" className="text-[17px] font-normal leading-[20px] text-[#0F91D6] hover:underline">
                            Все новости
                        </Link>
                    </div>

                    <CarouselSize posts={news.posts} />
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

                    <CarouselSize posts={news.posts} />
                </div>

                <div className="flex flex-col space-y-8">
                    <div className="mr-[45px] flex items-center justify-between">
                        <h1 className="line-clamp-1 w-fit text-3xl font-semibold">Актуальное</h1>
                    </div>

                    <div className="grid grid-cols-3 gap-5 pr-[70px]">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <Link key={i} href="/" className="min-h-[128px] min-w-[400px] max-w-[530px] duration-300 hover:scale-105 hover:shadow-xl">
                                <Image src={relevantPlug} priority={false} placeholder="blur" alt="#" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RootPage;
