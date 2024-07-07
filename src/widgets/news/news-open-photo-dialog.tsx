"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/shared/ui/shadcn/dialog";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { VkLogo } from "@/shared/images/icons/social-networks/vk-logo";
import { OkLogo } from "@/shared/images/icons/social-networks/ok-logo";
import { TgLogo } from "@/shared/images/icons/social-networks/tg-logo";
import { Download, Files, Share2 } from "lucide-react";

export function NewsOpenPhotoDialog({ children, isOpen, photo }: { children: ReactNode; isOpen?: boolean; photo: StaticImageData }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen != undefined) setOpen(isOpen);
    }, [isOpen]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className="cursor-pointer">
                {children}
            </DialogTrigger>
            <DialogContent className="h-fit w-[50%] overflow-hidden rounded-[10px]">
                <Image src={photo} priority={false} placeholder="blur" alt="#" className="aspect-video object-cover" />
                <div className="flex h-20 items-center justify-between bg-black px-12 text-[14px] font-light text-white">
                    <div className="flex space-x-16">
                        <div className="flex space-x-5">
                            <div className="flex items-center space-x-2">
                                <Share2 size={20} strokeWidth={3} />
                                <p>Поделиться через:</p>
                            </div>
                            <div className="flex items-center space-x-6">
                                <Link target="_blank" href="https://vk.com/vsau1912">
                                    <VkLogo width={30} height={20} fillColor="#FFFFFF" className="h-4 w-4" />
                                </Link>
                                <Link target="_blank" href="https://ok.ru/profile/574433460640">
                                    <OkLogo width={17} height={28} fillColor="#FFFFFF" className="h-4 w-4" />
                                </Link>
                                <Link target="_blank" href="#">
                                    <TgLogo width={32} height={25} fillColor="#FFFFFF" className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Files size={20} strokeWidth={2} />
                            <p>Скопировать ссылку на фото</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Download size={20} strokeWidth={3} />
                        <p>Скачать</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
