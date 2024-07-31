import { SVGProps } from "react";

export const DownloadIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M200 200H0V183.333H200V200ZM117.833 159.25L199.667 75H141.75V0H58.3333V75H0.583333L82.25 159.25C87 164.083 93.25 166.667 99.9167 166.667C106.583 166.667 112.917 164.083 117.667 159.25H117.833Z" />
        </svg>
    );
};
