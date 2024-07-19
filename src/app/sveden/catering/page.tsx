"use client";

import { TemplatePage } from "@/shared/ui/vsau/sveden";
import { useReducer } from "react";
import { cn } from "@/shared/libs/shadcn-utils";

interface AppState {
    open1: boolean;
    open2: boolean;
}

type AppActions = { type: "open1" | "open2" };

function appReducer(state: AppState, action: AppActions) {
    switch (action.type) {
        case "open1":
            return { ...state, open1: !state.open1 };
        case "open2":
            return { ...state, open2: !state.open2 };
        default:
            return state;
    }
}

const SvedenCateringPage = () => {
    const [state, dispatch] = useReducer(appReducer, { open1: false, open2: false });

    return (
        <TemplatePage title="Организация питания в образовательной организации">
            <div className="rounded-[10px] bg-white">
                <div className="flex items-center justify-between px-8 py-4">
                    <p className="text-[23px] font-semibold leading-[20px]">Сведения об условиях питания обучающихся</p>
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
                            <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium text-white">
                                <tr>
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
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <tr key={i} itemProp="meals">
                                        <td itemProp="objName" className="px-4 py-4">
                                            objName
                                        </td>
                                        <td itemProp="objAddress" className="px-4 py-4">
                                            objAddress
                                        </td>
                                        <td itemProp="objSq" className="px-4 py-4">
                                            objSq
                                        </td>
                                        <td itemProp="objCnt" className="px-4 py-4">
                                            objCnt
                                        </td>
                                        <td itemProp="objOvz" className="px-4 py-4">
                                            objOvz
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
                    <p className="text-[23px] font-semibold leading-[20px]">Сведения об условиях охраны здоровья обучающихся</p>
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
                                <tr>
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
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <tr key={i} itemProp="health">
                                        <td itemProp="objName" className="px-4 py-4">
                                            objName
                                        </td>
                                        <td itemProp="objAddress" className="px-4 py-4">
                                            objAddress
                                        </td>
                                        <td itemProp="objSq" className="px-4 py-4">
                                            objSq
                                        </td>
                                        <td itemProp="objCnt" className="px-4 py-4">
                                            objCnt
                                        </td>
                                        <td itemProp="objOvz" className="px-4 py-4">
                                            objOvz
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </TemplatePage>
    );
};

export default SvedenCateringPage;
