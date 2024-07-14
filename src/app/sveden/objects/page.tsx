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

const SvedenObjectsPage = () => {
    const [state, dispatch] = useReducer(appReducer, { open1: false, open2: false, open3: false, open4: false });

    return (
        <main itemProp="copy" className="space-y-5 pr-[70px] pt-[50px]">
            <h1>Материально-техническое обеспечение и оснащённость образовательного процесса. Доступная среда</h1>

            <div className="rounded-[10px] bg-white">
                <div className="flex items-center justify-between px-8 py-4">
                    <p className="text-[23px] font-semibold leading-[20px]">Сведения об оборудованных учебных кабинетах</p>
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
                    <table className="min-w-full text-left text-sm">
                        <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                            <tr>
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
                    </table>
                    <div className="h-[calc(100vh-300px)] overflow-scroll">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <tr key={i} itemProp="purposeCab">
                                        <td itemProp="addressCab" className="px-4 py-4">
                                            394087, Воронежская область, г. Воронеж, ул. Мичурина, 1. Здание главного учебного корпуса
                                        </td>
                                        <td itemProp="nameCab" className="px-4 py-4">
                                            Учебная аудитория. Помещение для самостоятельной работы (ауд. 113)
                                        </td>
                                        <td itemProp="osnCab" className="px-4 py-4">
                                            Комплект учебной мебели, демонстрационное оборудование и учебно-наглядные пособия, компьютерная техника с
                                            возможностью подключения к сети Интернет и обеспечением доступа в электронную
                                            информационно-образовательную среду, используемое программное обеспечение MS Windows, Office MS Windows,
                                            DrWeb ES, 7-Zip, MediaPlayer Classic, Яндекс Браузер/ Mozilla Firefox / Internet Explorer, ALT Linux,
                                            LibreOffice
                                        </td>
                                        <td itemProp="ovzCab" className="px-4 py-4">
                                            Двустворчатые распашные двери,стопоры для дверей, тактильная табличка на дверях и стенах аудитории.
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
                    <p className="text-[23px] font-semibold leading-[20px]">Сведения об объектах для проведения практических занятий</p>
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
                    <table className="min-w-full text-left text-sm">
                        <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                            <tr>
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
                    </table>
                    <div className="h-[calc(100vh-300px)] overflow-scroll">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <tr key={i} itemProp="purposePrac">
                                        <td itemProp="addressPrac" className="px-4 py-4">
                                            394087, Воронежская область, г. Воронеж, ул. Мичурина, 1. Здание главного учебного корпуса
                                        </td>
                                        <td itemProp="namePrac" className="px-4 py-4">
                                            Учебная аудитория. Помещение для самостоятельной работы (ауд. 113)
                                        </td>
                                        <td itemProp="osnPrac" className="px-4 py-4">
                                            Комплект учебной мебели, демонстрационное оборудование и учебно-наглядные пособия, компьютерная техника с
                                            возможностью подключения к сети Интернет и обеспечением доступа в электронную
                                            информационно-образовательную среду, используемое программное обеспечение MS Windows, Office MS Windows,
                                            DrWeb ES, 7-Zip, MediaPlayer Classic, Яндекс Браузер/ Mozilla Firefox / Internet Explorer, ALT Linux,
                                            LibreOffice
                                        </td>
                                        <td itemProp="ovzPrac" className="px-4 py-4">
                                            Двустворчатые распашные двери,стопоры для дверей, тактильная табличка на дверях и стенах аудитории.
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
                    <p className="text-[23px] font-semibold leading-[20px]">Сведения о библиотеках</p>
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
                    <table className="min-w-full text-left text-sm">
                        <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
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
                    </table>
                    <div className="h-[calc(100vh-300px)] overflow-scroll">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <tr key={i} itemProp="purposeLibr">
                                        <td itemProp="objName" className="px-4 py-4">
                                            394087, Воронежская область, г. Воронеж, ул. Мичурина, 1. Здание главного учебного корпуса
                                        </td>
                                        <td itemProp="objAddress" className="px-4 py-4">
                                            Учебная аудитория. Помещение для самостоятельной работы (ауд. 113)
                                        </td>
                                        <td itemProp="objSq" className="px-4 py-4">
                                            Комплект учебной мебели, демонстрационное оборудование и учебно-наглядные пособия, компьютерная техника с
                                            возможностью подключения к сети Интернет и обеспечением доступа в электронную
                                            информационно-образовательную среду, используемое программное обеспечение MS Windows, Office MS Windows,
                                            DrWeb ES, 7-Zip, MediaPlayer Classic, Яндекс Браузер/ Mozilla Firefox / Internet Explorer, ALT Linux,
                                            LibreOffice
                                        </td>
                                        <td itemProp="objCnt" className="px-4 py-4">
                                            12412421
                                        </td>
                                        <td itemProp="objOvz" className="px-4 py-4">
                                            Двустворчатые распашные двери,стопоры для дверей, тактильная табличка на дверях и стенах аудитории.
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
                    <p className="text-[23px] font-semibold leading-[20px]">Сведения об объектах спорта</p>
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
                    <table className="min-w-full text-left text-sm">
                        <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
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
                    </table>
                    <div className="h-[calc(100vh-300px)] overflow-scroll">
                        <table className="text-surface min-w-full text-left text-sm font-light">
                            <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <tr key={i} itemProp="purposeSport">
                                        <td itemProp="objName" className="px-4 py-4">
                                            394087, Воронежская область, г. Воронеж, ул. Мичурина, 1. Здание главного учебного корпуса
                                        </td>
                                        <td itemProp="objAddress" className="px-4 py-4">
                                            Учебная аудитория. Помещение для самостоятельной работы (ауд. 113)
                                        </td>
                                        <td itemProp="objSq" className="px-4 py-4">
                                            Комплект учебной мебели, демонстрационное оборудование и учебно-наглядные пособия, компьютерная техника с
                                            возможностью подключения к сети Интернет и обеспечением доступа в электронную
                                            информационно-образовательную среду, используемое программное обеспечение MS Windows, Office MS Windows,
                                            DrWeb ES, 7-Zip, MediaPlayer Classic, Яндекс Браузер/ Mozilla Firefox / Internet Explorer, ALT Linux,
                                            LibreOffice
                                        </td>
                                        <td itemProp="objCnt" className="px-4 py-4">
                                            12412421
                                        </td>
                                        <td itemProp="objOvz" className="px-4 py-4">
                                            Двустворчатые распашные двери,стопоры для дверей, тактильная табличка на дверях и стенах аудитории.
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Информация об обеспечении беспрепятственного доступа в здания образовательной организации
                </p>
                <p itemProp="ovz">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Сведения о средствах обучения и воспитания</p>
                <p itemProp="purposeFacil">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Информация о приспособленных средствах обучения и воспитания</p>
                <p itemProp="purposeFacilOvz">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Сведения о доступе к информационным системам и информационно-телекоммуникационным сетям
                </p>
                <p itemProp="comNet">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Информация о доступе к приспособленным информационным системам и информационнотелекоммуникационным сетям
                </p>
                <p itemProp="comNetOvz">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Наличие в образовательной организации электронной информационно-образовательной среды
                </p>
                <p itemProp="purposeEios">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Количество собственных электронных образовательных и информационных ресурсов
                </p>
                <p itemProp="eoisOwn">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Количество сторонних электронных образовательных и информационных ресурсов
                </p>
                <p itemProp="eoisSide">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Количество баз данных электронного каталога</p>
                <p itemProp="bdec">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Электронный образовательный ресурс</p>
                <p itemProp="erList">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Приспособленный электронный образовательный ресурс</p>
                <p itemProp="erListOvz">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Информация о наличии специальных технических средств обучения коллективного и индивидуального пользования
                </p>
                <p itemProp="techOvz">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Количество общежитий</p>
                <p itemProp="hostelInfo">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Количество интернатов</p>
                <p itemProp="interInfo">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Количество мест в общежитиях</p>
                <p itemProp="hostelNum">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Количество жилых помещений в общежитии, приспособленных для использования инвалидами и лицами с ограниченными возможностями
                    здоровья
                </p>
                <p itemProp="hostelNumOvz">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">Количество мест в интернатах</p>
                <p itemProp="interNum">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Количество жилых помещений в интернате, приспособленных для использования инвалидами и лицами с ограниченными возможностями
                    здоровья
                </p>
                <p itemProp="interNumOvz">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Информация о наличии условий для беспрепятственного доступа в общежитие, интернат
                </p>
                <p itemProp="hostelInterOvz">Отсутствует</p>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px] text-black">
                    Ссылка на информацию о формировании платы за проживание в общежитии
                </p>
                <p itemProp="localActObSt">Отсутствует</p>
            </div>
        </main>
    );
};

export default SvedenObjectsPage;
