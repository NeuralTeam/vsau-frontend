"use client";

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/shared/ui/shadcn/pagination";
import { cn } from "@/shared/libs/shadcn-utils";
import { useSearchParams } from "next/navigation";
import { useCounterStore } from "@/shared/providers/store-provider";
import { useEffect } from "react";

export const PostListPaginationBlock = () => {
    const searchParams = useSearchParams();
    const { setPosts, incrementCount, count } = useCounterStore((state) => state);
    const pageCount = Math.ceil(count / 2);
    let currentPage = +(searchParams.get("page") ?? 1);
    if (currentPage > pageCount) {
        currentPage = pageCount;
    }
    const maxPages = 7;
    const halfMaxPages = 4;

    const pages = Array.from({ length: pageCount }).map((_, i) => i + 1);
    const startPage = currentPage - 1;
    const endPage = currentPage > halfMaxPages ? startPage + maxPages - halfMaxPages + 1 : maxPages;
    let visiblePages = pages;
    if (pageCount > maxPages) {
        visiblePages = pages.slice(
            currentPage > halfMaxPages ? (currentPage > pageCount - halfMaxPages ? pageCount - maxPages : startPage - halfMaxPages + 1) : 0,
            endPage
        );
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (currentPage > 1) params.set("page", currentPage.toString());
        else params.delete("page");
        window.history.pushState(null, "", `?${params.toString()}`);
        console.log(params);
    }, [searchParams, currentPage]);

    const updateSearchParams = async (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (page > 1) params.set("page", page.toString());
        else params.delete("page");
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&${params.toString()}`);
        const data = await response.json();
        incrementCount(data.count);
        setPosts(data.posts);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    return (
        <div className="flex h-12 w-[900px] items-center justify-center space-x-10 rounded-[10px] bg-[#EBEBEB]">
            <Pagination>
                <PaginationContent className="space-x-2">
                    {pageCount > maxPages && currentPage > halfMaxPages && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                    {visiblePages.map((i) => (
                        <PaginationItem key={i}>
                            <button
                                onClick={() => updateSearchParams(i)}
                                className={cn("text-[#767676] opacity-30 hover:text-[#767676]", currentPage == i ? "font-bold opacity-100" : "")}
                            >
                                {i}
                            </button>
                        </PaginationItem>
                    ))}
                    {pageCount > maxPages && currentPage <= pageCount - halfMaxPages && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    );
};
