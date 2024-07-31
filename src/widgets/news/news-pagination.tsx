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
        <div className="flex items-center justify-center space-x-5">
            <Pagination className="min-h-12 rounded-[10px] bg-[#EBEBEB]">
                <PaginationContent className="space-x-5">
                    {pageCount > maxPages && currentPage > halfMaxPages && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                    {visiblePages.map((i) => (
                        <PaginationItem key={i} className={cn(currentPage != i && "duration-100 active:scale-90")}>
                            <PaginationLink
                                href={searchParams.get("topic") !== null ? `/news?page=${i}&topic=${searchParams.get("topic")}` : `/news?page=${i}`}
                                className={cn("font-bold text-[#767676] opacity-30 hover:opacity-100", currentPage == i ? "opacity-100" : "")}
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
            <button className="min-h-12 w-1/3 rounded-[10px] bg-[#EBEBEB] px-10 font-bold text-[#767676] duration-300 hover:bg-[#767676] hover:text-[#EBEBEB] active:scale-90">
                Показать ещё
            </button>
        </div>
    );
};

export default NewsPagination;
