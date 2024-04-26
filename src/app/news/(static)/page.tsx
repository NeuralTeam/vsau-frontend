import NewsList from "@/widgets/news/news-list";
import { Skeleton } from "@/shared/ui/shadcn/skeleton";
import { Suspense } from "react";

export interface IListPosts {
    id: number;
    seo_title: string;
    title: string;
    short_body: string;
    picture: string | null;
    created_at: number;
}

const NewsPage = ({
    searchParams
}: {
    searchParams: {
        [key: string]: any;

        page: number;
        topic: string;
    };
}) => {
    const currentPage = searchParams.page || 1;
    const pagination = {
        currentPage: currentPage,
        offsetPage: (currentPage - 1) * 2,
        limitOnPage: 2
    };

    return (
        <div className="space-y-10">
            <Suspense
                fallback={
                    <div className="space-y-10">
                        {Array.from({ length: 2 }).map((_, i) => (
                            <div key={i} className="h-[178px] w-[900px] space-y-3">
                                <div className="flex space-x-3">
                                    <Skeleton className="h-20 min-w-20 rounded-full" />
                                    <div className="w-full space-y-3">
                                        <Skeleton className="h-6" />
                                        <Skeleton className="h-6" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Skeleton className="h-8" />
                                    <Skeleton className="h-16" />
                                </div>
                            </div>
                        ))}
                    </div>
                }
            >
                <NewsList pagination={pagination} topic={searchParams.topic} />
            </Suspense>
        </div>
    );
};

export default NewsPage;
