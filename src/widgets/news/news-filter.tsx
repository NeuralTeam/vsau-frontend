"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/shadcn/accordion";
import { NavCollapseArrow } from "@/shared/images/icons/nav-collapse-arrow";
import { useEffect, useState } from "react";

export interface ITopic {
    id: number;
    title: string;
}

const SectionFilter = ({ topics }: { topics: ITopic[] }) => {
    const query = useSearchParams();
    const currentTopic = query.get("topic") ?? 0;

    const [topic, setTopic] = useState("Всё");

    useEffect(() => {
        const topicArr = topics.filter((v) => v.id == currentTopic);
        if (topicArr.length === 0) {
            setTopic("Всё");
            return;
        }
        setTopic(topicArr[0].title);
    }, [currentTopic]);

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="space-y-4 rounded-[10px] bg-white px-6 py-4">
                <AccordionTrigger className="flex justify-between px-4 py-2">
                    {topic}
                    <NavCollapseArrow width={11} height={10} fillColor="#000000" className="-rotate-90 duration-300" />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col px-4 py-2">
                    <Link href="/news" className={currentTopic == 0 ? "font-semibold" : ""}>
                        Всё
                    </Link>
                    {topics.map((data) => (
                        <Link key={data.id} href={`/news?topic=${data.id}`} className={currentTopic == data.id ? "font-semibold" : ""}>
                            {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
                        </Link>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default SectionFilter;
