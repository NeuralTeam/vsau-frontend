import RootCarousel, { IRootCarousel } from "@/widgets/root/root-carousel";
import { Separator } from "@/shared/ui/shadcn/separator";
import NewsCard from "@/widgets/news/news-card";
import StaticBanner from "@/widgets/root/root-static-banner";
import Link from "next/link";

const carouselData: IRootCarousel[] = [
    { id: 1, title: "Смотрите на меня", description: "Да, да. На меня смотрите" },
    { id: 2, title: "Смотрите на меня", description: "Да, да. На меня смотрите" },
    { id: 3, title: "Смотрите на меня", description: "Да, да. На меня смотрите" },
    { id: 4, title: "Смотрите на меня и только на меня", description: "Да, да. На меня смотрите. То-ль-ко на ме-ня!!!" },
    { id: 5, title: "Не смотрите на меня", description: "НЕТ, нет. Смотрите не на меня пожалуйста. Я не баннер!" }
];

const RootPage = () => {
    return (
        <>
            <div className="-m-6 mt-0 flex flex-col items-center">
                <RootCarousel data={carouselData} />
            </div>
            <Separator className="mt-16" />
            <div className="mt-8 space-y-8">
                <div className="flex flex-col items-center">
                    <StaticBanner />
                </div>
                <Separator />
                <div className="flex flex-col space-y-8">
                    <h1 className="line-clamp-1 w-fit text-3xl font-semibold underline-offset-[5px] hover:underline">
                        <Link href="/news">Новости</Link>
                    </h1>

                    <div className="flex flex-col space-y-4 pb-3 sm:flex-row sm:flex-nowrap sm:gap-8 sm:space-y-0 sm:overflow-x-scroll">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <NewsCard key={i} id={i} title="С новым годом, с новым счастьем !!!" date="23.12.2002" />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col space-y-8">
                    <h1 className="line-clamp-1 w-fit text-3xl font-semibold underline-offset-[5px] hover:underline">
                        <Link href="/news">Мероприятия</Link>
                    </h1>
                    <div className="flex flex-col space-y-4 pb-3 sm:flex-row sm:flex-nowrap sm:gap-8 sm:space-y-0 sm:overflow-x-scroll">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <NewsCard key={i} id={i} title="С новым годом, с новым счастьем !!!" date="23.12.2002" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RootPage;
