import { cn } from "@/shared/libs/shadcn-utils";

export const NavCollapseArrow = ({
    width,
    height,
    fillColor,
    className
}: {
    width: number;
    height: number;
    fillColor: string;
    className?: string;
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 9 8"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-[8px] w-[9px]", className)}
        >
            <path
                opacity="0.5"
                d="M6.23205 7C5.46225 8.33333 3.53775 8.33333 2.76795 7L0.602886 3.25C-0.166914 1.91667 0.795336 0.25 2.33494 0.25L6.66506 0.250001C8.20467 0.250001 9.16692 1.91667 8.39711 3.25L6.23205 7Z"
            />
        </svg>
    );
};
