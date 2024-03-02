import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/shared/styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { NavigationNavbar } from "@/widgets/navbar/navigation-navbar";
import RootFooter from "@/widgets/footer";
import * as React from "react";

const rubikFont = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "ВГАУ"
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body className={rubikFont.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <NavigationNavbar />
                    <div className="m-8 min-h-[100vh]">{children}</div>
                    <RootFooter />
                </ThemeProvider>
            </body>
        </html>
    );
}
