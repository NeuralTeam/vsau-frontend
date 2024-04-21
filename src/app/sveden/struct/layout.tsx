import { ReactNode } from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { cn } from "@/shared/libs/shadcn-utils";

const SvedenStructLayout = ({
    children
}: Readonly<{
    children: ReactNode;
}>) => {
    const headersList = headers();
    const fullPathname = headersList.get("next-url") ?? "/sveden/struct/rukovodstvo";
    const activeSectionClass = "font-bold text-[#0F91D6]";

    return (
        <main className="space-y-5 pr-[70px] pt-[50px]">
            <h1>Структура и органы управления образовательной организацией</h1>
            <div className="flex space-x-10">
                <div className="flex w-[500px] flex-col justify-between rounded-[10px] bg-white p-8">
                    <div className="space-y-5">
                        <details open={true}>
                            <summary
                                className={cn(
                                    "cursor-pointer text-[19px] leading-[22px]",
                                    fullPathname.split("/").slice(-1)[0] === "rukovodstvo" && activeSectionClass
                                )}
                            >
                                Руководство
                            </summary>
                            <ul role="list" className="ml-5 flex flex-col space-y-2 pt-2 text-[17px] font-normal leading-[19px] opacity-50">
                                <Link href="/sveden/struct/rukovodstvo#section-1">Ректор Воронежского ГАУ</Link>
                                <Link href="/sveden/struct/rukovodstvo#section-2">Ректорат</Link>
                                <Link href="/sveden/struct/rukovodstvo#section-3">Финансово-экономическое управление</Link>
                                <Link href="/sveden/struct/rukovodstvo#section-4">Хозяйственная служба</Link>
                                <Link href="/sveden/struct/rukovodstvo#section-5">Служба кадрового обеспечения</Link>
                                <Link href="/sveden/struct/rukovodstvo#section-6">Отдел делопроизводства</Link>
                                <Link href="/sveden/struct/rukovodstvo#section-7">Служба безопасности</Link>
                            </ul>
                        </details>
                        <details open={true}>
                            <summary
                                className={cn(
                                    "cursor-pointer text-[19px] leading-[22px]",
                                    fullPathname.split("/").slice(-1)[0] === "prorektor-po-uchebnoj-rabote" && activeSectionClass
                                )}
                            >
                                Проректор по учебной работе
                            </summary>
                            <div className="ml-5 flex flex-col space-y-2 pt-2 text-[17px] font-normal leading-[19px] opacity-50">
                                <Link href="/sveden/struct/prorektor-po-uchebnoj-rabote#section-1">Ректор Воронежского ГАУ</Link>
                                <Link href="/sveden/struct/prorektor-po-uchebnoj-rabote#section-2">Ректорат</Link>
                                <Link href="/sveden/struct/prorektor-po-uchebnoj-rabote#section-3">Финансово-экономическое управление</Link>
                                <Link href="/sveden/struct/prorektor-po-uchebnoj-rabote#section-4">Хозяйственная служба</Link>
                                <Link href="/sveden/struct/prorektor-po-uchebnoj-rabote#section-5">Служба кадрового обеспечения</Link>
                                <Link href="/sveden/struct/prorektor-po-uchebnoj-rabote#section-6">Отдел делопроизводства</Link>
                                <Link href="/sveden/struct/prorektor-po-uchebnoj-rabote#section-7">Служба безопасности</Link>
                            </div>
                        </details>
                    </div>
                    <Link href="#">Вернуться наверх</Link>
                </div>
                <div className="w-full">{children}</div>
            </div>
        </main>
    );
};

export default SvedenStructLayout;
