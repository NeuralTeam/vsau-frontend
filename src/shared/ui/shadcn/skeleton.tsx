import { cn } from "@/shared/libs/shadcn-utils";
import { HTMLAttributes } from "react";

function Skeleton({ className, ...props }: Readonly<HTMLAttributes<HTMLDivElement>>) {
    return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
