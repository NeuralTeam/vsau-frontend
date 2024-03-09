import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import Image from "next/image";
import Link from "next/link";

interface INewsCard {
    id: number;
    title: string;
    date: string;
    img?: string;
}

const NewsCard = ({ id, title, date, img }: INewsCard) => {
    return (
        <Link href={`/news/${id}`} className="group">
            <div className="flex flex-col rounded-lg rounded-t-xl border sm:h-[300px] sm:w-[300px]">
                <Image
                    src={img == null ? cardNewsPlug : img}
                    priority={false}
                    placeholder="blur"
                    alt="#"
                    className="hidden max-h-[50%] w-full rounded-t-xl object-cover sm:block"
                />
                <div className="mx-3 mb-2 mt-2 flex h-full flex-col justify-between space-y-2">
                    <p className="line-clamp-2 w-fit cursor-pointer font-bold hover:underline sm:line-clamp-3">{title}</p>
                    <div className="flex justify-between">
                        <p>{date}</p>
                        <p className="rounded-xl bg-primary/50 p-1 text-sm">Важно</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
