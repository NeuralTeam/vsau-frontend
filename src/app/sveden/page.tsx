import Link from "next/link";
import { LuDot } from "react-icons/lu";
import * as React from "react";

const SvedenPage = () => {
    return (
        <div className="flex flex-col space-y-10">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Сведения об образовательной организации</h1>
                <p className="text-xl">
                    <Link
                        target="_blank"
                        href="http://publication.pravo.gov.ru/document/0001202311290017"
                        className="underline-offset-4 hover:underline"
                    >
                        Приказ №1493 Рособрнадзора от 04.08.2023
                    </Link>{" "}
                    «Об утверждении Требований к структуре официального сайта образовательной организации в информационно-телекоммуникационной сети
                    &quot;Интернет&quot; и формату представления информации»
                </p>
            </div>

            <div className="m-5 flex flex-col space-y-2">
                <Link href="/sveden/common" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">Основные сведения</p>
                </Link>
                <Link href="/sveden/struct" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <div>
                        <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">
                            Структура и органы управления образовательной организацией
                        </p>
                    </div>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">Документы</p>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">Образование</p>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">Руководство</p>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">Педагогический состав</p>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <div>
                        <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">
                            Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда
                        </p>
                    </div>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">Платные образовательные услуги</p>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">Финансово-хозяйственная деятельность</p>
                </Link>

                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">
                        Стипендии и меры поддержки обучающихся
                    </p>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <div>
                        <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">
                            Вакантные места для приема (перевода) обучающихся
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm leading-none text-muted-foreground"></p>
                    </div>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">Международное сотрудничество</p>
                </Link>
                <Link href="/sveden" className="group flex items-center space-x-2">
                    <LuDot className="h-8 w-8 min-w-[32px]" />
                    <div>
                        <p className="text-lg font-medium leading-none underline-offset-2 group-hover:underline">
                            Организация питания в образовательной организации
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SvedenPage;
