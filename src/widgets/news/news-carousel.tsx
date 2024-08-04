"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/shadcn/carousel";
import NewsCard from "@/widgets/news/news-card";
import { IListPost } from "@/app/news/[id]/page";
import { slugifyReplace } from "@/shared/libs/slugify";
import Link from "next/link";

export function CarouselSize({ title, posts }: Readonly<{ title: "Новости" | "Объявления" | "Анонсы"; posts: IListPost[] }>) {
    let link = "";

    switch (title) {
        case "Новости":
            link = "/news";
            break;
        case "Объявления":
            link = "/news";
            break;
        case "Анонсы":
            link = "/news";
            break;
    }

    return (
        <Carousel
            opts={{
                align: "start",
                dragFree: true
            }}
        >
            <div className="-ml-4 flex flex-col space-y-3">
                <div className="ml-4 mr-10 flex items-center justify-between">
                    <h1 className="w-fit">
                        <Link href={link} className="duration-300 hover:font-semibold hover:text-[#3F3F3F]">
                            {title}
                        </Link>
                    </h1>

                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center justify-center space-x-3">
                            <CarouselPrevious className="disabled:opacity-50" />
                            <CarouselNext className="disabled:opacity-50" />
                        </div>
                        <Link
                            href={link}
                            className="rounded-[5px] px-4 py-2 text-[20px] font-normal leading-[20px] text-[#909090] duration-300 hover:bg-[#AEAEAE] hover:text-white active:scale-75"
                        >
                            Все
                        </Link>
                    </div>
                </div>

                <CarouselContent className="-ml-0 mr-10">
                    {posts.map((post) => (
                        <CarouselItem key={post.id} className="md:basis-2/3 lg:basis-[25%]">
                            <div className="flex flex-col space-y-4 pb-3 sm:flex-row sm:flex-nowrap sm:gap-8 sm:space-y-0">
                                <NewsCard
                                    id={`${slugifyReplace(post.title, { lower: true, strict: true })}-${post.id}`}
                                    title={post.title}
                                    createdAt={post.released_at}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </div>
        </Carousel>
    );
}
