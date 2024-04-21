import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import markdownToTxt from "markdown-to-txt";

interface ILongNewsCard {
    id: string;
    title: string;
    body: string;
    createdAt: number;
    img?: string;
    currentPage: number;
}

export const LongNewsCard = async ({ id, title, body, createdAt, img, currentPage }: ILongNewsCard) => {
    const fmtDate = new Date(createdAt * 1000).toLocaleString("ru", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

    return (
        <Link href={{ pathname: `/news/${id}`, query: { ref: `news?page=${currentPage}` } }} className="group">
            <div className="flex h-[178px] w-[900px] overflow-hidden rounded-[5px] bg-white">
                <Image
                    src={img == null ? cardNewsPlug : img}
                    priority={false}
                    placeholder="blur"
                    alt="#"
                    className="h-full max-w-[300px] object-cover"
                />
                <div className="flex w-full flex-col justify-between px-10 pb-5 pt-8">
                    <div className="flex flex-col space-y-3">
                        <p className="line-clamp-2 text-[16px] font-semibold leading-[18px] group-hover:underline">{title}</p>
                        <p className="line-clamp-3 text-[12px] font-normal leading-[14px]">{markdownToTxt(`${body.slice(0, 256).trim()}`)}</p>
                    </div>

                    <div className="flex justify-between text-[11px] font-normal leading-[13px]">
                        <p>{fmtDate}</p>
                        <p className="text-[#03030380]">1052</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
