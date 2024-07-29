"use client";

import { CircleCheck, Files, Share2 } from "lucide-react";
import Link from "next/link";
import { VkIcon } from "@/shared/images/icons/social-networks/vk-icon";
import { OkIcon } from "@/shared/images/icons/social-networks/ok-icon";
import { TgIcon } from "@/shared/images/icons/social-networks/tg-icon";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

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
                <Share2 size={20} strokeWidth={3} />
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
                    className="flex w-1/4 items-center space-x-2 text-nowrap pr-4 text-[14px] font-medium text-[#030303] duration-300 active:scale-110"
                >
                    {open ? (
                        <>
                            <CircleCheck size={20} strokeWidth={2} />
                            <p>Скопировано</p>
                        </>
                    ) : (
                        <>
                            <Files size={20} strokeWidth={2} />
                            <p>Скопировать ссылку</p>
                        </>
                    )}
                </button>
                <input
                    readOnly
                    value={`${process.env.NEXT_PUBLIC_DOMAIN}${pathname}`}
                    className="w-3/4 bg-transparent text-[14px] text-[#808080] outline-none"
                />
            </div>

            <div className="flex items-center space-x-4">
                <p>Поделиться через:</p>
                <Link target="_blank" href="https://vk.com/vsau1912">
                    <VkIcon width={28} height={28} fill="#FFFFFF" />
                </Link>
                <Link target="_blank" href="https://ok.ru/profile/574433460640">
                    <OkIcon width={24} height={24} fill="#FFFFFF" />
                </Link>
                <Link target="_blank" href="">
                    <TgIcon width={28} height={28} fill="#FFFFFF" />
                </Link>
            </div>
        </div>
    );
};
