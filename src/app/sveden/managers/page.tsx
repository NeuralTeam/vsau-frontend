import Image from "next/image";
import { TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenManagersPage = () => {
    return (
        <TemplatePage title="Руководство">
            <div className="grid grid-cols-2 grid-rows-3 gap-5 rounded-[10px] bg-white p-8">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex max-w-[650px] items-center space-x-10 rounded-[10px] bg-[#0F91D6] p-10">
                        <div>
                            <Image src="/manifest_logo512_example.png" width={180} height={180} alt="#" />
                        </div>
                        <div itemProp={(i + 1) % 2 == 0 ? "rucovodstvo" : "rucovodstvoZam"} className="space-y-4 text-white">
                            <div className="space-y-2">
                                <p itemProp="fio" className="text-[25px] font-semibold leading-[25px]">
                                    Агибалов Александр Владимирович
                                </p>
                                <p itemProp="post" className="text-[17px] font-light leading-[16px]">
                                    Ректор Воронежского ГАУ
                                </p>
                            </div>
                            <div className="space-y-0.5 text-[17px] font-light leading-[18px]">
                                <p itemProp="telephone">253-86-31 / 101 каб.</p>
                                <p itemProp="email">main@vsau.ru</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div itemProp="rucovodstvoFil" className="rounded-[10px] bg-white p-8">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i}>
                        <p itemProp="nameFil" className="text-[23px] font-semibold leading-[20px]">
                            Руководитель филиала №{i + 1}
                        </p>

                        <div className="grid grid-cols-2 gap-5">
                            {Array.from({ length: 1 }).map((_, i) => (
                                <div key={i} className="max-w-[650px] items-center p-10">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <p itemProp="fio" className="text-[25px] font-semibold leading-[25px] text-[#0F91D6]">
                                                Агибалов Александр Владимирович
                                            </p>
                                            <p itemProp="post" className="text-[17px] font-light leading-[16px]">
                                                Ректор Воронежского ГАУ
                                            </p>
                                        </div>
                                        <div className="space-y-0.5 text-[17px] font-light leading-[20px]">
                                            <p>Корпус главный, 101 каб.</p>
                                            <p itemProp="telephone">253-86-31</p>
                                            <p itemProp="email">main@vsau.ru</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div itemProp="rucovodstvoRep" className="rounded-[10px] bg-white p-8">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i}>
                        <p itemProp="nameRep" className="text-[23px] font-semibold leading-[20px]">
                            Руководитель представительства №{i + 1}
                        </p>

                        <div className="grid grid-cols-2 gap-5">
                            {Array.from({ length: 1 }).map((_, i) => (
                                <div key={i} className="max-w-[650px] items-center p-10">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <p itemProp="fio" className="text-[25px] font-semibold leading-[25px] text-[#0F91D6]">
                                                Агибалов Александр Владимирович
                                            </p>
                                            <p itemProp="post" className="text-[17px] font-light leading-[16px]">
                                                Ректор Воронежского ГАУ
                                            </p>
                                        </div>
                                        <div className="space-y-0.5 text-[17px] font-light leading-[20px]">
                                            <p>Корпус главный, 101 каб.</p>
                                            <p itemProp="telephone">253-86-31</p>
                                            <p itemProp="email">main@vsau.ru</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </TemplatePage>
    );
};

export default SvedenManagersPage;
