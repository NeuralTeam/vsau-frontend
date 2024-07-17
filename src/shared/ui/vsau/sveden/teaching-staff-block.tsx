"use client";

import { InView } from "react-intersection-observer";
import { cn } from "@/shared/libs/shadcn-utils";
import { useState } from "react";

interface IDiscipline {}

interface IProfDevelopment {}

interface IEduProgram {}

interface ITeachingStaff {
    id: number;
    first_name: string;
    last_name: string;
    post: string;
    disciplines: IDiscipline[];
    level: string;
    qualification: string;
    degree?: string;
    academStat?: string;
    profDevelopments?: IProfDevelopment[];
    totalWorkExperience: number;
    specWorkExperience: number;
    eduPrograms: IEduProgram[];
}

interface ITeachingStaffBlock {
    staffList: ITeachingStaff[];
}

export const TeachingStaffBlock = ({ staffList }: ITeachingStaffBlock) => {
    const sortedList = Object.fromEntries(
        Object.entries(
            staffList.reduce(
                (acc, { last_name }) => {
                    // Получаем первую букву или пустую строку
                    const firstLetter = last_name[0] || "";
                    // Добавляем объект в соответствующий массив в аккумуляторе
                    acc[firstLetter] = [...(acc[firstLetter] || []), { last_name }];
                    return acc;
                },
                {} as Record<string, { last_name: string }[]>
            )
        ).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    );

    const [hash, setHash] = useState("а");
    const [state, setState] = useState(false);

    const setLetterState = (hash: string, hashAuto: boolean) => {
        if (!hashAuto) {
            const element = document.getElementById(hash);
            element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
        setHash(hash);
    };

    return (
        <div className="space-y-8 rounded-[10px] bg-white py-8">
            <p className="px-8 text-[23px] font-semibold leading-[20px]">
                Информация о персональном составе педагогических работников образовательной программы
            </p>

            <div className="flex h-svh justify-between space-x-8 overflow-hidden pr-8">
                <div className="h-full w-full space-y-4 overflow-auto py-1 pl-8 pr-4">
                    {Object.entries(sortedList).map(([char, valueList]) => (
                        <InView
                            key={char}
                            id={char}
                            threshold={0.1}
                            rootMargin="0% 0% -90% 0%"
                            as="div"
                            onChange={(inView) => inView && setLetterState(char, true)}
                        >
                            <p className="text-[26px] font-bold text-[#0F91D6]">{char.toUpperCase()}</p>
                            <ul className="relative space-y-4">
                                {valueList.map((staff) => (
                                    <li
                                        key={staff.last_name}
                                        itemProp="teachingStaff"
                                        className="flex w-full flex-col rounded-[10px] py-4 pl-10 shadow"
                                    >
                                        <p itemProp="fio" onClick={() => setState(!state)} className="text-[18px]">
                                            {staff.last_name}
                                            {/*{staff.first_name}*/}
                                        </p>
                                        <p itemProp="post" className="text-[13px]">
                                            {/*{staff.post}*/}
                                        </p>

                                        <div className={cn("max-h-0 overflow-hidden duration-300 ease-linear", state && "max-h-[700px]")}>
                                            <p itemProp="teachingDiscipline">teachingDiscipline</p>
                                            {/*<p itemProp="teachingLevel">{staff.level}</p>*/}
                                            <p itemProp="employeeQualification">employeeQualification</p>
                                            {/*<p itemProp="degree">{staff.degree}</p>*/}
                                            {/*<p itemProp="academStat">{staff.academStat}</p>*/}
                                            <p itemProp="profDevelopment">profDevelopment</p>
                                            {/*<p itemProp="genExperience">{staff.totalWorkExperience}</p>*/}
                                            {/*<p itemProp="specExperience">{staff.specWorkExperience}</p>*/}
                                            <p itemProp="teachingOp">teachingOp</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </InView>
                    ))}
                </div>

                <div className="sticky top-0 flex h-full flex-col rounded-[10px] bg-[#0F91D6] p-5">
                    {Object.keys(sortedList).map((char) => (
                        <button
                            key={char}
                            onClick={() => setLetterState(char, false)}
                            className={cn("text-center text-[15px] font-bold text-white", hash == char && "opacity-50")}
                        >
                            {char.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
