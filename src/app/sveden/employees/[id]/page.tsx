import { Files, Share2 } from "lucide-react";
import Link from "next/link";
import { VkLogo } from "@/shared/images/icons/social-networks/vk-logo";
import { OkLogo } from "@/shared/images/icons/social-networks/ok-logo";
import { TgLogo } from "@/shared/images/icons/social-networks/tg-logo";

const SvedenEmployerPage = ({ params }: { params: { id: string } }) => {
    return (
        <div className="space-y-8 pr-[70px] pt-[50px]">
            <div></div>
            <div className="h-20 w-full rounded-[10px] bg-white">A</div>
            <div className="space-y-5 rounded-[10px] bg-[#0F91D6] p-10 text-[16px] font-normal leading-[16px] text-white" id="share-section">
                <div className="flex items-center space-x-2">
                    <Share2 size={20} strokeWidth={3} />
                    <p>Поделиться</p>
                </div>

                <div className="flex space-x-8 rounded-[10px] bg-white px-8 py-4">
                    <button className="flex items-center space-x-2 text-nowrap text-[14px] text-[#030303]">
                        <Files size={20} strokeWidth={2} />
                        <p>Скопировать ссылку</p>
                    </button>
                    <input
                        readOnly
                        value="https://vsau.neuralteam.ru/news/studenty-prinyali-uchastie-v-proekte-bez-sroka-davnosti2-8"
                        className="w-full bg-transparent text-[14px] text-[#808080] outline-none"
                    />
                </div>

                <div className="flex items-center space-x-12">
                    <p>Поделиться через:</p>
                    <Link target="_blank" href="https://vk.com/vsau1912">
                        <VkLogo width={30} height={20} fillColor="#FFFFFF" />
                    </Link>
                    <Link target="_blank" href="https://ok.ru/profile/574433460640">
                        <OkLogo width={17} height={28} fillColor="#FFFFFF" />
                    </Link>
                    <Link target="_blank" href="">
                        <TgLogo width={32} height={25} fillColor="#FFFFFF" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SvedenEmployerPage;
