"use client";

import { InView } from "react-intersection-observer";
import { cn } from "@/shared/libs/shadcn-utils";
import { useState } from "react";
import { ITeachingStaff, ITeachingStaffBlock, ITeachingStaffList } from "@/shared/ui/vsau/sveden/types";
import Link from "next/link";

export const TeachingStaffBlock = ({ staffList }: ITeachingStaffBlock) => {
    const sortedList = Object.fromEntries(
        Object.entries(
            staffList.reduce(
                (acc, teachingStaff) => {
                    // Получаем первую букву или пустую строку
                    const firstLetter = teachingStaff.last_name[0] || "";
                    // Добавляем объект в соответствующий массив в аккумуляторе
                    acc[firstLetter] = [...(acc[firstLetter] || []), teachingStaff];
                    return acc;
                },
                {} as Record<string, ITeachingStaffList[]>
            )
        ).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    );

    const [hash, setHash] = useState("а");

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

            <div itemProp="teachingStaff" className="hidden">
                <p itemProp="fio">X</p>
                <p itemProp="post">X</p>
                <p itemProp="teachingDiscipline">X</p>
                <p itemProp="teachingLevel">X</p>
                <p itemProp="employeeQualification">X</p>
                <p itemProp="degree">X</p>
                <p itemProp="academStat">X</p>
                <p itemProp="profDevelopment">X</p>
                <p itemProp="genExperience">X</p>
                <p itemProp="specExperience">X</p>
                <p itemProp="teachingOp">X</p>
            </div>

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
                                    <li key={staff.id}>
                                        <Link
                                            href={`/sveden/employees/${staff.id}`}
                                            className="flex w-full flex-col rounded-[10px] py-4 pl-10 shadow duration-300 hover:scale-105 active:scale-100"
                                        >
                                            <p className="text-[18px]">
                                                {staff.last_name} {staff.first_name}
                                            </p>
                                            <p className="text-[13px]">{staff.post}</p>
                                        </Link>
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
