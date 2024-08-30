"use client";

import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { VkIcon } from "@/shared/images/icons/social-networks/vk-icon";
import { OkIcon } from "@/shared/images/icons/social-networks/ok-icon";
import { TgIcon } from "@/shared/images/icons/social-networks/tg-icon";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { CopyIcon, ShareIcon } from "@/shared/images/icons/other";

export const ShareBlock = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_DOMAIN}${pathname}`);
            setOpen(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="space-y-5 rounded-[10px] bg-[#0F91D6] p-10 text-[16px] font-normal leading-[16px] text-white" id="share-section">
            <div className="flex items-center space-x-2">
                <ShareIcon width={20} height={20} fill="#FFFFFF" />
                <p>Поделиться</p>
            </div>

            <div className="flex rounded-[10px] bg-white px-8 py-4">
                <button
                    onClick={async () => {
                        await handleCopy();
                        window.clearTimeout(timerRef.current);
                        timerRef.current = window.setTimeout(() => {
                            setOpen(false);
                        }, 3000);
                    }}
                    className="group flex w-1/4 items-center space-x-2 text-nowrap pr-4 text-[14px] font-medium text-[#030303] duration-300 active:scale-110"
                >
                    {open ? (
                        <>
                            <CircleCheck size={20} strokeWidth={2} color="#0F91D6" className="min-h-5 min-w-5" />
                            <p className="text-[#0F91D6]">Скопировано</p>
                        </>
                    ) : (
                        <>
                            <CopyIcon width={20} height={20} fill="#000000" className="min-h-5 min-w-5 duration-300 group-hover:fill-[#0F91D6]" />
                            <p className="duration-300 group-hover:text-[#0F91D6]">Скопировать ссылку</p>
                        </>
                    )}
                </button>
                <input
                    readOnly
                    value={`${process.env.NEXT_PUBLIC_DOMAIN}${pathname}`}
                    className="w-3/4 bg-transparent text-[14px] text-[#808080] outline-none"
                />
            </div>

            <div className="flex items-center space-x-5">
                <p>Поделиться через:</p>
                <Link target="_blank" href="https://vk.com/vsau1912" className="duration-300 hover:scale-125 active:scale-100">
                    <VkIcon width={24} height={24} fill="#FFFFFF" />
                </Link>
                <Link target="_blank" href="https://ok.ru/profile/574433460640" className="duration-300 hover:scale-125 active:scale-100">
                    <OkIcon width={22} height={22} fill="#FFFFFF" />
                </Link>
                <Link target="_blank" href="" className="duration-300 hover:scale-125 active:scale-100">
                    <TgIcon width={24} height={24} fill="#FFFFFF" />
                </Link>
            </div>
        </div>
    );
};
