"use client";

import { IoClose, IoEyeOutline, IoLanguageOutline } from "react-icons/io5";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { ThemeSwitcher } from "@/shared/ui/vsau/theme-switcher";
import { NavigationMenu } from "@/widgets/navbar/navigation-menu";
import { Logo } from "@/shared/images/logo/logo";
import Link from "next/link";
import { Button } from "@/shared/ui/shadcn/button";
import * as React from "react";
import { LuDot } from "react-icons/lu";

export const NavigationNavbar = () => {
    return (
        // TODO: попробовать без sticky
        <nav className="sticky top-0 z-50 flex h-[70px] w-full flex-row justify-between space-x-10 border-b bg-[#0F91D6] p-2 text-accent shadow-md md:shadow-xl">
            <Link href="/" className="flex w-auto max-w-[400px] flex-row items-center space-x-1">
                <div>
                    <Logo width={60} height={60} fillColor="" className="h-14 w-14 fill-accent" />
                </div>
                <div className="flex w-auto min-w-[50px] flex-col">
                    <span className="ml-5 hidden text-[16px] font-semibold leading-[17px] sm:line-clamp-2">
                        Воронежский государственный аграрный университет имени Петра I
                    </span>
                    <span className="ml-5 hidden text-[10px] font-normal leading-3 sm:line-clamp-2">
                        Федеральное государственное бюджетное образовательное учреждение высшего образования
                    </span>
                    <span className="text-[16px] font-semibold leading-[17px] sm:hidden">ВГАУ</span>
                    <span className="text-[10px] font-normal leading-3 sm:hidden">ФГБОУ ВО</span>
                </div>
            </Link>
            <div className="hidden flex-1 items-center sm:flex">
                <NavigationMenu pathname="/" />
            </div>
            <div className="flex flex-row-reverse items-center">
                <ul className="flex w-auto flex-row items-center space-x-1 font-medium">
                    <li>
                        <Button variant="ghost" size="icon">
                            <CiSearch className="h-5 w-5 stroke-1" />
                            <span className="sr-only">Кнопка поиска</span>
                        </Button>
                    </li>
                    <li className="sm:hidden">
                        <input className="peer hidden" type="checkbox" id="mobileNavBtn" />
                        <label
                            className="group inline-flex h-10 w-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                            htmlFor="mobileNavBtn"
                        >
                            <CiMenuBurger className="h-6 w-6 stroke-1 group-peer-checked:hidden" />
                            <IoClose className="hidden h-6 w-6 stroke-1 group-peer-checked:inline" />
                            <span className="sr-only">Мобильное меню</span>
                        </label>
                        <div className="fixed right-0 top-[70px] z-40 h-full w-full translate-x-full overflow-y-auto overscroll-none bg-background transition duration-500 peer-checked:translate-x-0">
                            <div className="flex min-h-full w-full flex-col space-y-2 p-5">
                                <Link href="/news">Новости и мероприятия</Link>
                                <Link href="/stuff">Персонал и преподавательский состав</Link>
                                <Link href="/contacts">Контакты</Link>
                                <Link href="/infrastructure">Инфраструктура и прочее</Link>
                                <details className="select-none [&_svg]:open:-rotate-90">
                                    <summary className="flex items-center font-bold">
                                        Сведения об образовательной организации
                                        <button className="ml-auto">
                                            <svg
                                                className="-mr-1 h-4 w-4 rotate-90 transform fill-current opacity-75 transition-all duration-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                                            </svg>
                                        </button>
                                    </summary>
                                    <div className="ml-5 space-y-1">
                                        <Link href="/sveden/common" className="flex items-center">
                                            <LuDot className="h-6 w-6 min-w-[24px]" />
                                            Основные сведения
                                        </Link>
                                        <Link href="/sveden/struct" className="flex items-start">
                                            <LuDot className="h-6 w-6 min-w-[24px]" />
                                            Структура и органы управления образовательной организацией
                                        </Link>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </li>
                    <li className="hidden sm:list-item">
                        <Button variant="ghost" size="icon">
                            <IoEyeOutline className="h-5 w-5 stroke-1" />
                            <span className="sr-only">Режим для слабовидящих</span>
                        </Button>
                    </li>
                    <li className="hidden sm:list-item">
                        <Button variant="ghost" size="icon">
                            <IoLanguageOutline className="h-5 w-5 stroke-1" />
                            <span className="sr-only">Смена языка</span>
                        </Button>
                    </li>
                    <li className="hidden sm:list-item">
                        <ThemeSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    );
};
