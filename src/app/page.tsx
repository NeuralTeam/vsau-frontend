import RootCarousel from "@/widgets/root/root-carousel";
import Link from "next/link";
import { CarouselSize } from "@/widgets/news/news-carousel";
import Image from "next/image";
import relevantPlug from "@/shared/images/plugs/relevant.png";
import { IListPost } from "@/app/news/[id]/page";

const getNews = async (): Promise<{ count: number; posts: IListPost[] }> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&page=1&perPage=10`, { cache: "no-store" }).then((res) => res.json());
};

const getAds = async (): Promise<{ count: number; posts: IListPost[] }> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=2&page=1&perPage=10`, { cache: "no-store" }).then((res) => res.json());
};

const getAnnounces = async (): Promise<{ count: number; posts: IListPost[] }> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=3&page=1&perPage=10`, { cache: "no-store" }).then((res) => res.json());
};

const RootPage = async () => {
    const news = await getNews();
    const ads = await getAds();
    const announces = await getAnnounces();

    return (
        <>
            <RootCarousel />

            <div className="mt-8 select-none space-y-8">
                <CarouselSize title="Новости" posts={news.posts} />
                <CarouselSize title="Объявления" posts={ads.posts} />
                <CarouselSize title="Анонсы" posts={announces.posts} />

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
