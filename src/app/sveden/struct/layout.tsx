import { ReactNode } from "react";
import { TemplatePage } from "@/shared/ui/vsau/sveden";
import { cn } from "@/shared/libs/shadcn-utils";
import Link from "next/link";
import { ScrollToTopButton } from "@/shared/ui/vsau/scroll-to-top-button";
import { slugifyReplace } from "@/shared/libs/slugify";

export interface IStructChapter {
    id: number;
    name: string;
    parent: number | null;
}

const SvedenStructLayout = async ({
    children
}: Readonly<{
    children: ReactNode;
}>) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/struct`);
    const struct: IStructChapter[] = await response.json();

    return (
        <TemplatePage title="Структура и органы управления образовательной организацией">
            <div className="flex space-x-10">
                <div className="flex w-[500px] flex-col justify-between rounded-[10px] bg-white p-8">
                    <div className="space-y-5">
                        {struct.map(
                            (chapter) =>
                                chapter.parent === null && (
                                    <details key={chapter.id} open={true}>
                                        <summary className={cn("cursor-pointer text-[19px] leading-[22px]", "font-bold text-[#0F91D6]")}>
                                            {chapter.name}
                                        </summary>
                                        <ul className="ml-5 flex flex-col space-y-2 pt-2 text-[17px] font-normal leading-[19px] opacity-50">
                                            {struct.map(
                                                (chapterData) =>
                                                    chapterData.parent == chapter.id && (
                                                        <li key={chapterData.id}>
                                                            <Link href={`#${slugifyReplace(chapterData.name, { lower: true, strict: true })}`}>
                                                                {chapterData.name}
                                                            </Link>
                                                        </li>
                                                    )
                                            )}
                                        </ul>
                                    </details>
                                )
                        )}
                    </div>
                    <ScrollToTopButton />
                </div>
                <div className="w-full">{children}</div>
            </div>
        </TemplatePage>
    );
};

export default SvedenStructLayout;
