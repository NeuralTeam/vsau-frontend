"use client";

import Image from "next/image";
import Link from "next/link";
import { Dot } from "lucide-react";
import { useState, useEffect } from "react";
import { TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenEducationPage = () => {
    const [open, setOpen] = useState(false);

    const setOpenModal = (value: boolean) => {
        if (value) document.body.classList.add("overflow-y-hidden");
        else document.body.classList.remove("overflow-y-hidden");
        setOpen(value);
    };

    return (
        <>
            <dialog open={open} className="z-50 bg-transparent">
                <div className="flex h-svh w-svw items-center justify-center bg-[#00000050]">
                    <button onClick={() => setOpenModal(!open)} className="absolute -right-0 top-0 h-20 w-20 bg-red-400">
                        Close
                    </button>
                    <div className="h-[90%] w-[90%] overflow-y-scroll bg-white">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 border-b border-neutral-200 bg-[#0F91D6] font-medium">
                                <tr>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Код
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Наименование специальности, направления подготовки
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Уровень образования
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Образовательная программа
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Форма обучения
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Учебные предметы, курсы, дисциплины (модули), предусмотренные соответствующей ОП
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Практики, предусмотренные соответствующей ОП
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Срок получения образования очное
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Срок действия государственной аккредитации образовательной программы (при наличии государственной
                                        аккредитации)
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Языки, на которых осуществляется образование (обучение)
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Использование при реализации образовательных программ электронного обучения и дистанционных образовательных
                                        технологий
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {Array.from({ length: 100 }).map((_, i) => (
                                    <tr key={i} className="border-b border-neutral-200 dark:border-white/10">
                                        <td className="whitespace-nowrap px-4 py-4 text-center">1</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">Mark</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">Otto</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">@mdo</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">@mdo</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">@mdo</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">@mdo</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">@mdo</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">@mdo</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">@mdo</td>
                                        <td className="whitespace-nowrap px-4 py-4 text-center">@mdo</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="sticky bottom-0 z-10 bg-[#0F91D6]"></div>
                    </div>
                </div>
            </dialog>

            <TemplatePage title="Образование">
                <div className="space-y-5 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">
                        Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках обучения, сроке действия государственной
                        аккредитации образовательной программы
                    </p>
                    <p className="text-[18px]">Обязательный блок</p>
                    <button
                        onClick={() => setOpenModal(!open)}
                        className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white"
                    >
                        {/*<Image src={OpenLink} width={18} height={17} alt="" className="" />*/}
                        <p>Открыть данные</p>
                    </button>
                </div>

                <div className="space-y-2 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">Информация о языках, на которых осуществляется образование (обучение)</p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href="#" itemProp="languageEl">
                                Документ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-5 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">
                        Информация о профессиональнообщественной аккредитации образовательной программы
                    </p>
                    <p className="text-[18px]">Опциональный блок</p>
                    <Link href="#" className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                        {/*<Image src={OpenLink} width={18} height={17} alt="" className="" />*/}
                        <p>Открыть данные</p>
                    </Link>
                </div>

                <div className="space-y-5 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">Информация об общественной аккредитации образовательной организации</p>
                    <p className="text-[18px]">Опциональный блок</p>
                    <Link href="#" className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                        {/*<Image src={OpenLink} width={18} height={17} alt="" className="" />*/}
                        <p>Открыть данные</p>
                    </Link>
                </div>

                <div className="space-y-2 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">
                        Информация о численности обучающихся по реализуемым образовательным программам за счет бюджетных ассигнований федерального
                        бюджета, бюджетов субъектов Российской Федерации, местных бюджетов и по договорам об образовании за счет средств физических и
                        (или) юридических лиц, в том числе информация о численности обучающихся, являющихся иностранными гражданами, по каждой
                        образовательной программе и каждой профессии, специальности, в том числе научной, направлению подготовки или укрупненной
                        группе профессий, специальностей и направлений подготовки (для профессиональных образовательных программ)
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href="#" itemProp="eduChislenEl">
                                Документ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-2 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">
                        Информация о результатах приема по каждой профессии, специальности среднего профессионального образования (при наличии
                        вступительных испытаний), каждому направлению подготовки или специальности высшего образования, каждой научной специальности с
                        различными условиями приема (на места, финансируемые за счет бюджетных ассигнований федерального бюджета, бюджетов субъектов
                        Российской Федерации, местных бюджетов, по договорам об образовании за счет средств физических и (или) юридических лиц) с
                        указанием средней суммы набранных баллов по всем вступительным испытаниям
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href="#" itemProp="eduPriemEl">
                                Документ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-2 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">Информация о результатах перевода, восстановления и отчисления</p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href="#" itemProp="eduPerevodEl">
                                Документ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-5 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">Информация об образовательной программе</p>
                    <p className="text-[18px]">Обязательный блок</p>
                    <Link href="#" className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                        {/*<Image src={OpenLink} width={18} height={17} alt="" className="" />*/}
                        <p>Открыть данные</p>
                    </Link>
                </div>

                <div className="space-y-5 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">Информация об адаптированной образовательной программе</p>
                    <p className="text-[18px]">Опциональный блок</p>
                    <Link href="#" className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                        {/*<Image src={OpenLink} width={18} height={17} alt="" className="" />*/}
                        <p>Открыть данные</p>
                    </Link>
                </div>

                <div className="space-y-5 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">
                        Информация о направлениях и результатах научной (научно-исследовательской) деятельности и научно-исследовательской базе для ее
                        осуществления (для образовательных организаций высшего образования и организаций дополнительного профессионального
                        образования)
                    </p>
                    <p className="text-[18px]">Обязательный блок</p>
                    <Link href="#" className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                        {/*<Image src={OpenLink} width={18} height={17} alt="" className="" />*/}
                        <p>Открыть данные</p>
                    </Link>
                </div>

                <div className="space-y-5 rounded-[10px] bg-white p-8">
                    <p className="text-[23px] font-semibold leading-[20px]">
                        Информация о трудоустройстве выпускников для каждой реализуемой образовательной программы, по которой состоялся выпуск
                    </p>
                    <p className="text-[18px]">Обязательный блок</p>
                    <Link href="#" className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                        {/*<Image src={OpenLink} width={18} height={17} alt="" className="" />*/}
                        <p>Открыть данные</p>
                    </Link>
                </div>
            </TemplatePage>
        </>
    );
};

export default SvedenEducationPage;
