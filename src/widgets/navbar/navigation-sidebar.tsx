"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/shared/images/logo/logo";
import { cn } from "@/shared/libs/shadcn-utils";
import Image from "next/image";
import HomeIcon from "@/shared/images/icons/raw-svg/home_icon.svg?url";
import { VkLogo } from "@/shared/images/icons/social-networks/vk-logo";
import { OkLogo } from "@/shared/images/icons/social-networks/ok-logo";
import { TgLogo } from "@/shared/images/icons/social-networks/tg-logo";
import { DzenLogo } from "@/shared/images/icons/social-networks/dzen-logo";
import { YtLogo } from "@/shared/images/icons/social-networks/yt-logo";
import { EyeIcon } from "@/shared/images/icons/eye-icon";
import { LanguageIcon } from "@/shared/images/icons/language-icon";
import { PlugIcon } from "@/shared/images/icons/plug-icon";
import { SearchIcon } from "@/shared/images/icons/search-icon";
import { navGroups } from "@/shared/data/nav-links-array";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/shadcn/accordion";

const NavigationSidebar = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(localStorage.getItem("mainNavOpen") === "true");
    const [pin, setPin] = useState(localStorage.getItem("mainNavPin") === "true");
    const [activeAccordion, setActiveAccordion] = useState("item-1");

    useEffect(() => {
        setOpen(localStorage.getItem("mainNavOpen") === "true");
    }, []);

    const mainNavSetOpen = (open: boolean) => {
        localStorage.setItem("mainNavOpen", String(open));
        if (!open) setActiveAccordion("");
        else setActiveAccordion("item-1");
        setOpen(open);
    };

    const mainNavSetPin = (pin: boolean) => {
        localStorage.setItem("mainNavPin", String(pin));
        mainNavSetOpen(pin);
        setPin(pin);
    };

    const onMouseEnter = (e) => {
        if (!pin) mainNavSetOpen(true);
    };

    const onMouseLeave = (e) => {
        if (!pin) mainNavSetOpen(false);
    };

    return (
        <main className="flex">
            <nav
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={cn(
                    "fixed z-50 flex h-full w-[150px] flex-col justify-between overflow-hidden bg-[#0F91D6] transition-all duration-300",
                    open && "w-[450px]"
                )}
            >
                <div>
                    <div className="flex py-7 pl-7">
                        <div>
                            <Logo width={100} height={100} fillColor="white" className="w-25 h-25" />
                        </div>

                        <div className="relative items-center space-y-1 px-3 py-2 text-white transition-colors">
                            <p
                                className={`line-clamp-2 max-w-[270px] overflow-hidden text-[10px] font-normal leading-3 transition-all ${open ? "ml-3 w-full" : "w-0"}`}
                            >
                                Федеральное государственное бюджетное образовательное учреждение высшего образования
                            </p>
                            <p
                                className={`line-clamp-3 max-w-[270px] overflow-hidden text-[16px] font-semibold leading-[17px] transition-all ${open ? "ml-3 w-full" : "w-0"}`}
                            >
                                Воронежский государственный аграрный университет имени императора Петра I
                            </p>
                        </div>
                    </div>

                    <Accordion
                        type="single"
                        collapsible
                        value={activeAccordion}
                        onValueChange={setActiveAccordion}
                        className="flex flex-col px-[52px]"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors">
                                <Image src={HomeIcon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />
                                <span className={`overflow-hidden transition-all ${open ? "ml-3 w-52" : "w-0"}`}>aSDASDASD</span>
                            </AccordionTrigger>
                            <AccordionContent className="mt-3 space-y-3 rounded-[10px] bg-[#FFFFFF15] p-5">
                                <span>AAA</span>
                                <span>BBB</span>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/*<ul className="flex flex-col px-[52px]">*/}
                    {/*    <li className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors`}>*/}
                    {/*        <Image src={HomeIcon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />*/}
                    {/*        <span className={`overflow-hidden transition-all ${open ? "ml-3 w-52" : "w-0"}`}>BBBBBB</span>*/}
                    {/*    </li>*/}
                    {/*    <li className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors`}>*/}
                    {/*        <Image src={HomeIcon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />*/}
                    {/*        <span className={`overflow-hidden transition-all ${open ? "ml-3 w-52" : "w-0"}`}>BBBBBB</span>*/}
                    {/*    </li>*/}
                    {/*    <li className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors`}>*/}
                    {/*        <Image src={HomeIcon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />*/}
                    {/*        <span className={`overflow-hidden transition-all ${open ? "ml-3 w-52" : "w-0"}`}>BBBBBB</span>*/}
                    {/*    </li>*/}
                    {/*    <li className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors`}>*/}
                    {/*        <Image src={HomeIcon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />*/}
                    {/*        <span className={`overflow-hidden transition-all ${open ? "ml-3 w-52" : "w-0"}`}>BBBBBB</span>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}

                    <div
                        className={cn(
                            "flex flex-wrap items-center gap-4 p-4 px-[44px] transition-all duration-300",
                            open && "flex-nowrap justify-between px-[44px]"
                        )}
                    >
                        <button disabled className="flex w-fit items-center justify-center rounded-[10px] bg-[#FFFFFF15] p-4">
                            <EyeIcon width={32} height={21} fillColor="#FFFFFF80" />
                        </button>
                        <button disabled className="flex w-fit items-center justify-center rounded-[10px] bg-[#FFFFFF15] p-4">
                            <EyeIcon width={32} height={21} fillColor="#FFFFFF80" />
                        </button>
                        <button disabled className="flex w-fit items-center justify-center rounded-[10px] bg-[#FFFFFF15] p-4">
                            <EyeIcon width={32} height={21} fillColor="#FFFFFF80" />
                        </button>
                        <button disabled className="flex w-fit items-center justify-center space-x-2 rounded-[10px] bg-[#FFFFFF15] p-4">
                            <SearchIcon width={24} height={24} fillColor="#FFFFFF80" />
                            {open && <p className="text-[10px] font-medium leading-[10px] text-[#FFFFFF80]">Поиск по сайту</p>}
                        </button>
                    </div>
                </div>

                <div
                    className={cn(
                        "grid h-[180px] w-full grid-cols-2 grid-rows-3 items-center bg-white p-4 transition-all duration-300",
                        open && "h-[90px] grid-cols-5 px-[15%] py-[10%]"
                    )}
                >
                    <Link target="_blank" href="https://vk.com/vsau1912" className="flex justify-center">
                        <VkLogo width={30} height={20} fillColor="#0F91D6" className="w-5" />
                    </Link>
                    <Link target="_blank" href="https://ok.ru/profile/574433460640" className="flex justify-center">
                        <OkLogo width={17} height={28} fillColor="#0F91D6" className="h-6 w-5" />
                    </Link>
                    <Link target="_blank" href="https://t.me/vsau1912" className="flex justify-center">
                        <TgLogo width={32} height={25} fillColor="#0F91D6" className="w-5" />
                    </Link>
                    <Link target="_blank" href="https://dzen.ru/vsau1912" className="flex justify-center">
                        <DzenLogo width={29} height={28} fillColor="#0F91D6" className="w-5" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.youtube.com/channel/UCF3LAx0wx0kjOW2QchlP6KQ"
                        className={cn("col-span-2 flex justify-center", open && "col-span-1 ml-2")}
                    >
                        <YtLogo width={96} height={22} fillColor="#0F91D6" className="w-14" />
                    </Link>
                </div>
            </nav>

            <div
                className={cn("min-h-svh min-w-full bg-[#FAFAFA] pl-[calc(150px+70px)] transition-all duration-300", open && "pl-[calc(450px+70px)]")}
            >
                <button onClick={() => mainNavSetPin(!pin)}>{pin ? "UNPIN" : "PIN"}</button>
                {children}
            </div>
        </main>
    );
};

export default NavigationSidebar;
