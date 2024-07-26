"use client";

import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import Image from "next/image";
import Link from "next/link";
import { useCounterStore } from "@/shared/providers/store-provider";

export interface IListPost {
    id: number;
    title: string;
    preview_picture?: string;
    type: number;
    topic: string;
    updated_at: number;
    created_at: number;
}

export const PostListBlock = () => {
    const { posts } = useCounterStore((state) => state);

    return (
        <div className="w-4/5 min-w-[550px] max-w-[80%] space-y-8">
            {posts.map((post) => (
                <div key={post.id} className="flex overflow-hidden rounded-[10px] bg-white">
                    <Image src={cardNewsPlug} priority={false} placeholder="blur" alt="#" className="max-w-[300px] object-cover" />
                    <div className="flex flex-col justify-between p-8">
                        <Link href={`/news/${post.id}`} className="line-clamp-3">
                            {post.title}
                        </Link>

                        <p>
                            {new Date(post.created_at * 1000).toLocaleString("ru", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "UTC"
                            })}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
