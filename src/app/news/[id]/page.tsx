import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import cardNewsPlug from "@/shared/images/plugs/card_news.png";
import { MDXRemote } from "next-mdx-remote/rsc";
import NewsCard from "@/widgets/news/news-card";
import { Suspense } from "react";
import { Skeleton } from "@/shared/ui/shadcn/skeleton";
import { NewsOpenPhotoDialog } from "@/widgets/news/news-open-photo-dialog";
import { NewsGallery } from "@/widgets/news/news-gallery";
import { Eye } from "lucide-react";
import { ShareBlock } from "@/shared/ui/vsau/share-block";
import { slugifyReplace } from "@/shared/libs/slugify";
import { ShareIcon } from "@/shared/images/icons/other";
import { BtnBackArrowIcon } from "@/shared/images/icons/other/btn-back-arrow-icon";

export interface IPost {
    title: string;
    body: string;
    preview_picture: string | null;
    topic: { id: number; title: string } | null;
    released_at: number;
}

export interface IListPost {
    id: number;
    title: string;
    body: string;
    preview_picture: string | null;
    type: number;
    topic: string;
    updated_at: number;
    released_at: number;
}

async function getNewsByID(id: number): Promise<IPost> {
    return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts/${id}`, { cache: "no-store" }).then((res) => {
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
    const fmtDate = new Date(news.released_at * 1000).toLocaleString("ru", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

    return {
        title: news.title,
        openGraph: {
            title: news.title,
            tags: [news.topic != null ? news.topic.title : "Новости"],
            releaseDate: fmtDate
        }
    };
}

const RecommendedPosts = async () => {
    const posts: { count_page: number; current_page: number; posts: IListPost[] } = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&perPage=4`,
        { cache: "no-store" }
    ).then((res) => res.json());

    return (
        <>
            {posts.posts.map((data) => (
                <NewsCard
                    key={data.id}
                    id={`${slugifyReplace(data.title, { lower: true, strict: true })}-${data.id}`}
                    title={data.title}
                    createdAt={data.released_at}
                />
            ))}
        </>
    );
};

const NewsIDPage = async ({ params, searchParams }: { params: { id: string }; searchParams: { ref: string; mediaId?: number } }) => {
    const idSplit = params.id.split("-");
    const id = idSplit.slice(-1)[0];
    const querySeoTitle = idSplit.slice(0, -1).join("-");

    const post = await getNewsByID(+id);
    const seo_title = slugifyReplace(post.title, { lower: true, strict: true });
    if (querySeoTitle !== seo_title) {
        const ref = `?ref=${searchParams.ref}`;
        redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/news/${seo_title}-${id}${searchParams.ref !== undefined ? ref : ""}`);
    }

    const fmtDate = new Date(post.released_at * 1000).toLocaleString("ru", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

    return (
        <main className="flex justify-center space-x-[5vw] pl-[calc(4vw-70px)] pr-[4vw] pt-[70px]">
            <div className="flex max-w-[1000px] flex-col space-y-10">
                <div className="flex justify-between">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-8">
                            <p className="text-[14px] font-normal leading-[16px] text-[#030303]">{fmtDate}</p>
                            <div className="flex items-center space-x-1">
                                <Eye size={20} strokeWidth={2} />
                                <p className="text-[14px] font-normal leading-[16px] text-[#030303]">1234</p>
                            </div>
                        </div>
                        {post.topic != null && (
                            <div className="flex text-[17px] font-normal leading-[20px] text-[#7C7C7C]">
                                Раздел:
                                <Link href={`/news${`?topic=${post.topic.id}`}`} className="pl-2 text-[#0F91D6]">
                                    {post.topic.title.charAt(0).toUpperCase() + post.topic.title.slice(1)}
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="flex space-x-5">
                        <Link
                            href={searchParams.ref ? `/${searchParams.ref}` : "/news"}
                            className="group flex h-fit w-fit items-center space-x-3 text-nowrap rounded-[10px] bg-[#E3E3E3FF] px-8 py-3 duration-300 hover:bg-[#767676] hover:text-[#FFFFFF] active:scale-90"
                        >
                            <BtnBackArrowIcon width={20} height={20} fill="#000000" className="duration-300 group-hover:fill-[#FFFFFF]" />
                            <p>Назад к новостям</p>
                        </Link>
                        <Link
                            href="#share-section"
                            className="group flex h-fit w-fit items-center space-x-3 text-nowrap rounded-[10px] bg-[#E3E3E3FF] px-8 py-3 duration-300 hover:bg-[#767676] hover:text-[#FFFFFF] active:scale-90"
                        >
                            <ShareIcon width={20} height={20} fill="#000000" className="duration-300 group-hover:fill-[#FFFFFF]" />
                            <p>Поделиться</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <h1 className="text-[28px] font-medium leading-[32px] text-[#030303]">{post.title}</h1>

                    <div className="space-y-8">
                        <NewsOpenPhotoDialog isOpen={searchParams.mediaId == 0} mediaId={0} photo={cardNewsPlug}>
                            <div className="overflow-hidden rounded-[10px]">
                                <Image
                                    src={
                                        post.preview_picture === null
                                            ? cardNewsPlug
                                            : `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/storage/${post.preview_picture}?bucket=posts`
                                    }
                                    width={1920}
                                    height={250}
                                    priority={true}
                                    placeholder="empty"
                                    alt="#"
                                    className="aspect-video object-cover transition duration-300 hover:scale-110 active:scale-100 active:opacity-50"
                                />
                            </div>
                        </NewsOpenPhotoDialog>

                        <div>
                            <MDXRemote source={post.body} />
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
