import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/shared/styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { NavigationNavbar } from "@/widgets/navbar/navigation-navbar";
import RootFooter from "@/widgets/footer";
import * as React from "react";

// https://fonts.google.com/specimen/Rubik
const rubikFont = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
    title: "ВГАУ: Сайт",
    description: "Публичный сайт Воронежского Государственного Аграрного Университета имени Петра Великого",
    category: "education",
    authors: [{ name: "NeuralTeam", url: "https://neuralteam.ru" }],
    // https://ogp.me
    openGraph: {
        title: "ВГАУ",
        description: "Публичный сайт Воронежского ГАУ",
        url: process.env.NEXT_PUBLIC_DOMAIN,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_DOMAIN}/og_example.jpg`, // Абсолютный URL
                alt: "Публичный сайт Воронежского Государственного Аграрного Университета имени Петра Великого",
                width: 1280,
                height: 720
            }
        ],
        countryName: "russia",
        locale: "ru",
        alternateLocale: ["en"],
        type: "website"
    },
    referrer: "strict-origin-when-cross-origin"
    // https://developer.mozilla.org/ru/docs/Web/Manifest
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
                    <div className="my-8 min-h-[100vh] px-[15%]">{children}</div>
                    <RootFooter />
                </ThemeProvider>
            </body>
        </html>
    );
}
