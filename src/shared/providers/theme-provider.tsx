"use client";

import { ThemeProvider as ThemeProviderModule } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    // TODO: https://dev.to/ultroneoustech/creating-multiple-themes-in-tailwind-css-and-nextjs-2e98

    return <ThemeProviderModule {...props}>{children}</ThemeProviderModule>;
};
