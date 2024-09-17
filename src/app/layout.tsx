import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "@/shared/styles/globals.css";
import "react-day-picker/style.css";
import { ReactNode } from "react";
import NavigationSidebar from "@/widgets/navbar/navigation-sidebar";
import RootFooter from "@/widgets/root/root-footer";
import Script from "next/script";
import { cn } from "@/shared/libs/shadcn-utils";

// https://fonts.google.com/specimen/Rubik
// TODO: скачать локально шрифт Rubik
const rubikFont = Rubik({ subsets: ["latin", "cyrillic"] });
// const rubikFont = Roboto({ subsets: ["latin", "cyrillic"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
    title: "ФГБОУ ВО Воронежский ГАУ",
    description: "Публичный сайт Воронежского Государственного Аграрного Университета имени Петра Великого",
    category: "education",
    authors: [{ name: "NeuralTeam", url: "https://neuralteam.ru" }],
    // https://ogp.me
    openGraph: {
        title: "ФГБОУ ВО Воронежский ГАУ",
        description: "Публичный сайт Воронежского ГАУ",
        url: process.env.NEXT_PUBLIC_DOMAIN,
        countryName: "russia",
        locale: "ru",
        alternateLocale: ["en"],
        type: "website"
    },
    referrer: "strict-origin-when-cross-origin"
    // https://developer.mozilla.org/ru/docs/Web/Manifest
    // manifest: "/manifest.json"
};

export const viewport: Viewport = {
    // TODO: принуждение телефона смотреть сайт как на ПК
    width: "1024"
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
            <body className={cn("flex h-screen w-screen overflow-hidden", rubikFont.className)}>
                <NavigationSidebar />
                <div className="h-full max-h-screen w-full overflow-y-auto overflow-x-hidden bg-[#F8F8F8]">
                    <div className="pl-[70px]">{children}</div>
                    <RootFooter />
                </div>
                <Script src="/jquery.js" />
                <Script src="/uhpv-full.js" />
            </body>
        </html>
    );
}
