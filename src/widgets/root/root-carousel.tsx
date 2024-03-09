"use client";

import { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/shared/ui/shadcn/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import carouselBannerRoot from "@/shared/images/plugs/carousel_banner_root.png";
import { LuDot } from "react-icons/lu";
import { cn } from "@/shared/libs/shadcn-utils";

export interface IRootCarousel {
    id: number;
    title: string;
    description: string;
}

const RootCarousel = ({ data }: { data: IRootCarousel[] }) => {
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
        <div className="w-full sm:w-3/4">
            <Carousel setApi={setApi} opts={{ loop: true }} plugins={[Autoplay({ delay: 50000 })]}>
                <CarouselContent>
                    {data.map((item) => (
                        <CarouselItem key={item.id}>
                            <div className="flex flex-col md:flex-row">
                                <Image
                                    src={carouselBannerRoot}
                                    priority={false}
                                    placeholder="blur"
                                    alt="#"
                                    className="max-h-[300px] w-full rounded-xl object-scale-down md:w-[70%] md:rounded-xl"
                                />
                                <div className="h-auto rounded-r-xl px-5 pt-3 md:w-[30%] md:p-5">
                                    <h1 className="line-clamp-1 font-semibold md:line-clamp-2">{item.title}</h1>
                                    <p className="line-clamp-2 text-muted-foreground sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-5">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="absolute bottom-2 right-2 hidden sm:flex lg:space-x-2">
                    {Array.from({ length: count }).map((_, i) => (
                        <LuDot
                            key={i}
                            onClick={() => onDotButtonClick(i)}
                            className={cn(
                                "cursor-pointer rounded-full",
                                i + 1 == current ? "border-2 border-primary bg-foreground" : "hover:bg-primary"
                            )}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
};

export default RootCarousel;
