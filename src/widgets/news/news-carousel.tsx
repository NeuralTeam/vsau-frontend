"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/shadcn/carousel";
import NewsCard from "@/widgets/news/news-card";
import { IListPost } from "@/app/news/[id]/page";
import { slugifyReplace } from "@/shared/libs/slugify";

export function CarouselSize({ posts }: Readonly<{ posts: IListPost[] }>) {
    return (
        <Carousel
            opts={{
                align: "start",
                dragFree: true,
                loop: true
            }}
        >
            <CarouselContent>
                {posts.map((post) => (
                    <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-[22%]">
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
        </Carousel>
    );
}
