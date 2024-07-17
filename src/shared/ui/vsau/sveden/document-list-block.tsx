import { Dot } from "lucide-react";
import Link from "next/link";
import { cn } from "@/shared/libs/shadcn-utils";
import { IDocumentListBlock } from "@/shared/ui/vsau/sveden/types";

export const DocumentListBlock = ({ title, itemProp, docList }: IDocumentListBlock) => {
    let data = <p itemProp={itemProp}>Отсутствует</p>;

    if (docList && docList.length == 1)
        data = (
            <div className={cn("flex", docList[0].href && "text-[#0F91D6] underline-offset-2 hover:underline")}>
                <Dot className="min-h-6 min-w-6" />
                {!docList[0].href ? (
                    <p itemProp={docList[0].itemProp}>{docList[0].title}</p>
                ) : (
                    <Link href={docList[0].href} itemProp={docList[0].itemProp}>
                        {docList[0].title}
                    </Link>
                )}
            </div>
        );
    else if (docList && docList.length > 1)
        data = (
            <ul className="space-y-2">
                {docList.map((docEl) => (
                    <li key={docEl.id} className={cn("flex", docEl.href && "text-[#0F91D6] underline-offset-2 hover:underline")}>
                        <Dot className="min-h-6 min-w-6" />
                        {!docEl.href ? (
                            <p itemProp={docEl.itemProp}>{docEl.title}</p>
                        ) : (
                            <Link href={docEl.href} itemProp={docEl.itemProp}>
                                {docEl.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        );

    return (
        <div className="space-y-4 rounded-[10px] bg-white p-8 text-[18px]">
            <p className="text-[24px] font-semibold leading-[24px] text-[#0F91D6]">{title}</p>

            {data}
        </div>
    );
};
