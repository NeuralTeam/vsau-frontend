import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import Image from "next/image";
import Link from "next/link";

interface INewsCard {
    id: string;
    title: string;
    type: number;
    createdAt: number;
    img?: string;
}

const NewsCard = ({ id, title, type, createdAt, img }: INewsCard) => {
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
        <Link href={`${link}/${id}`} className="group duration-300 hover:scale-105 hover:shadow-xl active:scale-100 active:opacity-50">
            <div className="flex h-[300px] w-[300px] flex-col overflow-hidden rounded-[5px] bg-white">
                <div className="min-h-[60%] w-full overflow-hidden">
                    <Image
                        src={img ?? cardNewsPlug}
                        priority={false}
                        placeholder="blur"
                        alt="#"
                        className="w-full object-cover transition duration-300 group-hover:scale-105 group-active:scale-100"
                    />
                </div>
                <div className="mx-5 mb-2 mt-4 flex h-full flex-col justify-between">
                    <p className="line-clamp-4 w-fit text-[15px] font-semibold leading-[17px]">{title}</p>
                    <p className="text-[11px] font-normal leading-[13px]">{fmtDate}</p>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
