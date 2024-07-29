"use client";

import { useSearchParams } from "next/navigation";
import { cn } from "@/shared/libs/shadcn-utils";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/shared/ui/shadcn/pagination";

const NewsPagination = ({ pageCount }: { pageCount: number }) => {
    const searchParams = useSearchParams();
    const currentPage = +(searchParams.get("page") ?? 1);
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
    return (
        <div className="flex h-12 items-center justify-center space-x-5">
            <Pagination className="rounded-[10px] bg-[#EBEBEB]">
                <PaginationContent>
                    {pageCount > maxPages && currentPage > halfMaxPages && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                    {visiblePages.map((i) => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                href={searchParams.get("topic") !== null ? `/news?page=${i}&topic=${searchParams.get("topic")}` : `/news?page=${i}`}
                                className={cn("text-[#767676] opacity-30 hover:text-[#767676]", currentPage == i ? "font-bold opacity-100" : "")}
                            >
                                {i}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    {pageCount > maxPages && currentPage <= pageCount - halfMaxPages && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
            <button className="w-1/3 rounded-[10px] bg-[#EBEBEB] px-10 py-2">Показать ещё</button>
        </div>
    );
};

export default NewsPagination;
