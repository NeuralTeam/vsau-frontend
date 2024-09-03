"use client";

import { useEffect, useState } from "react";
import { cn } from "@/shared/libs/shadcn-utils";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 1000) setIsVisible(true);
            else setIsVisible(false);
        });
    }, []);

    return (
        <button
            className={cn(
                "z-1000 fixed bottom-4 rounded-md bg-[#E3E3E3] px-4 py-2 text-xl",
                "transition-opacity duration-300 ease-in-out",
                isVisible ? "visible opacity-100" : "invisible opacity-0"
            )}
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            Наверх
        </button>
    );
};
