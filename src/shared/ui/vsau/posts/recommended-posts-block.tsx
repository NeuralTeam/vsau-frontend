"use client";

import { IListPost } from "@/shared/ui/vsau/posts/post-list-block";
import NewsCard from "@/widgets/news/news-card";
import { slugifyReplace } from "@/shared/libs/slugify";
import { useEffect, useState } from "react";
import { Skeleton } from "@/shared/ui/shadcn/skeleton";

export const RecommendedPostsBlock = () => {
    const [postList, setPostList] = useState<IListPost[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1`)
            .then((res) => res.json())
            .then((data) => setPostList(data.posts));
    }, []);

    if (!postList.length)
        return (
            <>
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex h-[300px] w-[300px] flex-col justify-between rounded-[5px] p-5">
                        <div className="flex space-x-3">
                            <Skeleton className="h-20 min-w-20 rounded-full" />
                            <div className="w-full space-y-3">
                                <Skeleton className="h-6" />
                                <Skeleton className="h-6" />
                                <Skeleton className="h-6" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Skeleton className="h-8" />
                            <Skeleton className="h-16" />
                        </div>
                    </div>
                ))}
            </>
        );

    return (
        <>
            {postList.map((data) => (
                <NewsCard
                    key={data.id}
                    id={`${slugifyReplace(data.title, { lower: true, strict: true })}-${data.id}`}
                    title={data.title}
                    createdAt={data.created_at}
                />
            ))}
        </>
    );
};
