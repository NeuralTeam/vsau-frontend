import Link from "next/link";
import { FooterYandexMap } from "@/shared/images/icons/footer-yandex-map";
import { DzenIcon, OkIcon, TgIcon, VkIcon, YtIcon } from "@/shared/images/icons/social-networks";
import { VsauLogoIcon } from "@/shared/images/icons/logo";

const RootFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="-ml-[70px] mt-[45px] flex h-[280px] flex-col justify-between bg-[#E4E4E4] pb-16 pt-10">
            <div className="flex items-center justify-between px-20">
                <Link href="/" className="flex items-center justify-center">
                    <div>
                        <VsauLogoIcon width={100} height={100} fill="#030303" />
                    </div>

                    <div className="w-[300px] items-center space-y-1 text-[#000000]">
                        <p className="ml-5 line-clamp-2 min-w-[200px] max-w-[full] text-[10px] font-normal leading-3">
                            Федеральное государственное бюджетное образовательное учреждение высшего образования
                        </p>
                        <p className="ml-5 line-clamp-3 min-w-[250px] max-w-[full] text-[16px] font-semibold leading-[17px]">
                            Воронежский государственный аграрный университет имени императора Петра I
                        </p>
                    </div>
                </Link>

                <div className="flex items-center space-x-8">
                    <Link target="_blank" href="https://vk.com/vsau1912" className="duration-300 hover:scale-125 active:scale-100 ">
                        <VkIcon width={28} height={28} fill="#030303" />
                    </Link>
                    <Link target="_blank" href="https://ok.ru/profile/574433460640" className="duration-300 hover:scale-125 active:scale-100 ">
                        <OkIcon width={28} height={28} fill="#030303" />
                    </Link>
                    <Link target="_blank" href="https://t.me/vsau1912" className="duration-300 hover:scale-125 active:scale-100 ">
                        <TgIcon width={28} height={28} fill="#030303" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.youtube.com/channel/UCF3LAx0wx0kjOW2QchlP6KQ"
                        className="duration-300 hover:scale-125 active:scale-100 "
                    >
                        <YtIcon width={80} height={40} fill="#030303" />
                    </Link>
                    <Link target="_blank" href="https://dzen.ru/vsau1912" className="duration-300 hover:scale-125 active:scale-100 ">
                        <DzenIcon width={28} height={28} fill="#030303" />
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-between gap-10 pl-24 pr-20">
                <div className="flex flex-col text-[10px] font-light leading-3">
                    <p>© {currentYear} ВГАУ - Воронежский государственный аграрный университет</p>
                    <p>Все права на материалы сайта vsau.ru принадлежат ВГАУ</p>
                    <p>
                        Сайт разработан командой{" "}
                        <Link target="_blank" href="https://neuralteam.ru" className="font-normal hover:underline">
                            NeuralTeam
                        </Link>
                    </p>
                </div>

                <div className="flex flex-col text-[12px] font-light leading-[14px]">
                    <FooterYandexMap width={149} height={21} fillColor="" />
                </div>

                <div className="flex flex-col text-[12px] font-light leading-[14px]">
                    <p>ФГБОУ ВО Воронежский ГАУ</p>
                    <p>Россия, 394087, Воронеж, ул. Мичурина, 1</p>
                </div>

                <div className="flex flex-col text-[12px] font-light leading-[14px]">
                    <p>
                        Тел:{" "}
                        <Link itemProp="telephone" href="tel:+74732538651" className="font-normal underline-offset-2 hover:underline">
                            +7 (473) 253-86-51
                        </Link>
                    </p>
                    <p>
                        Факс:{" "}
                        <Link itemProp="telephone" href="tel:+74732538651" className="font-normal underline-offset-2 hover:underline">
                            +7 (473) 253-86-51
                        </Link>
                    </p>
                    <p>
                        Эл. почта:{" "}
                        <Link itemProp="email" href="mailto:main@vsau.ru" className="font-normal underline-offset-2 hover:underline">
                            main@vsau.ru
                        </Link>
                    </p>
                </div>

                <div className="flex flex-col text-[12px] font-light leading-[14px]">
                    <p>График работы: с 8:00 до 17:00</p>
                    <p>Перерыв с 12:15 до 13:00</p>
                </div>
            </div>
        </div>
    );
};

export default RootFooter;
