"use client";

import { useReducer } from "react";
import { cn } from "@/shared/libs/shadcn-utils";

interface AppState {
    open1: boolean;
    open2: boolean;
    open3: boolean;
    open4: boolean;
}

type AppActions = { type: "open1" | "open2" | "open3" | "open4" };

function appReducer(state: AppState, action: AppActions) {
    switch (action.type) {
        case "open1":
            return { ...state, open1: !state.open1 };
        case "open2":
            return { ...state, open2: !state.open2 };
        case "open3":
            return { ...state, open3: !state.open3 };
        case "open4":
            return { ...state, open4: !state.open4 };
        default:
            return state;
    }
}

interface IObjectsInfoData {
    id: number;
    name: string;
    address: string;
    description: string;
    person_disabilities: string;
}

interface IObjectsInfoData2 {
    id: number;
    name: string;
    address: string;
    area: number;
    places_number: number;
    person_disabilities: string;
}

export interface IObjectsInfo {
    classrooms: IObjectsInfoData[];
    practices: IObjectsInfoData[];
    libraries: IObjectsInfoData2[];
    sports: IObjectsInfoData2[];
}

export const CollapsingObjectsTable = ({ objectsInfo }: { objectsInfo: IObjectsInfo }) => {
    const [state, dispatch] = useReducer(appReducer, { open1: false, open2: false, open3: false, open4: false });

    return (
        <>
            <div className="rounded-[10px] bg-white">
                <div className="flex items-center justify-between px-8 py-4">
                    <p className="text-[24px] font-semibold leading-[24px] text-[#0F91D6]">Сведения об оборудованных учебных кабинетах</p>
                    <button className="rounded-full bg-[#0F91D6] p-4" onClick={() => dispatch({ type: "open1" })}>
                        <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn("-rotate-90 duration-300", state.open1 && "rotate-0")}
                        >
                            <path
                                d="M7.73205 9C6.96225 10.3333 5.03775 10.3333 4.26795 9L0.803845 3C0.0340452 1.66666 0.996297 -1.83146e-07 2.5359 -4.85495e-08L9.4641 5.57134e-07C11.0037 6.9173e-07 11.966 1.66667 11.1962 3L7.73205 9Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>

                <div className={cn("max-h-0 overflow-hidden duration-300 ease-linear", state.open1 && "max-h-[700px]")}>
                    <div className="h-[calc(100vh-300px)] overflow-scroll">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4">
                                        Адрес места нахождения
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Наименование оборудованного учебного кабинета
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Оснащенность оборудованного учебного кабинета
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {objectsInfo.classrooms.map((el) => (
                                    <tr key={el.id} itemProp="purposeCab">
                                        <td itemProp="addressCab" className="px-4 py-4">
                                            {el.address}
                                        </td>
                                        <td itemProp="nameCab" className="px-4 py-4">
                                            {el.name}
                                        </td>
                                        <td itemProp="osnCab" className="px-4 py-4">
                                            {el.description}
                                        </td>
                                        <td itemProp="ovzCab" className="px-4 py-4">
                                            {el.person_disabilities}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="rounded-[10px] bg-white">
                <div className="flex items-center justify-between px-8 py-4">
                    <p className="text-[24px] font-semibold leading-[24px] text-[#0F91D6]">
                        Сведения об объектах для проведения практических занятий
                    </p>
                    <button className="rounded-full bg-[#0F91D6] p-4" onClick={() => dispatch({ type: "open2" })}>
                        <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn("-rotate-90 duration-300", state.open2 && "rotate-0")}
                        >
                            <path
                                d="M7.73205 9C6.96225 10.3333 5.03775 10.3333 4.26795 9L0.803845 3C0.0340452 1.66666 0.996297 -1.83146e-07 2.5359 -4.85495e-08L9.4641 5.57134e-07C11.0037 6.9173e-07 11.966 1.66667 11.1962 3L7.73205 9Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>

                <div className={cn("max-h-0 overflow-hidden duration-300 ease-linear", state.open2 && "max-h-[700px]")}>
                    <div className="h-[calc(100vh-300px)] overflow-scroll">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium text-white">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4">
                                        Адрес места нахождения
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Наименование объекта для проведения практических занятий
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Оснащенность объекта для проведения практических занятий
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {objectsInfo.practices.map((el) => (
                                    <tr key={el.id} itemProp="purposePrac">
                                        <td itemProp="addressPrac" className="px-4 py-4">
                                            {el.address}
                                        </td>
                                        <td itemProp="namePrac" className="px-4 py-4">
                                            {el.name}
                                        </td>
                                        <td itemProp="osnPrac" className="px-4 py-4">
                                            {el.description}
                                        </td>
                                        <td itemProp="ovzPrac" className="px-4 py-4">
                                            {el.person_disabilities}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="rounded-[10px] bg-white">
                <div className="flex items-center justify-between px-8 py-4">
                    <p className="text-[24px] font-semibold leading-[24px] text-[#0F91D6]">Сведения о библиотеках</p>
                    <button className="rounded-full bg-[#0F91D6] p-4" onClick={() => dispatch({ type: "open3" })}>
                        <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn("-rotate-90 duration-300", state.open3 && "rotate-0")}
                        >
                            <path
                                d="M7.73205 9C6.96225 10.3333 5.03775 10.3333 4.26795 9L0.803845 3C0.0340452 1.66666 0.996297 -1.83146e-07 2.5359 -4.85495e-08L9.4641 5.57134e-07C11.0037 6.9173e-07 11.966 1.66667 11.1962 3L7.73205 9Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>

                <div className={cn("max-h-0 overflow-hidden duration-300 ease-linear", state.open3 && "max-h-[700px]")}>
                    <div className="h-[calc(100vh-300px)] overflow-scroll">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4">
                                        Наименование объекта
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Адрес места нахождения объекта
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Площадь объекта
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Количество мест
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {objectsInfo.libraries.map((el) => (
                                    <tr key={el.id} itemProp="purposeLibr">
                                        <td itemProp="objName" className="px-4 py-4">
                                            {el.name}
                                        </td>
                                        <td itemProp="objAddress" className="px-4 py-4">
                                            {el.address}
                                        </td>
                                        <td itemProp="objSq" className="px-4 py-4">
                                            {el.area}
                                        </td>
                                        <td itemProp="objCnt" className="px-4 py-4">
                                            {el.places_number}
                                        </td>
                                        <td itemProp="objOvz" className="px-4 py-4">
                                            {el.person_disabilities}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="rounded-[10px] bg-white">
                <div className="flex items-center justify-between px-8 py-4">
                    <p className="text-[24px] font-semibold leading-[24px] text-[#0F91D6]">Сведения об объектах спорта</p>
                    <button className="rounded-full bg-[#0F91D6] p-4" onClick={() => dispatch({ type: "open4" })}>
                        <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn("-rotate-90 duration-300", state.open4 && "rotate-0")}
                        >
                            <path
                                d="M7.73205 9C6.96225 10.3333 5.03775 10.3333 4.26795 9L0.803845 3C0.0340452 1.66666 0.996297 -1.83146e-07 2.5359 -4.85495e-08L9.4641 5.57134e-07C11.0037 6.9173e-07 11.966 1.66667 11.1962 3L7.73205 9Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>

                <div className={cn("max-h-0 overflow-hidden duration-300 ease-linear", state.open4 && "max-h-[700px]")}>
                    <div className="h-[calc(100vh-300px)] overflow-scroll">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                                <tr className="text-white">
                                    <th scope="col" className="px-4 py-4">
                                        Наименование объекта
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Адрес места нахождения объекта
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Площадь объекта
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Количество мест
                                    </th>
                                    <th scope="col" className="px-4 py-4">
                                        Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {objectsInfo.sports.map((el) => (
                                    <tr key={el.id} itemProp="purposeSport">
                                        <td itemProp="objName" className="px-4 py-4">
                                            {el.name}
                                        </td>
                                        <td itemProp="objAddress" className="px-4 py-4">
                                            {el.address}
                                        </td>
                                        <td itemProp="objSq" className="px-4 py-4">
                                            {el.area}
                                        </td>
                                        <td itemProp="objCnt" className="px-4 py-4">
                                            {el.places_number}
                                        </td>
                                        <td itemProp="objOvz" className="px-4 py-4">
                                            {el.person_disabilities}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
