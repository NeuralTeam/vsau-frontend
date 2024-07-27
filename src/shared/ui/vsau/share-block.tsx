"use client";

import { Files, Share2 } from "lucide-react";
import Link from "next/link";
import { VkIcon } from "@/shared/images/icons/social-networks/vk-icon";
import { OkIcon } from "@/shared/images/icons/social-networks/ok-icon";
import { TgIcon } from "@/shared/images/icons/social-networks/tg-icon";
import { usePathname } from "next/navigation";

export const ShareBlock = () => {
    const pathname = usePathname();

    return (
        <div className="space-y-5 rounded-[10px] bg-[#0F91D6] p-10 text-[16px] font-normal leading-[16px] text-white" id="share-section">
            <div className="flex items-center space-x-2">
                <Share2 size={20} strokeWidth={3} />
                <p>Поделиться</p>
            </div>

            <div className="flex space-x-8 rounded-[10px] bg-white px-8 py-4">
                <button className="flex items-center space-x-2 text-nowrap text-[14px] font-medium text-[#030303]">
                    <Files size={20} strokeWidth={2} />
                    <p>Скопировать ссылку</p>
                </button>
                <input
                    readOnly
                    value={`${process.env.NEXT_PUBLIC_DOMAIN}${pathname}`}
                    className="w-full bg-transparent text-[14px] text-[#808080] outline-none"
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
