import { cn } from "@/shared/libs/shadcn-utils";
import { ReactNode } from "react";

export interface IBlock {
    title: string;
    className?: string;
    children?: Readonly<ReactNode>;
}

export const Block = ({ title, className, children }: IBlock) => {
    return (
        <div className={cn("space-y-4 rounded-[10px] bg-white p-8 text-[18px]", className)}>
            <p className="text-[24px] font-semibold leading-[24px] text-[#0F91D6]">{title}</p>

            {children}
        </div>
    );
};
