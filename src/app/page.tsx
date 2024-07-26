import RootCarousel from "@/widgets/root/root-carousel";
import Link from "next/link";
import { CarouselSize } from "@/widgets/news/news-carousel";
import Image from "next/image";
import relevantPlug from "@/shared/images/plugs/relevant.png";
import { IListPost } from "@/shared/ui/vsau/posts/post-list-block";

const RootPage = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1`);
    const newsPosts: { count: number; posts: IListPost[] } = await response.json();
    response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=2`);
    const adPosts: { count: number; posts: IListPost[] } = await response.json();

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

                    <CarouselSize posts={newsPosts.posts} />
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

                    <CarouselSize posts={adPosts.posts} />
                </div>

                <div className="flex flex-col space-y-8">
                    <div className="mr-[45px] flex items-center justify-between">
                        <h1 className="line-clamp-1 w-fit text-3xl font-semibold">Актуальное</h1>
                    </div>

                    <div className="grid grid-cols-3 gap-5 pr-[70px]">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <Link key={i} href="/" className="min-h-[128px] min-w-[400px] max-w-[530px]">
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
