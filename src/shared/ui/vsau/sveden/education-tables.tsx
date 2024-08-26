"use client";

import { Block } from "@/shared/ui/vsau/sveden";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/shadcn/dialog";
import Link from "next/link";

interface IFile {
    title: string;
    link: string | null;
}

interface IEduAccred {
    id: number;
    code: string;
    name: string;
    prof: string;
    level: string;
    form: string;
    learning_term: string;
    date_end: string;
    pred: IFile[];
    prac: IFile[];
    el: string;
}

interface IEduOAccred {
    id: number;
    code: string;
    name: string;
    level: string;
    prof: string;
    org_name: string;
    date_end: string;
}

interface IEduOp {
    id: number;
    code: string;
    name: string;
    level: string;
    prof: string;
    form: string;
    main: string;
    plan: string;
    rpd: string;
    shedule: string;
    pr: string;
    methodology: string;
}

interface IEduNir {
    id: number;
    code: string;
    name: string;
    perechen_nir: string;
    prof: string;
    level: string;
    naprav_nir: string;
    result_nir: string;
    base_nir: string;
}

interface IGraduateJob {
    id: number;
    code: string;
    name: string;
    prof: string;
    v1: string;
    t1: string;
}

export interface IEducation {
    edu_accred: IEduAccred[];
    edu_po_accred: IEduOAccred[];
    edu_o_accred: IEduOAccred[];
    edu_op: IEduOp[];
    edu_ad_op: IEduOp[];
    edu_nir: IEduNir[];
    graduate_job: IGraduateJob[];
}

export const EducationTables = ({ tableData }: { tableData: IEducation }) => {
    return (
        <>
            <Block title="Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках обучения, сроке действия государственной аккредитации образовательной программы">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                            <p>Открыть данные</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="h-[95%] w-[95%] overflow-y-auto rounded-[10px] bg-white">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 border-b border-neutral-200 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4 align-text-bottom">
                                        Код специальности
                                    </th>
                                    <th scope="col" className="px-4 py-4 align-text-bottom">
                                        Наименование специальности, направления подготовки
                                    </th>
                                    <th scope="col" className="px-4 py-4 align-text-bottom">
                                        Образовательная программа, направленность, профиль, шифр и наименование научной специальности
                                    </th>
                                    <th scope="col" className="px-4 py-4 align-text-bottom">
                                        Уровень образования
                                    </th>
                                    <th scope="col" className="px-4 py-4 align-text-bottom">
                                        Форма обучения
                                    </th>
                                    <th scope="col" className="px-4 py-4 align-text-bottom">
                                        Нормативный срок обучения
                                    </th>
                                    <th scope="col" className="px-4 py-4 align-text-bottom">
                                        Срок действия государственной аккредитации образовательной программы
                                    </th>
                                    <th scope="col" className="px-2 py-4 align-text-bottom">
                                        Учебные предметы, курсы, дисциплины (модули)
                                    </th>
                                    <th scope="col" className="px-2 py-4 align-text-bottom">
                                        Практики
                                    </th>
                                    <th scope="col" className="px-2 py-4 align-text-bottom">
                                        Информация об использовании при реализации образовательных программ электронного обучения и дистанционных
                                        образовательных технологий
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {tableData.edu_accred.map((el) => (
                                    <tr key={el.id} itemProp="eduAccred" className="border-b border-neutral-200">
                                        <td itemProp="eduCode" className="whitespace px-4 py-4 text-start align-text-top">
                                            {el.code}
                                        </td>
                                        <td itemProp="eduName" className="whitespace px-4 py-4 text-start align-text-top">
                                            {el.name}
                                        </td>
                                        <td itemProp="eduProf" className="whitespace px-4 py-4 text-start align-text-top">
                                            {el.prof}
                                        </td>
                                        <td itemProp="eduLevel" className="whitespace px-4 py-4 text-start align-text-top">
                                            {el.level}
                                        </td>
                                        <td itemProp="eduForm" className="whitespace px-4 py-4 text-start align-text-top">
                                            {el.form}
                                        </td>
                                        <td itemProp="learningTerm" className="whitespace px-4 py-4 text-start align-text-top">
                                            {el.learning_term}
                                        </td>
                                        <td itemProp="dateEnd" className="whitespace px-4 py-4 text-start align-text-top">
                                            {el.date_end}
                                        </td>
                                        <td itemProp="eduPred" className="whitespace px-2 py-4 text-start align-text-top">
                                            {el.pred[0].title}
                                        </td>
                                        <td itemProp="eduPrac" className="whitespace-nowrap px-2 py-4 text-start align-text-top">
                                            <ul className="space-y-2">
                                                {el.prac.map((p) => (
                                                    <li key={p.title}>
                                                        {p.link !== null ? (
                                                            <Link
                                                                href={p.link}
                                                                target="_blank"
                                                                className="underline-offset-2 duration-300 hover:underline"
                                                            >
                                                                {p.title}
                                                            </Link>
                                                        ) : (
                                                            <p>{p.title}</p>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td itemProp="eduEl" className="whitespace px-2 py-4 text-center align-text-top">
                                            {el.el}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DialogContent>
                </Dialog>
            </Block>

            <Block title="Информация о профессиональнообщественной аккредитации образовательной программы">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                            <p>Открыть данные</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="h-[95%] w-[95%] overflow-y-auto rounded-[10px] bg-white">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 border-b border-neutral-200 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Код специальности
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
                                        Наименование аккредитующей организации
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Срок действия профессионально-общественной аккредитации образовательной программы
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {tableData.edu_po_accred.map((el) => (
                                    <tr key={el.id} itemProp="eduPOAccred" className="border-b border-neutral-200">
                                        <td itemProp="eduCode" className="whitespace px-4 py-4 text-center">
                                            {el.code}
                                        </td>
                                        <td itemProp="eduName" className="whitespace px-4 py-4 text-center">
                                            {el.name}
                                        </td>
                                        <td itemProp="eduLevel" className="whitespace px-4 py-4 text-center">
                                            {el.level}
                                        </td>
                                        <td itemProp="eduProf" className="whitespace px-4 py-4 text-center">
                                            {el.prof}
                                        </td>
                                        <td itemProp="orgName" className="whitespace px-4 py-4 text-center">
                                            {el.org_name}
                                        </td>
                                        <td itemProp="dateEnd" className="whitespace px-4 py-4 text-center">
                                            {el.date_end}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DialogContent>
                </Dialog>
            </Block>

            <Block title="Информация об общественной аккредитации образовательной организации">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                            <p>Открыть данные</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="h-[95%] w-[95%] overflow-y-auto rounded-[10px] bg-white">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 border-b border-neutral-200 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Код специальности
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
                                        Наименование аккредитующей организации
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Срок действия профессионально-общественной аккредитации образовательной программы
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {tableData.edu_o_accred.map((el) => (
                                    <tr key={el.id} itemProp="eduOAccred" className="border-b border-neutral-200">
                                        <td itemProp="eduCode" className="whitespace px-4 py-4 text-center">
                                            {el.code}
                                        </td>
                                        <td itemProp="eduName" className="whitespace px-4 py-4 text-center">
                                            {el.name}
                                        </td>
                                        <td itemProp="eduLevel" className="whitespace px-4 py-4 text-center">
                                            {el.level}
                                        </td>
                                        <td itemProp="eduProf" className="whitespace px-4 py-4 text-center">
                                            {el.prof}
                                        </td>
                                        <td itemProp="orgName" className="whitespace px-4 py-4 text-center">
                                            {el.org_name}
                                        </td>
                                        <td itemProp="dateEnd" className="whitespace px-4 py-4 text-center">
                                            {el.date_end}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DialogContent>
                </Dialog>
            </Block>

            <Block title="Информация об образовательной программе">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                            <p>Открыть данные</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="h-[95%] w-[95%] overflow-y-auto rounded-[10px] bg-white">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 border-b border-neutral-200 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Код специальности
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
                                        Описание образовательной программы с приложением
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Учебный план
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Рабочие программы
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Календарный учебный график
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Рабочие программы практик
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Методические и иные документы, разработанные образовательной организацией для обеспечения образовательного
                                        процесса, а также рабочие программы воспитания и календарные планы воспитательной работы, включаемых в ООП
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {tableData.edu_op.map((el) => (
                                    <tr key={el.id} itemProp="eduOp" className="border-b border-neutral-200">
                                        <td itemProp="eduCode" className="whitespace px-4 py-4 text-center">
                                            {el.code}
                                        </td>
                                        <td itemProp="eduName" className="whitespace px-4 py-4 text-center">
                                            {el.name}
                                        </td>
                                        <td itemProp="eduLevel" className="whitespace px-4 py-4 text-center">
                                            {el.level}
                                        </td>
                                        <td itemProp="eduProf" className="whitespace px-4 py-4 text-center">
                                            {el.prof}
                                        </td>
                                        <td itemProp="eduForm" className="whitespace px-4 py-4 text-center">
                                            {el.form}
                                        </td>
                                        <td itemProp="opMain" className="whitespace px-4 py-4 text-center">
                                            {el.main}
                                        </td>
                                        <td itemProp="educationPlan" className="whitespace px-4 py-4 text-center">
                                            {el.plan}
                                        </td>
                                        <td itemProp="educationRpd" className="whitespace px-4 py-4 text-center">
                                            {el.rpd}
                                        </td>
                                        <td itemProp="educationShedule" className="whitespace px-4 py-4 text-center">
                                            {el.shedule}
                                        </td>
                                        <td itemProp="eduPr" className="whitespace px-4 py-4 text-center">
                                            {el.pr}
                                        </td>
                                        <td itemProp="methodology" className="whitespace px-4 py-4 text-center">
                                            {el.methodology}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DialogContent>
                </Dialog>
            </Block>

            <Block title="Информация об адаптированной образовательной программе">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                            <p>Открыть данные</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="h-[95%] w-[95%] overflow-y-auto rounded-[10px] bg-white">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 border-b border-neutral-200 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Код специальности
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
                                        Описание образовательной программы с приложением
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Учебный план
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Рабочие программы
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Календарный учебный график
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Рабочие программы практик
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Методические и иные документы, разработанные образовательной организацией для обеспечения образовательного
                                        процесса, а также рабочие программы воспитания и календарные планы воспитательной работы, включаемых в ООП
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {tableData.edu_ad_op.map((el) => (
                                    <tr key={el.id} itemProp="eduAdOp" className="border-b border-neutral-200">
                                        <td itemProp="eduCode" className="whitespace px-4 py-4 text-center">
                                            {el.id}
                                        </td>
                                        <td itemProp="eduName" className="whitespace px-4 py-4 text-center">
                                            {el.name}
                                        </td>
                                        <td itemProp="eduLevel" className="whitespace px-4 py-4 text-center">
                                            {el.level}
                                        </td>
                                        <td itemProp="eduProf" className="whitespace px-4 py-4 text-center">
                                            {el.prof}
                                        </td>
                                        <td itemProp="eduForm" className="whitespace px-4 py-4 text-center">
                                            {el.form}
                                        </td>
                                        <td itemProp="opMain" className="whitespace px-4 py-4 text-center">
                                            {el.main}
                                        </td>
                                        <td itemProp="educationPlan" className="whitespace px-4 py-4 text-center">
                                            {el.plan}
                                        </td>
                                        <td itemProp="educationRpd" className="whitespace px-4 py-4 text-center">
                                            {el.rpd}
                                        </td>
                                        <td itemProp="educationShedule" className="whitespace px-4 py-4 text-center">
                                            {el.shedule}
                                        </td>
                                        <td itemProp="eduPr" className="whitespace px-4 py-4 text-center">
                                            {el.pr}
                                        </td>
                                        <td itemProp="methodology" className="whitespace px-4 py-4 text-center">
                                            {el.methodology}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DialogContent>
                </Dialog>
            </Block>

            <Block title="Информация о направлениях и результатах научной деятельности и научно-исследовательской базе для ее осуществления">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                            <p>Открыть данные</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="h-[95%] w-[95%] overflow-y-auto rounded-[10px] bg-white">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 border-b border-neutral-200 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Код специальности
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Наименование специальности, направления подготовки
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Перечень научных направлений, в рамках которых ведется научная (научно-исследовательская) деятельность
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Образовательная программа
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Уровень образования
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Название научного направления/научной школы
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Результаты научной деятельности
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Сведения о научно-исследовательской базе для осуществления научной деятельности
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {tableData.edu_nir.map((el) => (
                                    <tr key={el.id} itemProp="eduNir" className="border-b border-neutral-200">
                                        <td itemProp="eduCode" className="whitespace px-4 py-4 text-center">
                                            {el.code}
                                        </td>
                                        <td itemProp="eduName" className="whitespace px-4 py-4 text-center">
                                            {el.name}
                                        </td>
                                        <td itemProp="perechenNir" className="whitespace px-4 py-4 text-center">
                                            {el.perechen_nir}
                                        </td>
                                        <td itemProp="eduProf" className="whitespace px-4 py-4 text-center">
                                            {el.prof}
                                        </td>
                                        <td itemProp="eduLevel" className="whitespace px-4 py-4 text-center">
                                            {el.level}
                                        </td>
                                        <td itemProp="napravNir" className="whitespace px-4 py-4 text-center">
                                            {el.naprav_nir}
                                        </td>
                                        <td itemProp="resultNir" className="whitespace px-4 py-4 text-center">
                                            {el.result_nir}
                                        </td>
                                        <td itemProp="baseNir" className="whitespace px-4 py-4 text-center">
                                            {el.base_nir}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DialogContent>
                </Dialog>
            </Block>

            <Block title="Информация о трудоустройстве выпускников для каждой реализуемой образовательной программы, по которой состоялся выпуск">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex h-11 w-[250px] items-center justify-center space-x-3 rounded-[10px] bg-[#0F91D6] text-white">
                            <p>Открыть данные</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="h-[95%] w-[95%] overflow-y-auto rounded-[10px] bg-white">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 border-b border-neutral-200 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Код специальности
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Наименование специальности, направления подготовки
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Образовательная программа
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Численность выпускников прошлого учебного года
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-center">
                                        Численность трудоустроенных выпускников прошлого учебного года
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {tableData.graduate_job.map((el) => (
                                    <tr key={el.id} itemProp="graduateJob" className="border-b border-neutral-200">
                                        <td itemProp="eduCode" className="whitespace px-4 py-4 text-center">
                                            {el.code}
                                        </td>
                                        <td itemProp="eduName" className="whitespace px-4 py-4 text-center">
                                            {el.name}
                                        </td>
                                        <td itemProp="eduProf" className="whitespace px-4 py-4 text-center">
                                            {el.prof}
                                        </td>
                                        <td itemProp="v1" className="whitespace px-4 py-4 text-center">
                                            {el.v1}
                                        </td>
                                        <td itemProp="t1" className="whitespace px-4 py-4 text-center">
                                            {el.t1}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DialogContent>
                </Dialog>
            </Block>
        </>
    );
};
