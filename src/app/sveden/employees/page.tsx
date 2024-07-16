"use client";

import { cn } from "@/shared/libs/shadcn-utils";
import { useState } from "react";
import { InView } from "react-intersection-observer";

function getAlphabet() {
    const startCharCode = "а".charCodeAt(0);
    const endCharCode = "я".charCodeAt(0);

    let russianAlphabet: string[] = [];

    for (let i = startCharCode; i <= endCharCode; i++) {
        russianAlphabet.push(String.fromCharCode(i));
    }

    return russianAlphabet;
}

const SvedenEmployeesPage = () => {
    const letters = getAlphabet();

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
        <main itemProp="copy" className="space-y-8 pr-[70px] pt-[50px]">
            <h1>Педагогический состав</h1>

            <div className="space-y-8 rounded-[10px] bg-white py-8">
                <p className="px-8 text-[23px] font-semibold leading-[20px]">
                    Информация о персональном составе педагогических работников образовательной программы
                </p>

                <div className="flex h-svh justify-between space-x-8 overflow-hidden pr-8">
                    <div className="h-full w-full space-y-4 overflow-auto py-1 pl-8 pr-4">
                        {letters.map((char, i) => (
                            <InView
                                key={char}
                                id={char}
                                threshold={0}
                                as="div"
                                onChange={(inView, entry) => inView && setLetterState(entry?.target.id, true)}
                            >
                                <p className="text-[26px] font-bold text-[#0F91D6]">{char.toUpperCase()}</p>
                                <div className="space-y-4">
                                    {Array.from({ length: 14 }).map((_, i) => (
                                        <div key={i} itemProp="teachingStaff" className="flex w-full flex-col rounded-[10px] py-4 pl-10 shadow">
                                            <p itemProp="fio" onClick={() => setState(!state)} className="text-[18px]">
                                                Авдеев Евгений Валентинович
                                            </p>
                                            <p itemProp="post" className="text-[13px]">
                                                Доцент кафедры организации производства и предпринимательской деятельности в АПК
                                            </p>

                                            <div className={cn("max-h-0 overflow-hidden duration-300 ease-linear", state && "max-h-[700px]")}>
                                                <p itemProp="teachingDiscipline">teachingDiscipline</p>
                                                <p itemProp="teachingLevel">teachingLevel</p>
                                                <p itemProp="employeeQualification">employeeQualification</p>
                                                <p itemProp="degree">degree</p>
                                                <p itemProp="academStat">academStat</p>
                                                <p itemProp="profDevelopment">profDevelopment</p>
                                                <p itemProp="genExperience">genExperience</p>
                                                <p itemProp="specExperience">specExperience</p>
                                                <p itemProp="teachingOp">teachingOp</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </InView>
                        ))}
                    </div>

                    <div className="flex h-full flex-col justify-between rounded-[10px] bg-[#0F91D6] p-5">
                        {letters.map((char, i) => (
                            <button
                                key={i}
                                onClick={() => setLetterState(char, false)}
                                className={cn("text-center text-[15px] font-bold text-white", hash == char && "opacity-50")}
                            >
                                {char.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SvedenEmployeesPage;
