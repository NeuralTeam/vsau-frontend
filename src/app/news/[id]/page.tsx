import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import { Skeleton } from "@/shared/ui/shadcn/skeleton";
import { NewsOpenPhotoDialog } from "@/widgets/news/news-open-photo-dialog";
import { NewsGallery } from "@/widgets/news/news-gallery";
import { ArrowLeft, Eye, Share2 } from "lucide-react";
import { ShareBlock } from "@/shared/ui/vsau/share-block";
import { IListPost } from "@/shared/ui/vsau/posts/post-list-block";
import { slugifyReplace } from "@/shared/libs/slugify";
import { RecommendedPostsBlock } from "@/shared/ui/vsau/posts/recommended-posts-block";

async function getNewsByID(id: number): Promise<IListPost> {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts/${id}`).then((res) => {
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
            releaseDate: fmtDate
        }
    };
}

const NewsIDPage = async ({ params, searchParams }: { params: { id: string }; searchParams: { ref: string; mediaId?: number } }) => {
    const idSplit = params.id.split("-");
    const id = idSplit.slice(-1)[0];
    const querySeoTitle = idSplit.slice(0, -1).join("-");

    const news = await getNewsByID(+id);
    const seoTitle = slugifyReplace(news.title, { lower: true, strict: true });
    if (querySeoTitle !== seoTitle) {
        const ref = `?ref=${searchParams.ref}`;
        redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/news/${seoTitle}-${id}${searchParams.ref !== undefined ? ref : ""}`);
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
                            <Image
                                src={cardNewsPlug}
                                priority={false}
                                placeholder="blur"
                                alt="#"
                                className="aspect-video rounded-[10px] object-cover"
                            />
                        </NewsOpenPhotoDialog>

                        <div>{/*<MDXRemote source={news.body} />*/}</div>

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

                <RecommendedPostsBlock />
            </div>
        </main>
    );
};

export default NewsIDPage;
