"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navGroups, navSvedenItems } from "@/shared/data/nav-links-array";
import Image from "next/image";
import { NavCollapseArrow } from "@/shared/images/icons/nav-collapse-arrow";
import { Logo } from "@/shared/images/logo/logo";
import { cn } from "@/shared/libs/shadcn-utils";
import { VkLogo } from "@/shared/images/icons/social-networks/vk-logo";
import { OkLogo } from "@/shared/images/icons/social-networks/ok-logo";
import { TgLogo } from "@/shared/images/icons/social-networks/tg-logo";
import { YtLogo } from "@/shared/images/icons/social-networks/yt-logo";
import { DzenLogo } from "@/shared/images/icons/social-networks/dzen-logo";
import { EyeIcon } from "@/shared/images/icons/eye-icon";
import { LanguageIcon } from "@/shared/images/icons/language-icon";
import { PlugIcon } from "@/shared/images/icons/plug-icon";
import { SearchIcon } from "@/shared/images/icons/search-icon";
import { FlatArrowIcon } from "@/shared/images/icons/flat-arrow-icon";
import InfoIcon from "@/shared/images/icons/raw-svg/info_icon.svg?url";
import { usePathname } from "next/navigation";

const NavigationSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapse, setIsCollapse] = useState(0);

    const changeNavbarState = () => {
        setIsOpen(!isOpen);
        localStorage.setItem("navIsOpen", String(!isOpen));
    };

    useEffect(() => {
        if (localStorage.getItem("navIsOpen") === null) localStorage.setItem("navIsOpen", String(isOpen));
        setIsOpen(localStorage.getItem("navIsOpen") === "true");
    }, []);

    return (
        <>
            <input type="checkbox" id="navBtn" className="peer hidden" checked={isOpen} onChange={changeNavbarState} />
            <nav className="group fixed flex h-full w-[100px] flex-col items-center justify-items-center overflow-hidden bg-[#0F91D6] transition-all peer-checked:w-[400px] peer-checked:items-start">
                <label htmlFor="navBtn" className="absolute -right-0 top-[300px] flex cursor-pointer items-center justify-start rounded-2xl">
                    <div className="absolute left-1/3 rotate-180 transition-all delay-100 ease-in group-peer-checked:rotate-0">
                        <FlatArrowIcon width={10} height={21} fillColor="#ACACAC" />
                    </div>
                    <svg width="18" height="100" viewBox="0 0 32 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.82233 24.1777L32 0V169.5L7.82233 145.322C3.13392 140.634 0.5 134.275 0.5 127.645V41.8553C0.5 35.2249 3.13392 28.8661 7.82233 24.1777Z"
                            fill="#F5F5F5"
                        />
                    </svg>
                </label>

                <Link href="/" className="mt-5 flex items-center justify-center overflow-hidden px-3">
                    <div>
                        <Logo width={80} height={80} fillColor="white" className="h-20 w-20" />
                    </div>

                    <div className="hidden items-center space-y-1 text-white transition-all group-peer-checked:block">
                        <p className="ml-5 line-clamp-2 min-w-[250px] max-w-[full] text-[10px] font-normal leading-3 transition-all">
                            Федеральное государственное бюджетное образовательное учреждение высшего образования
                        </p>
                        <p className="ml-5 line-clamp-3 min-w-[250px] max-w-[full] text-[16px] font-semibold leading-[17px] transition-all">
                            Воронежский государственный аграрный университет имени Петра I
                        </p>
                    </div>
                </Link>

                {pathname.startsWith("/sveden") ? (
                    <div className="mr-1 mt-10 flex flex-col space-y-10 transition-all group-peer-checked:ml-10 group-peer-checked:mr-16">
                        {navSvedenItems.map((item) => (
                            <div key={item.id} className="group/navbarSubLink flex flex-col space-y-5">
                                <Link href={item.href} className="group/navbarLink flex items-center text-white">
                                    <p className="ml-3 hidden font-normal group-peer-checked:block">{item.title}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="mr-1 mt-10 flex flex-col space-y-10 transition-all group-peer-checked:ml-10 group-peer-checked:mr-16">
                            {navGroups.map((group, index) => (
                                <div key={index} className="flex flex-col space-y-5">
                                    {group.map((item) => (
                                        <div key={item.id} className="group/navbarSubLink flex flex-col">
                                            {item.href !== undefined ? (
                                                <Link href={item.href} className="group/navbarLink flex items-center text-white">
                                                    <Image src={item.icon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />
                                                    <p className="ml-3 hidden font-normal group-peer-checked:block">{item.title}</p>
                                                </Link>
                                            ) : (
                                                <>
                                                    <input
                                                        id={`navBtn-item-${item.id}`}
                                                        name="navBtn-item"
                                                        type="checkbox"
                                                        onChange={() => {
                                                            if (item.id === isCollapse) return setIsCollapse(0);
                                                            setIsCollapse(item.id);
                                                        }}
                                                        checked={item.id === isCollapse}
                                                        className="peer/xui hidden"
                                                    />
                                                    <label
                                                        htmlFor={`navBtn-item-${item.id}`}
                                                        className="absolute left-6 mt-2 hidden -rotate-90 cursor-pointer items-center text-white transition-all peer-checked/xui:rotate-0 group-peer-checked:block"
                                                    >
                                                        <NavCollapseArrow width={9} height={8} fillColor="#FFFFFF50" />
                                                    </label>
                                                    <label htmlFor={`navBtn-item-${item.id}`} className="flex cursor-pointer items-center text-white">
                                                        <Image src={item.icon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />
                                                        <p className="ml-3 hidden font-light group-peer-checked:block">{item.title}</p>
                                                    </label>
                                                    <div className="mt-2 hidden overflow-hidden rounded-[10px] peer-checked/xui:block">
                                                        <div className={cn("hidden space-y-3 bg-[#FFFFFF15] p-10 group-peer-checked:block")}>
                                                            {item.child !== undefined &&
                                                                item.child.map(
                                                                    (child, index) =>
                                                                        child.href !== undefined && (
                                                                            <Link
                                                                                href={child.href}
                                                                                key={child.id}
                                                                                className="leading-[15px block text-[13px] font-light text-white"
                                                                            >
                                                                                {child.title}
                                                                            </Link>
                                                                        )
                                                                )}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="mx-8 mt-8 rounded-[10px] bg-[#FFFFFF15] p-6">
                            <Link href="/sveden/common" className="group/navbarLink flex items-center text-white">
                                <Image src={InfoIcon} width={15} height={15} alt="" className="min-h-[25px] min-w-[25px]" />
                                <p className="ml-3 hidden font-normal group-peer-checked:block">Сведения об образовательной организации</p>
                            </Link>
                        </div>
                    </>
                )}

                <div className="mx-8 mt-4 hidden space-x-3 group-peer-checked:flex">
                    <button disabled className="flex h-14 w-16 items-center justify-center rounded-[10px] bg-[#FFFFFF15]">
                        <EyeIcon width={32} height={21} fillColor="#FFFFFF80" />
                    </button>
                    <button disabled className="flex h-14 w-16 items-center justify-center rounded-[10px] bg-[#FFFFFF15]">
                        <LanguageIcon width={32} height={21} fillColor="#FFFFFF80" />
                    </button>
                    <button disabled className="flex h-14 w-16 items-center justify-center rounded-[10px] bg-[#FFFFFF15]">
                        <PlugIcon width={24} height={24} fillColor="#FFFFFF80" />
                    </button>
                    <button disabled className="flex h-14 w-[108px] items-center justify-between rounded-[10px] bg-[#FFFFFF15] p-5 text-[10px] font-medium leading-[10px] text-[#FFFFFF80]">
                        <SearchIcon width={24} height={24} fillColor="#FFFFFF80" />
                        Поиск
                    </button>
                </div>

                <div className="absolute bottom-0 grid h-[180px] w-full grid-cols-2 grid-rows-3 items-center bg-white p-4 transition-all group-peer-checked:h-[90px] group-peer-checked:grid-cols-5 group-peer-checked:px-[15%] group-peer-checked:py-[10%]">
                    <Link target="_blank" href="https://vk.com/vsau1912">
                        <VkLogo width={30} height={20} fillColor="#0F91D6" className="w-5" />
                    </Link>
                    <Link target="_blank" href="https://ok.ru/profile/574433460640">
                        <OkLogo width={17} height={28} fillColor="#0F91D6" className="h-6 w-5" />
                    </Link>
                    <Link target="_blank" href="https://t.me/vsau1912">
                        <TgLogo width={32} height={25} fillColor="#0F91D6" className="w-5" />
                    </Link>
                    <Link target="_blank" href="https://dzen.ru/vsau1912">
                        <DzenLogo width={29} height={28} fillColor="#0F91D6" className="w-5" />
                    </Link>
                    <Link target="_blank" href="https://www.youtube.com/channel/UCF3LAx0wx0kjOW2QchlP6KQ">
                        <YtLogo width={96} height={22} fillColor="#0F91D6" className="w-14" />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavigationSidebar;
