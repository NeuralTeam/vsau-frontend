"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/shadcn/carousel";
import NewsCard from "@/widgets/news/news-card";
import { IListPost } from "@/app/news/[id]/page";
import { slugifyReplace } from "@/shared/libs/slugify";
import Link from "next/link";

export function CarouselSize({ title, posts }: Readonly<{ title: "Новости" | "Объявления" | "Анонсы"; posts: IListPost[] }>) {
    let link = "";
    let allLabel = "";

    switch (title) {
        case "Новости":
            link = "/news";
            allLabel = "Все новости";
            break;
        case "Объявления":
            link = "/news";
            allLabel = "Все объявления";
            break;
        case "Анонсы":
            link = "/news";
            allLabel = "Все анонсы";
            break;
    }

    return (
        <Carousel
            opts={{
                align: "start",
                dragFree: true
            }}
        >
            <div className="flex flex-col space-y-8">
                <div className="mr-10 flex items-center justify-between">
                    <h1 className="line-clamp-1 w-fit text-3xl font-semibold">
                        <Link href={link}>{title}</Link>
                    </h1>

                    <div className="flex items-center justify-center space-x-3">
                        <div className="flex items-center justify-center space-x-5 rounded-[10px] bg-white px-5 py-3">
                            <CarouselPrevious className="disabled:opacity-50" />
                            <CarouselNext className="disabled:opacity-50" />
                        </div>
                        <Link href={link} className="rounded-[10px] bg-white px-10 py-3 text-[17px] font-normal leading-[20px] text-[#0F91D6]">
                            {allLabel}
                        </Link>
                    </div>
                </div>

                <CarouselContent className="mr-10">
                    {posts.map((post) => (
                        <CarouselItem key={post.id} className="md:basis-2/3 lg:basis-[25%]">
                            <div className="flex flex-col space-y-4 pb-3 sm:flex-row sm:flex-nowrap sm:gap-8 sm:space-y-0">
                                <NewsCard
                                    id={`${slugifyReplace(post.title, { lower: true, strict: true })}-${post.id}`}
                                    title={post.title}
                                    createdAt={post.created_at}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </div>
        </Carousel>
    );
}
