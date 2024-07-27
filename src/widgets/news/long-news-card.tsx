import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import Image from "next/image";
import Link from "next/link";
import markdownToTxt from "markdown-to-txt";

interface ILongNewsCard {
    id: string;
    title: string;
    body: string;
    createdAt: number;
    img?: string;
    currentPage: number;
}

export const LongNewsCard = ({ id, title, body, createdAt, img, currentPage }: ILongNewsCard) => {
    const fmtDate = new Date(createdAt * 1000).toLocaleString("ru", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

    return (
        <Link
            href={{ pathname: `/news/${id}`, query: { ref: `news?page=${currentPage}` } }}
            className="group block duration-300 hover:scale-105 hover:shadow-xl active:scale-100 active:opacity-50"
        >
            <div className="flex h-[178px] w-[900px] overflow-hidden rounded-[5px] bg-white">
                <Image src={img ?? cardNewsPlug} priority={false} placeholder="blur" alt="#" className="h-full max-w-[300px] object-cover" />
                <div className="flex w-full flex-col justify-between px-10 pb-5 pt-8">
                    <div className="flex flex-col space-y-3">
                        <p className="line-clamp-2 text-[16px] font-semibold leading-[18px]">{title}</p>
                        <p className="line-clamp-3 text-[12px] font-normal leading-[14px]">{markdownToTxt(`${body.slice(0, 256).trim()}`)}</p>
                    </div>

                    <div className="flex justify-between text-[11px] font-normal leading-[13px]">
                        <p>{fmtDate}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
