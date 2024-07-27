import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import { MDXRemote } from "next-mdx-remote/rsc";
import { IListPosts } from "@/app/news/(static)/page";
import NewsCard from "@/widgets/news/news-card";
import { Suspense } from "react";
import { Skeleton } from "@/shared/ui/shadcn/skeleton";
import { NewsOpenPhotoDialog } from "@/widgets/news/news-open-photo-dialog";
import { NewsGallery } from "@/widgets/news/news-gallery";
import { ArrowLeft, Eye, Files, Share2 } from "lucide-react";
import { ShareBlock } from "@/shared/ui/vsau/share-block";

export interface IPost {
    seo_title: string;
    title: string;
    body: string;
    picture: string | null;
    topic: string;
    created_at: number;
}

async function getNewsByID(id: number): Promise<IPost> {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/news/${id}`).then((res) => {
        const data = res.json();
        if (res.status !== 200) notFound();

        return data;
    });
}

export async function generateMetadata(
    { params, searchParams }: { params: { id: string }; searchParams: { ref: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const idSplit = params.id.split("-");
    const id = idSplit.slice(-1)[0];
    const news = await getNewsByID(+id);
    const fmtDate = new Date(news.created_at * 1000).toLocaleString("ru", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
    return {
        title: news.title,
        openGraph: {
            title: news.title,
            tags: [news.topic],
            releaseDate: fmtDate
        }
    };
}

const RecommendedPosts = async () => {
    const posts: { count: number; posts: IListPosts[] } = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/news?limit=3&offset=0`, {
        cache: "no-cache"
    }).then((res) => res.json());

    return (
        <>
            {posts.posts.map((data) => (
                <NewsCard key={data.id} id={`${data.seo_title}-${data.id}`} title={data.title} createdAt={data.created_at} />
            ))}
        </>
    );
};

const NewsIDPage = async ({ params, searchParams }: { params: { id: string }; searchParams: { ref: string; mediaId?: number } }) => {
    const idSplit = params.id.split("-");
    const id = idSplit.slice(-1)[0];
    const seoTitle = idSplit.slice(0, -1).join("-");

    const news = await getNewsByID(+id);
    if (seoTitle !== news.seo_title) {
        const ref = `?ref=${searchParams.ref}`;
        redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/news/${news.seo_title}-${id}${searchParams.ref !== undefined ? ref : ""}`);
    }

    const fmtDate = new Date(news.created_at * 1000).toLocaleString("ru", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

    return (
        <main className="flex justify-center space-x-[5vw] pl-[calc(4vw-70px)] pr-[4vw] pt-[70px]">
            <div className="flex max-w-[1000px] flex-col space-y-10">
                <div className="flex justify-between">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-8">
                            <p className="text-[14px] font-normal leading-[16px] text-[#030303]">{fmtDate}</p>
                            <div className="flex items-center space-x-1">
                                <Eye size={20} strokeWidth={2} />
                                <p className="text-[14px] font-normal leading-[16px] text-[#030303]">1234</p>
                            </div>
                        </div>
                        <p className="text-[17px] font-normal leading-[20px] text-[#030303] opacity-50">
                            Раздел: {news.topic.charAt(0).toUpperCase() + news.topic.slice(1)}
                        </p>
                    </div>

                    <div className="flex space-x-5">
                        <Link
                            href={searchParams.ref ? `/${searchParams.ref}` : "/news"}
                            className="flex h-fit w-fit items-center space-x-2 text-nowrap rounded-[10px] bg-[#E3E3E3FF] px-6 py-3"
                        >
                            <ArrowLeft size={24} strokeWidth={3} />
                            <p>Назад к новостям</p>
                        </Link>
                        <Link
                            href="#share-section"
                            className="flex h-fit w-fit items-center space-x-2 text-nowrap rounded-[10px] bg-[#E3E3E3FF] px-6 py-3"
                        >
                            <Share2 size={20} strokeWidth={3} />
                            <p>Поделиться</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col space-y-10">
                    <h1 className="text-[28px] font-medium leading-[32px] text-[#030303]">{news.title}</h1>

                    <div className="space-y-5">
                        <NewsOpenPhotoDialog isOpen={searchParams.mediaId == 0} photo={cardNewsPlug}>
                            <div className="overflow-hidden rounded-[10px]">
                                <Image
                                    src={cardNewsPlug}
                                    priority={false}
                                    placeholder="blur"
                                    alt="#"
                                    className="aspect-video object-cover transition duration-300 hover:scale-105 active:scale-100 active:opacity-50"
                                />
                            </div>
                        </NewsOpenPhotoDialog>

                        <div>
                            <MDXRemote source={news.body} />
                        </div>

                        <NewsGallery mediaId={searchParams.mediaId} photoList={Array.from({ length: 11 }).map(() => cardNewsPlug)} />
                    </div>

                    <ShareBlock />
                </div>
            </div>

            <div className="flex flex-col space-y-5">
                <div className="flex items-center justify-between space-x-10">
                    <h2 className="text-2xl font-semibold">Рекомендуемое</h2>
                    <Link href="/news" className="text-[17px] font-normal leading-[20px] text-[#0F91D6]">
                        Все
                    </Link>
                </div>

                <Suspense
                    fallback={Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex h-[300px] w-[300px] flex-col justify-between rounded-[5px] bg-white p-5">
                            <div className="flex space-x-3">
                                <Skeleton className="h-20 min-w-20 rounded-full" />
                                <div className="w-full space-y-3">
                                    <Skeleton className="h-6" />
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
                >
                    <RecommendedPosts />
                </Suspense>
            </div>
        </main>
    );
};

export default NewsIDPage;
