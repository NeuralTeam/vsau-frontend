import NewsCard from "@/widgets/news/news-card";

const NewsPage = () => {
    return (
        <div className="flex flex-col space-y-10">
            <div className="flex flex-col">
                <p className="text-xl font-bold">Заголовок</p>
                <p className="text-xl">Описание</p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:flex-wrap sm:gap-8 sm:space-y-0">
                {Array.from({ length: 10 }).map((_, i) => (
                    <NewsCard key={i} id={i} title="С новым годом, с новым счастьем !!!" date="23.12.2002" />
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
