"use client";

import { LongNewsCard } from "@/widgets/news/long-news-card";
import { slugifyReplace } from "@/shared/libs/slugify";
import { usePostsStore } from "@/shared/providers/posts-store-provider";

const NewsList = () => {
    const { posts, searchParams } = usePostsStore((state) => state);

    if (!posts.length) return <section className="h-[396px] w-[900px]">Пум Пум Пум ... Новостей по вашему запросу не нашлось</section>;

    return (
        <section className="space-y-5">
            {posts.map((post) => (
                <LongNewsCard
                    key={post.id}
                    id={`${slugifyReplace(post.title, { lower: true, strict: true })}-${post.id}`}
                    title={post.title}
                    body={post.body}
                    type={post.type}
                    img={post.preview_picture}
                    createdAt={post.released_at}
                    currentPage={searchParams.page}
                />
            ))}
        </section>
    );
};

export default NewsList;
