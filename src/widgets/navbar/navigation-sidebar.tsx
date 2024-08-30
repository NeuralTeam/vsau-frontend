"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navGroups, navSvedenItems } from "@/shared/data/nav-links-array";
import { DzenIcon, OkIcon, TgIcon, VkIcon, YtIcon } from "@/shared/images/icons/social-networks";
import { EyeIcon } from "@/shared/images/icons/eye-icon";
import { LanguageIcon } from "@/shared/images/icons/language-icon";
import { PlugIcon } from "@/shared/images/icons/plug-icon";
import { SearchIcon } from "@/shared/images/icons/search-icon";
import { usePathname } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/shadcn/accordion";
import { cn } from "@/shared/libs/shadcn-utils";
import { NavCollapseArrow } from "@/shared/images/icons/nav-collapse-arrow";
import { BackArrowIcon, SpecialPageIcon } from "@/shared/images/icons/navigation-menu";
import { VsauLogoIcon } from "@/shared/images/icons/logo";

const NavigationSidebar = () => {
    const pathname = usePathname();
    const [activeAccordion, setActiveAccordion] = useState("");

    useEffect(() => {
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
    }, []);

    return (
        <nav className="fixed flex h-full w-[470px] flex-col items-start justify-between bg-[#0F91D6]">
            <div className="w-full overflow-y-scroll">
                <Link href="/" className="mt-10 flex items-center justify-center overflow-hidden">
                    <div>
                        <VsauLogoIcon width={100} height={100} fill="#FFFFFF" />
                    </div>

                    <div className="items-center space-y-1 text-white">
                        <p className="ml-5 line-clamp-2 min-w-[250px] max-w-[270px] text-[10px] font-normal leading-3">
                            Федеральное государственное бюджетное образовательное учреждение высшего образования
                        </p>
                        <p className="ml-5 line-clamp-3 min-w-[250px] max-w-[270px] text-[16px] font-semibold leading-[17px]">
                            Воронежский государственный аграрный университет имени императора Петра I
                        </p>
                    </div>
                </Link>

                {pathname.startsWith("/sveden") ? (
                    <div className="ml-8 mr-8 mt-10 flex flex-col space-y-6 rounded-[10px] bg-[#FFFFFF15]">
                        <div className="flex h-28 items-center justify-between border-b border-[#FFFFFF50] text-white">
                            <div className="px-10 py-6">
                                <p className="text-[18px] font-bold leading-[20px]">Сведения об образовательной организации</p>
                            </div>
                            <Link href="/" className="flex h-full items-center justify-center border-l border-[#FFFFFF50] px-10">
                                <BackArrowIcon width={28} height={28} fill="#FFFFFF" />
                            </Link>
                        </div>

                        <div className="flex flex-col space-y-3 px-10 pb-6">
                            {navSvedenItems.map((item) => (
                                <div key={item.id} className="group/navbarSubLink flex flex-col">
                                    <Link href={item.href} className="group/navbarLink flex w-fit items-center text-[14px] leading-[16px]">
                                        <p
                                            className={cn(
                                                "text-[#99D0ED] underline-offset-2 hover:underline",
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
                        <div className="ml-[72px] mr-16 mt-10 flex flex-col space-y-10 text-white transition-all">
                            <Accordion
                                type="single"
                                collapsible
                                value={activeAccordion}
                                onValueChange={setActiveAccordion}
                                className="flex w-full flex-col items-start space-y-5"
                            >
                                {navGroups.map((item) =>
                                    item.href !== undefined ? (
                                        <Link key={item.id} href={item.href} className="group pointer-events-auto flex items-center">
                                            <item.icon
                                                width={24}
                                                height={24}
                                                fill={pathname == item.href ? "#FFFFFF" : "#87C8EA"}
                                                className="duration-300 group-hover:fill-white"
                                            />
                                            <p
                                                className={cn(
                                                    "ml-3 duration-300 group-hover:font-semibold",
                                                    pathname == item.href && "cursor-default font-semibold"
                                                )}
                                            >
                                                {item.title}
                                            </p>
                                        </Link>
                                    ) : (
                                        <AccordionItem key={item.id} value={`item-${item.id}`}>
                                            <AccordionTrigger className="group pointer-events-auto relative">
                                                <NavCollapseArrow
                                                    width={9}
                                                    height={8}
                                                    fillColor="#87C8EA"
                                                    className="absolute -left-5 shrink-0 -rotate-90 duration-300 group-hover:fill-white"
                                                />
                                                <item.icon
                                                    width={24}
                                                    height={24}
                                                    fill="#87C8EA"
                                                    className="duration-300 group-hover:fill-white group-active:scale-75"
                                                />
                                                <p className="ml-3 duration-300 group-hover:font-semibold">{item.title}</p>
                                            </AccordionTrigger>
                                            <AccordionContent className="mt-3 space-y-4 rounded-[10px] bg-[#FFFFFF15] px-8 py-5">
                                                {item.child?.map(
                                                    (child, index) =>
                                                        child.href !== undefined && (
                                                            <Link
                                                                href={child.href}
                                                                key={child.id}
                                                                className={cn(
                                                                    "block text-[13px] font-light leading-[15px] text-white duration-300 hover:scale-105 hover:font-semibold active:scale-100",
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

                        <div className="group mx-8 mt-8 rounded-[10px] bg-[#FFFFFF15] px-10 py-8 duration-300 hover:bg-[#FFFFFF30]">
                            <Link href="/sveden/common" className="flex items-center justify-center space-x-5 duration-300 active:scale-95">
                                <SpecialPageIcon
                                    width={24}
                                    height={24}
                                    fill="#87C8EA"
                                    className="min-h-6 min-w-6 duration-300 group-hover:fill-white"
                                />
                                <p className="font-normal leading-[18px] text-white duration-300 group-hover:font-semibold">
                                    Сведения об образовательной организации
                                </p>
                            </Link>
                        </div>
                    </>
                )}

                <div className="mx-8 mt-3 flex space-x-3">
                    <button
                        id="specialButton"
                        className="group flex items-center justify-center rounded-[10px] bg-[#FFFFFF15] p-5 duration-300 hover:bg-[#FFFFFF30]"
                    >
                        <EyeIcon
                            width={32}
                            height={21}
                            fillColor="#FFFFFF80"
                            className="duration-300 group-hover:fill-white group-active:scale-[.8]"
                        />
                    </button>
                    <button className="group flex items-center justify-center rounded-[10px] bg-[#FFFFFF15] p-5 duration-300 hover:bg-[#FFFFFF30]">
                        <LanguageIcon
                            width={32}
                            height={21}
                            fillColor="#FFFFFF80"
                            className="duration-300 group-hover:fill-white group-active:scale-[.8]"
                        />
                    </button>
                    <button className="group flex items-center justify-center rounded-[10px] bg-[#FFFFFF15] p-5 duration-300 hover:bg-[#FFFFFF30]">
                        <PlugIcon
                            width={24}
                            height={24}
                            fillColor="#FFFFFF80"
                            className="duration-300 group-hover:fill-white group-active:scale-[.8]"
                        />
                    </button>
                    <button className="group col-span-2 flex grow items-center justify-center rounded-[10px] bg-[#FFFFFF15] p-5 duration-300 hover:bg-[#FFFFFF30]">
                        <div className="flex items-center justify-center space-x-2 duration-300 group-active:scale-90">
                            <SearchIcon width={24} height={24} fillColor="#FFFFFF80" className="duration-300 group-hover:fill-white" />
                            <p className="text-[10px] font-medium leading-[10px] text-[#FFFFFF80] duration-300 group-hover:text-white">
                                Поиск по сайту
                            </p>
                        </div>
                    </button>
                </div>
            </div>

            <div className={cn("flex h-[90px] w-full items-center justify-between bg-white px-16", pathname.startsWith("/sveden") && "hidden")}>
                <Link target="_blank" href="https://vk.com/vsau1912" className="duration-300 hover:scale-125 active:scale-100">
                    <VkIcon width={24} height={24} fill="#0F91D6" />
                </Link>
                <Link target="_blank" href="https://ok.ru/profile/574433460640" className="duration-300 hover:scale-125 active:scale-100">
                    <OkIcon width={22} height={22} fill="#0F91D6" />
                </Link>
                <Link target="_blank" href="https://t.me/vsau1912" className="duration-300 hover:scale-125 active:scale-100">
                    <TgIcon width={24} height={24} fill="#0F91D6" />
                </Link>
                <Link
                    target="_blank"
                    href="https://www.youtube.com/channel/UCF3LAx0wx0kjOW2QchlP6KQ"
                    className="duration-300 hover:scale-125 active:scale-100"
                >
                    <YtIcon width={70} height={32} fill="#0F91D6" />
                </Link>
                <Link target="_blank" href="https://dzen.ru/vsau1912" className="duration-300 hover:scale-125 active:scale-100">
                    <DzenIcon width={22} height={22} fill="#0F91D6" />
                </Link>
            </div>
        </nav>
    );
};

export default NavigationSidebar;
