"use client";

import staticBanner from "@/shared/images/plugs/static_banner_root.png";
import Image from "next/image";

const StaticBanner = () => {
    return <Image src={staticBanner} alt="" className="w-full rounded-xl sm:w-3/4" />;
};

export default StaticBanner;
