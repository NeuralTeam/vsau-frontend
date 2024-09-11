import RootCarousel from "@/widgets/root/root-carousel";
import Link from "next/link";
import { CarouselSize } from "@/widgets/news/news-carousel";
import Image from "next/image";
import relevantPlug from "@/shared/images/plugs/relevant.png";
import { IListPost } from "@/app/news/[id]/page";
import { Suspense } from "react";

interface IActuality {
    id: number;
    link: string;
    picture: string;
}

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

const getActualities = async (): Promise<IActuality[]> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/main-info/actuality`).then((res) => res.json());
};

const RootPage = async () => {
    return (
        <>
            <Suspense fallback={<div>Load Banner</div>}>
                <RootCarousel banners={await getBanners()} />
            </Suspense>

            <div className="mt-8 select-none space-y-8">
                <Suspense fallback={<div>Load News</div>}>
                    <CarouselSize type={1} posts={(await getNews()).posts} />
                </Suspense>
                <Suspense fallback={<div>Load Ads</div>}>
                    <CarouselSize type={2} posts={(await getAds()).posts} />
                </Suspense>
                <Suspense fallback={<div>Load Announces</div>}>
                    <CarouselSize type={3} posts={(await getAnnounces()).posts} />
                </Suspense>

                <Suspense fallback={<div>Load Actualities</div>}>
                    {(await getActualities()).length != 0 && (
                        <div className="flex flex-col space-y-8">
                            <div className="mr-[45px] flex items-center justify-between">
                                <h1 className="line-clamp-1 w-fit text-3xl font-semibold">Актуальное</h1>
                            </div>

                            <div className="grid grid-cols-2 gap-5 pr-[70px] xl:grid-cols-3">
                                {(await getActualities()).map((el) => (
                                    <Link
                                        key={el.id}
                                        href={el.link}
                                        className="max-w-[500px] shrink-0 grow-0 basis-full overflow-hidden rounded-[10px] duration-300 hover:scale-105 hover:shadow-xl"
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
                                            className=""
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </Suspense>
            </div>
        </>
    );
};

export default RootPage;
