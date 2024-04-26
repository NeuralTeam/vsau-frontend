import { cn } from "@/shared/libs/shadcn-utils";
import { HTMLAttributes } from "react";

function Skeleton({ className, ...props }: Readonly<HTMLAttributes<HTMLDivElement>>) {
    return <div className={cn("animate-pulse rounded-md bg-[#E1E1E1]", className)} {...props} />;
}

export { Skeleton };
