import { Dot } from "lucide-react";
import Link from "next/link";

const SvedenBudgetPage = () => {
    return (
        <main itemProp="copy" className="space-y-8 pr-[70px] pt-[50px]">
            <h1>Финансово-хозяйственная деятельность</h1>

            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Сведения об объеме образовательной деятельности</p>
                <table className="text-surface min-w-full text-left text-sm font-light">
                    <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                        <tr>
                            <th scope="col" className="px-4 py-4 text-center text-white">
                                За счёт бюджетных ассигнований федерального бюджета (тыс. руб.)
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-white">
                                За счёт бюджетов субъектов Российской Федерации (тыс. руб.)
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-white">
                                За счёт местных бюджетов (тыс. руб.)
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-white">
                                По договорам об оказании платных образовательных услуг (тыс. руб.)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <tr key={i}>
                                <td itemProp="finBFVolume" className="px-4 py-4">
                                    340932
                                </td>
                                <td itemProp="finBRVolume" className="px-4 py-4">
                                    0
                                </td>
                                <td itemProp="finBMVolume" className="px-4 py-4">
                                    0
                                </td>
                                <td itemProp="finPVolume" className="px-4 py-4">
                                    172676.1
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Сведения о поступлении финансовых и материальных средств и об их расходовании
                </p>
                <table className="text-surface min-w-full text-left text-sm font-light">
                    <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                        <tr>
                            <th scope="col" className="px-4 py-4 text-center text-white">
                                Год
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-white">
                                Поступившие финансовые и материальные средства
                            </th>
                            <th scope="col" className="px-4 py-4 text-center text-white">
                                Расходованные финансовые и материальные средств
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <tr itemProp="volume" key={i}>
                                <td itemProp="finYear" className="px-4 py-4">
                                    2021
                                </td>
                                <td itemProp="finPost" className="px-4 py-4">
                                    983279.91
                                </td>
                                <td itemProp="finRas" className="px-4 py-4">
                                    938021.31
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Утвержденный план финансово-хозяйственной деятельности образовательной организации или бюджетные сметы образовательной организации
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="finPlanDocLink">
                            Приказ №578 от 29.12.2021 “О внесении изменений и дополнений в приказ от 29.12.2017 №524 “Об утверждении учетной политики”
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default SvedenBudgetPage;
