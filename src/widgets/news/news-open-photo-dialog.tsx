"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/shared/ui/shadcn/dialog";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { VkIcon } from "@/shared/images/icons/social-networks/vk-icon";
import { OkIcon } from "@/shared/images/icons/social-networks/ok-icon";
import { TgIcon } from "@/shared/images/icons/social-networks/tg-icon";
import { CircleCheck, Files, Share2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { DownloadIcon, ShareIcon } from "@/shared/images/icons/other";

export function NewsOpenPhotoDialog({
    children,
    isOpen,
    mediaId,
    photo
}: {
    children: ReactNode;
    mediaId?: number;
    isOpen?: boolean;
    photo: StaticImageData;
}) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
        if (isOpen != undefined) setOpen(isOpen);
        return () => clearTimeout(timerRef.current);
    }, [isOpen]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_DOMAIN}${pathname}?mediaId=${mediaId}`);
            setOpen2(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className="cursor-pointer">
                {children}
            </DialogTrigger>
            <DialogContent className="h-fit w-[60%] overflow-hidden rounded-[10px]">
                <Image src={photo} priority={false} placeholder="blur" alt="#" className="aspect-video object-cover" />
                <div className="flex h-20 items-center justify-between bg-black px-16 text-[14px] font-light text-white">
                    <div className="flex space-x-16">
                        <div className="flex space-x-5">
                            <div className="flex items-center space-x-2">
                                <ShareIcon width={16} height={16} fill="#FFFFFF" />
                                <p>Поделиться через:</p>
                            </div>
                            <div className="flex items-center space-x-6">
                                <Link target="_blank" href="https://vk.com/vsau1912">
                                    <VkIcon width={22} height={22} fill="#FFFFFF" />
                                </Link>
                                <Link target="_blank" href="https://ok.ru/profile/574433460640">
                                    <OkIcon width={18} height={18} fill="#FFFFFF" />
                                </Link>
                                <Link target="_blank" href="#">
                                    <TgIcon width={22} height={22} fill="#FFFFFF" />
                                </Link>
                            </div>
                        </div>

                        <button
                            onClick={async () => {
                                await handleCopy();
                                window.clearTimeout(timerRef.current);
                                timerRef.current = window.setTimeout(() => {
                                    setOpen2(false);
                                }, 3000);
                            }}
                            className="flex items-center space-x-2 text-nowrap outline-none duration-300 active:scale-110"
                        >
                            {open2 ? (
                                <>
                                    <CircleCheck size={20} strokeWidth={2} />
                                    <p>Скопировано</p>
                                </>
                            ) : (
                                <>
                                    <Files size={20} strokeWidth={2} />
                                    <p>Скопировать ссылку на фото</p>
                                </>
                            )}
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <DownloadIcon width={16} height={16} fill="#FFFFFF" />
                        <p>Скачать</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
