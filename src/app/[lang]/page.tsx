import RootCarousel from "@/widgets/root/root-carousel";
import Link from "next/link";
import { CarouselSize } from "@/widgets/news/news-carousel";
import Image from "next/image";
import relevantPlug from "@/shared/images/plugs/relevant.png";
import { IListPost } from "@/app/[lang]/news/[id]/page";
import { headers } from "next/headers";

const getNews = async (): Promise<{ count: number; posts: IListPost[] }> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&page=1&perPage=10`, { cache: "no-store" }).then((res) => res.json());
};

const getAds = async (): Promise<{ count: number; posts: IListPost[] }> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=2&page=1&perPage=10`, { cache: "no-store" }).then((res) => res.json());
};

const getAnnounces = async (): Promise<{ count: number; posts: IListPost[] }> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=3&page=1&perPage=10`, { cache: "no-store" }).then((res) => res.json());
};

const getBanners = async (): Promise<[{ id: number; link: string; picture: string; order: string }]> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/main-info/banners`).then((res) => res.json());
};

const getActualities = async (): Promise<[{ id: number; link: string; picture: string }]> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/main-info/actuality`).then((res) => res.json());
};

const RootPage = async () => {
    const news = await getNews();
    const ads = await getAds();
    const announces = await getAnnounces();
    const banners = await getBanners();
    const actualities = await getActualities();

    return (
        <>
            <RootCarousel banners={banners} />

            <div className="mt-8 select-none space-y-8">
                <CarouselSize type={1} posts={news.posts} />
                <CarouselSize type={2} posts={ads.posts} />
                <CarouselSize type={3} posts={announces.posts} />

                <div className="flex flex-col space-y-8">
                    <div className="mr-[45px] flex items-center justify-between">
                        <h1 className="line-clamp-1 w-fit text-3xl font-semibold">Актуальное</h1>
                    </div>

                    <div className="grid grid-cols-3 gap-5 pr-[70px]">
                        {actualities.map((el) => (
                            <Link
                                key={el.id}
                                href={el.link}
                                className="min-h-[128px] min-w-[400px] max-w-[530px] duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <Image
                                    src={
                                        el.picture === null
                                            ? relevantPlug
                                            : `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/storage/${el.picture}?bucket=posts`
                                    }
                                    width={1920}
                                    height={250}
                                    priority={true}
                                    placeholder="empty"
                                    alt="#"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RootPage;
