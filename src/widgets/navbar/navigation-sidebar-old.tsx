"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navGroups, navSvedenItems } from "@/shared/data/nav-links-array";
import Image from "next/image";
import { Logo } from "@/shared/images/logo/logo";
import { VkLogo } from "@/shared/images/icons/social-networks/vk-logo";
import { OkLogo } from "@/shared/images/icons/social-networks/ok-logo";
import { TgLogo } from "@/shared/images/icons/social-networks/tg-logo";
import { YtLogo } from "@/shared/images/icons/social-networks/yt-logo";
import { DzenLogo } from "@/shared/images/icons/social-networks/dzen-logo";
import { EyeIcon } from "@/shared/images/icons/eye-icon";
import { LanguageIcon } from "@/shared/images/icons/language-icon";
import { PlugIcon } from "@/shared/images/icons/plug-icon";
import { SearchIcon } from "@/shared/images/icons/search-icon";
import InfoIcon from "@/shared/images/icons/raw-svg/info_icon.svg?url";
import { usePathname } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/shadcn/accordion";
import { cn } from "@/shared/libs/shadcn-utils";
import BackArrow from "@/shared/images/icons/raw-svg/back_arrow.svg?url";

const NavigationSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState("");

    const changeNavbarState = () => {
        setIsOpen(!isOpen);
        localStorage.setItem("navIsOpen", String(!isOpen));
    };

    useEffect(() => {
        if (localStorage.getItem("navIsOpen") === null) localStorage.setItem("navIsOpen", String(isOpen));
        setIsOpen(localStorage.getItem("navIsOpen") === "true");
        navGroups.forEach((item) => {
            if (!item.child && pathname == item.href) {
                setActiveAccordion(`item-${item.id.toString()}`);
            } else
                item.child?.map((child) => {
                    if (pathname == child.href) {
                        setActiveAccordion(`item-${child.id.toString()}`);
                    }
                });
        });
        setActiveAccordion("item-2");
    }, []);

    return (
        <>
            <input type="checkbox" id="navBtn" className="peer hidden" checked={isOpen} onChange={changeNavbarState} />
            <nav className="group fixed z-50 flex h-full w-[150px] flex-col items-center justify-between overflow-hidden overflow-x-hidden bg-[#0F91D6] transition-all peer-checked:w-[470px] peer-checked:items-start">
                <div className="w-full">
                    <label htmlFor="navBtn" className="absolute right-5 top-[45%] flex cursor-pointer items-center justify-start rounded-2xl">
                        <div className="absolute z-30 rotate-0">
                            <div className="absolute left-2 top-[45%] rotate-180 transition-all delay-100 ease-in group-peer-checked:rotate-0">
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.999998 7.73205C-0.333335 6.96225 -0.333334 5.03775 0.999999 4.26795L7 0.803845C8.33333 0.0340444 10 0.996296 10 2.5359L10 9.4641C10 11.0037 8.33333 11.966 7 11.1962L0.999998 7.73205Z"
                                        fill="#3F3F3F"
                                        fillOpacity="0.4"
                                    />
                                </svg>
                            </div>
                            <svg width="21" height="102" viewBox="0 0 21 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.24869 11.51L21 0V102L8.24868 90.49C2.99726 85.7497 0 79.0065 0 71.9321V30.0679C0 22.9935 2.99726 16.2503 8.24869 11.51Z"
                                    fill="#F8F8F8"
                                />
                            </svg>
                        </div>
                    </label>

                    <Link href="/" className="mt-10 flex items-center justify-center overflow-hidden">
                        <div>
                            <Logo width={100} height={100} fillColor="white" className="w-25 h-25 transition-all" />
                        </div>

                        <div className="hidden items-center space-y-1 text-white transition-all group-peer-checked:block">
                            <p className="ml-5 line-clamp-2 min-w-[250px] max-w-[270px] text-[10px] font-normal leading-3 transition-all">
                                Федеральное государственное бюджетное образовательное учреждение высшего образования
                            </p>
                            <p className="ml-5 line-clamp-3 min-w-[250px] max-w-[270px] text-[16px] font-semibold leading-[17px] transition-all">
                                Воронежский государственный аграрный университет имени императора Петра I
                            </p>
                        </div>
                    </Link>

                    {pathname.startsWith("/sveden") ? (
                        <div className="mr-1 mt-10 flex flex-col space-y-6 rounded-[10px] transition-all group-peer-checked:ml-8 group-peer-checked:mr-8 group-peer-checked:bg-[#FFFFFF15]">
                            <div className="hidden h-28 items-center justify-between text-white group-peer-checked:flex group-peer-checked:border-b group-peer-checked:border-[#FFFFFF50]">
                                <div className="group-peer-checked:px-10 group-peer-checked:py-6">
                                    <p className="text-[18px] font-bold leading-[20px]">Сведения об образовательной организации</p>
                                </div>
                                <Link
                                    href="/"
                                    className="flex h-full items-center justify-center border-l border-[#FFFFFF50] group-peer-checked:px-10"
                                >
                                    <Image src={BackArrow} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />
                                </Link>
                            </div>

                            <div className="flex flex-col space-y-3 group-peer-checked:px-10 group-peer-checked:pb-6">
                                {navSvedenItems.map((item) => (
                                    <div key={item.id} className="group/navbarSubLink flex flex-col">
                                        <Link href={item.href} className="group/navbarLink flex w-fit items-center text-[14px] leading-[16px]">
                                            <p
                                                className={cn(
                                                    "hidden text-[#99D0ED] underline-offset-2 hover:underline group-peer-checked:block",
                                                    pathname == item.href && "cursor-default font-semibold text-white hover:no-underline"
                                                )}
                                            >
                                                {item.title}
                                            </p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mr-1 mt-10 flex flex-col space-y-10 text-white transition-all group-peer-checked:ml-[72px] group-peer-checked:mr-16">
                                <Accordion
                                    type="single"
                                    collapsible
                                    value={activeAccordion}
                                    onValueChange={setActiveAccordion}
                                    className="flex w-full flex-col items-center space-y-5 group-peer-checked:items-start"
                                >
                                    {navGroups.map((item) =>
                                        item.href !== undefined ? (
                                            <Link
                                                key={item.id}
                                                href={item.href}
                                                className="group/navbarLink pointer-events-none flex items-center group-peer-checked:pointer-events-auto"
                                            >
                                                <Image src={item.icon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />
                                                <p
                                                    className={cn(
                                                        "ml-3 hidden group-peer-checked:block",
                                                        pathname == item.href && "cursor-default font-semibold"
                                                    )}
                                                >
                                                    {item.title}
                                                </p>
                                            </Link>
                                        ) : (
                                            <AccordionItem key={item.id} value={`item-${item.id}`}>
                                                <AccordionTrigger className="pointer-events-none group-peer-checked:pointer-events-auto">
                                                    <Image src={item.icon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />
                                                    <p className="ml-3 hidden group-peer-checked:block">{item.title}</p>
                                                </AccordionTrigger>
                                                <AccordionContent className="mt-3 hidden space-y-3 rounded-[10px] bg-[#FFFFFF15] p-5 group-peer-checked:block">
                                                    {item.child?.map(
                                                        (child, index) =>
                                                            child.href !== undefined && (
                                                                <Link
                                                                    href={child.href}
                                                                    key={child.id}
                                                                    className={cn(
                                                                        "block text-[13px] font-light leading-[15px] text-white",
                                                                        pathname == child.href && "cursor-default font-semibold"
                                                                    )}
                                                                >
                                                                    {child.title}
                                                                </Link>
                                                            )
                                                    )}
                                                </AccordionContent>
                                            </AccordionItem>
                                        )
                                    )}
                                </Accordion>
                            </div>

                            <div className="mx-8 mt-8 rounded-[10px] bg-[#FFFFFF15] p-6">
                                <Link href="/sveden/common" className="group/navbarLink flex items-center justify-center text-white">
                                    <Image src={InfoIcon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />
                                    <p className="ml-3 hidden font-normal group-peer-checked:block">Сведения об образовательной организации</p>
                                </Link>
                            </div>
                        </>
                    )}

                    <div className="mx-8 mt-4 hidden h-14 grid-cols-5 gap-3 group-peer-checked:grid">
                        <button disabled className="flex items-center justify-center rounded-[10px] bg-[#FFFFFF15]">
                            <EyeIcon width={32} height={21} fillColor="#FFFFFF80" />
                        </button>
                        <button disabled className="flex items-center justify-center rounded-[10px] bg-[#FFFFFF15]">
                            <LanguageIcon width={32} height={21} fillColor="#FFFFFF80" />
                        </button>
                        <button disabled className="flex items-center justify-center rounded-[10px] bg-[#FFFFFF15]">
                            <PlugIcon width={24} height={24} fillColor="#FFFFFF80" />
                        </button>
                        <button disabled className="col-span-2 flex items-center justify-center space-x-2 rounded-[10px] bg-[#FFFFFF15]">
                            <SearchIcon width={24} height={24} fillColor="#FFFFFF80" />
                            <p className="text-[10px] font-medium leading-[10px] text-[#FFFFFF80]">Поиск по сайту</p>
                        </button>
                    </div>
                </div>

                <div
                    className={cn(
                        "grid h-[180px] w-full grid-cols-2 grid-rows-3 items-center bg-white p-4 transition-all group-peer-checked:h-[90px] group-peer-checked:grid-cols-5 group-peer-checked:px-[15%] group-peer-checked:py-[10%]",
                        pathname.startsWith("/sveden") && "hidden"
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
                        className="col-span-2 flex justify-center group-peer-checked:col-span-1"
                    >
                        <YtLogo width={96} height={22} fillColor="#0F91D6" className="w-14" />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavigationSidebar;
