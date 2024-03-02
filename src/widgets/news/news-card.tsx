import imgTest from "@/shared/images/news.png";
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
                    src={imgTest}
                    priority={false}
                    placeholder="blur"
                    alt="#"
                    width={0}
                    height={0}
                    className="hidden w-full rounded-t-xl sm:block"
                />
                <div className="mx-3 mb-1 mt-2 flex h-full flex-col justify-between space-y-2">
                    <p className="line-clamp-2 cursor-pointer font-bold hover:underline sm:line-clamp-3">{title}</p>
                    <div className="flex justify-between">
                        <p>{date}</p>
                        <p>#МбВажно</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
