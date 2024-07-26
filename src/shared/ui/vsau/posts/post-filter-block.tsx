"use client";

import { useSearchParams } from "next/navigation";
import { cn } from "@/shared/libs/shadcn-utils";
import { useCounterStore } from "@/shared/providers/store-provider";

export interface ITopic {
    id: number;
    title: string;
}

export const PostFilterBlock = ({ topics }: { topics: ITopic[] }) => {
    const searchParams = useSearchParams();
    const currentTopic = searchParams.get("topic") ?? 0;
    const { setPosts, incrementCount } = useCounterStore((state) => state);

    const updateSearchParams = async (topic: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (topic != 0) params.set("topic", topic.toString());
        else params.delete("topic");
        params.delete("page");
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&${params.toString()}`);
        const data = await response.json();
        incrementCount(data.count);
        setPosts(data.posts);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    return (
        <div className="flex h-fit w-1/5 min-w-[220px] flex-col space-y-2 overflow-hidden rounded-[10px] bg-white p-8 leading-[16px]">
            <button onClick={() => updateSearchParams(0)} className={cn("text-left", !currentTopic && "font-semibold")}>
                Всё
            </button>
            {topics.map((data) => (
                <button
                    key={data.id}
                    onClick={() => updateSearchParams(data.id)}
                    className={cn("text-left", currentTopic == data.id && "font-semibold")}
                >
                    {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
                </button>
            ))}
        </div>
    );
};
