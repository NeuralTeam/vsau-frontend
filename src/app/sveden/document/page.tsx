import Link from "next/link";
import { Dot } from "lucide-react";

const SvedenDocumentPage = () => {
    return (
        <main className="space-y-5 pr-[70px] pt-[50px]">
            <h1>Документы</h1>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Устав образовательной организации</p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">Устав ФГБОУ ВО Воронежский ГАУ</Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Информация о лицензии на осуществлении образовательной деятельности (с приложениями)
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">Выписка из реестра лицензий на осуществление образовательной деятельности от 22.01.2024</Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Свидетельство о государственной аккредитации (с приложениями)</p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">Свидетельство о государственной аккредитации</Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">
                            Выписка из государственной информационной системы «Реестр организаций, осуществляющих образовательную деятельность по
                            имеющим государственную аккредитацию образовательным программам» (по состоянию на 10:49 «05» октября 2023 г.)
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчеты об исполнении таких предписаний
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">Предписание об устранении выявленных нарушений №07-55-123/18-3 от 25.08.2017 г.</Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">Приказ №311 от 28.08.2017 г.</Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">
                            План мероприятий по устранению нарушений, несоответствий и причин, способствующих их совершению, указанных в Акте проверки
                            Федеральной службой по надзору в сфере образования и науки юридического лица от 25.08.2017 г.№271/3/К и Предписании
                            Федеральной службы по надзору в сфере образования и науки от 25.08.2017 г. № 07-55-123/18-3
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">
                            Отчет об устранении нарушений, указанных в Предписании об устранении выявленных нарушений Федеральной службы по надзору в
                            сфере образования и науки от 25.08.2017 №07-55-123/18-3
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">
                            Отчет об устранении несоответствий, указанных в Акте проверки Федеральной службой по надзору в сфере образования и науки
                            юридического лица от 25.08.2017 №271/3/К
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Отчет о результатах самообследования</p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">Отчет о результатах самообследования</Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">Показатели деятельности образовательной организации высшего образования, подлежащей самообследованию</Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#">Порядок проведения самообследования образовательной организацией</Link>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default SvedenDocumentPage;
