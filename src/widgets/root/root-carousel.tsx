"use client";

import { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/shared/ui/shadcn/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import carouselBannerRoot from "@/shared/images/plugs/carousel_banner_root.png";
import { cn } from "@/shared/libs/shadcn-utils";
import Link from "next/link";

const RootCarousel = ({ banners }: { banners: [{ id: number; link: string; picture: string; order: string }] }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!api) return;
            api.scrollTo(index);
        },
        [api]
    );

    return (
        <div className="-ml-[70px] flex flex-col items-center justify-center space-y-5">
            <Carousel setApi={setApi} opts={{ loop: true }} plugins={[Autoplay({ delay: 10000 })]}>
                <CarouselContent>
                    {banners.map((banner) => (
                        <CarouselItem key={banner.id}>
                            <Link target="_blank" href={banner.link}>
                                <Image
                                    src={
                                        banner.picture === null
                                            ? carouselBannerRoot
                                            : `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/storage/${banner.picture}?bucket=posts`
                                    }
                                    width={1900}
                                    height={350}
                                    quality={80}
                                    priority={false}
                                    placeholder="empty"
                                    alt="#"
                                    className="max-h-[350px] duration-300 hover:scale-105"
                                />
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="flex space-x-3">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        className={cn(
                            "h-2.5 w-2.5 rounded-full duration-300",
                            i + 1 == current ? "bg-[#0F91D6]" : "bg-[#3F3F3F70] hover:scale-110 hover:bg-[#0F91D650]"
                        )}
                        onClick={() => onDotButtonClick(i)}
                        disabled={i + 1 == current}
                    />
                ))}
            </div>
        </div>
    );
};

export default RootCarousel;
