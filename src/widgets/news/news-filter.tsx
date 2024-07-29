"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export interface ITopic {
    id: number;
    title: string;
}

const SectionFilter = ({ topics }: { topics: ITopic[] }) => {
    const query = useSearchParams();
    const currentTopic = query.get("topic") ?? 0;

    return (
        <div className="flex w-[300px] flex-col rounded-[5px] bg-white p-8">
            <Link href="/news" className={currentTopic == 0 ? "font-semibold" : ""}>
                Всё
            </Link>
            {topics.map((data) => (
                <Link key={data.id} href={`/news?topic=${data.id}`} className={currentTopic == data.id ? "font-semibold" : ""}>
                    {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
                </Link>
            ))}
        </div>
    );
};

export default SectionFilter;
