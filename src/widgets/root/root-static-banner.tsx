"use client";

import staticBanner from "@/shared/images/plugs/static_banner_root.png";
import Image from "next/image";

const StaticBanner = () => {
    return <Image src={staticBanner} alt="" className="w-full max-w-[1200px] rounded-xl" />;
};

export default StaticBanner;
