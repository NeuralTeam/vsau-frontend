import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import Image from "next/image";
import Link from "next/link";
import markdownToTxt from "markdown-to-txt";

interface ILongNewsCard {
    id: string;
    title: string;
    body: string;
    type: number;
    createdAt: number;
    img: string | null;
    currentPage: number;
}

export const LongNewsCard = ({ id, title, body, type, createdAt, img, currentPage }: ILongNewsCard) => {
    const fmtDate = new Date(createdAt * 1000).toLocaleString("ru", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
    let link = "";

    switch (type) {
        case 1:
            link = "/posts/news";
            break;
        case 2:
            link = "/posts/ads";
            break;
        case 3:
            link = "/posts/announces";
            break;
    }

    return (
        <Link
            href={{ pathname: `${link}/${id}`, query: { ref: `${link.substring(1)}?page=${currentPage}` } }}
            className="group block duration-300 hover:scale-105 hover:shadow-xl active:scale-100 active:opacity-50"
        >
            <div className="flex max-h-[178px] w-[900px] overflow-hidden rounded-[5px] bg-white">
                <Image
                    src={img === null ? cardNewsPlug : `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/storage/${img}?bucket=posts`}
                    priority={false}
                    width={300}
                    height={170}
                    placeholder="empty"
                    alt="#"
                    className="h-full max-w-[300px] object-cover"
                />
                <div className="flex w-full flex-col justify-between px-10 pb-5 pt-8">
                    <div className="flex flex-col space-y-3">
                        <p className="line-clamp-2 text-[16px] font-semibold leading-[18px]">{title}</p>
                        {/*<p className="line-clamp-3 text-[12px] font-normal leading-[14px]">{markdownToTxt(`${body.slice(0, 256).trim()}`)}</p>*/}
                        <p className="line-clamp-3 text-[12px] font-normal leading-[14px]">{body}</p>
                    </div>

                    <div className="flex justify-between text-[11px] font-normal leading-[13px]">
                        <p>{fmtDate}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
