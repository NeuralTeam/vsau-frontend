import { ReactNode } from "react";
import Link from "next/link";
import { CiAlarmOn } from "react-icons/ci";
import * as React from "react";

export default function SvedenLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="-m-8 flex">
            <aside className="sm:h-dhv hidden h-screen sm:block sm:max-w-[350px] sm:border-r">
                <div className="m-5 flex flex-col space-y-5">
                    <Link href="/sveden/common" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Основные сведения</p>
                    </Link>
                    <Link href="/sveden/struct" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <div>
                            <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Структура и органы управления</p>
                            <p className="mt-1 line-clamp-2 text-sm leading-none text-muted-foreground">Образовательной организацией</p>
                        </div>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Документы</p>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Образование</p>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Руководство</p>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Педагогический состав</p>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <div>
                            <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">
                                Материально-техническое обеспечение
                            </p>
                            <p className="mt-1 line-clamp-2 text-sm leading-none text-muted-foreground">
                                И оснащенность образовательного процесса. Доступная среда
                            </p>
                        </div>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Платные образовательные услуги</p>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">
                            Финансово-хозяйственная деятельность
                        </p>
                    </Link>

                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">
                            Стипендии и меры поддержки обучающихся
                        </p>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <div>
                            <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Вакантные места</p>
                            <p className="mt-1 line-clamp-2 text-sm leading-none text-muted-foreground">Для приема (перевода) обучающихся</p>
                        </div>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Международное сотрудничество</p>
                    </Link>
                    <Link href="/sveden" className="group flex items-center space-x-3">
                        <CiAlarmOn className="h-6 w-6 min-w-[24px]" />
                        <div>
                            <p className="text-sm font-medium leading-none underline-offset-2 group-hover:underline">Организация питания</p>
                            <p className="mt-1 line-clamp-2 text-sm leading-none text-muted-foreground">В образовательной организации</p>
                        </div>
                    </Link>
                </div>
            </aside>
            <div className="flex flex-col space-y-3 p-8">{children}</div>
        </div>
    );
}
