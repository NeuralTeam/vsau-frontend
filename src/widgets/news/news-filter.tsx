"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/shadcn/accordion";
import { NavCollapseArrow } from "@/shared/images/icons/nav-collapse-arrow";
import { useEffect, useState } from "react";
import { usePostsStore } from "@/shared/providers/posts-store-provider";

export interface ITopic {
    id: number;
    title: string;
}

const SectionFilter = () => {
    const { topics, setSearchParams } = usePostsStore((state) => state);
    const searchParams = useSearchParams();
    const currentTopicId = +(searchParams.get("topic") ?? 0);
    const [currentTopic, setCurrentTopic] = useState("Всё");

    const setTopic = (topic: number) => {
        if (currentTopicId === topic) return;

        const params = new URLSearchParams(searchParams);
        if (topic !== 0) params.set("topic", topic.toString());
        else params.delete("topic");

        const page = +(params.get("page") ?? 1);

        setSearchParams({ page: page, perPage: 3, topic: topic });
        window.history.replaceState(null, "", `?${params.toString()}`);
    };

    useEffect(() => {
        const topicArr = topics.filter((v) => v.id == currentTopicId);
        if (topicArr.length === 0) {
            setCurrentTopic("Всё");
            return;
        }
        setCurrentTopic(topicArr[0].title);
    }, [currentTopicId]);

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="space-y-4 rounded-[10px] bg-white px-6 py-4">
                <AccordionTrigger className="flex justify-between px-4 py-2">
                    {currentTopic}
                    <NavCollapseArrow width={11} height={10} fillColor="#000000" className="-rotate-90 duration-300" />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-start px-4 py-2">
                    <button onClick={() => setTopic(0)} className={currentTopicId == 0 ? "font-semibold" : ""}>
                        Всё
                    </button>
                    {topics.map((data) => (
                        <button key={data.id} onClick={() => setTopic(data.id)} className={currentTopicId == data.id ? "font-semibold" : ""}>
                            {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
                        </button>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default SectionFilter;
