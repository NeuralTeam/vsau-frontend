import Link from "next/link";
import { Dot } from "lucide-react";

const SvedenDocumentPage = () => {
    return (
        <main itemProp="copy" className="space-y-5 pr-[70px] pt-[50px]">
            <h1>Документы</h1>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Устав образовательной организации</p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="ustavDocLink">
                            Устав ФГБОУ ВО Воронежский ГАУ
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Локальных нормативных актов, предусмотренных частью 2 статьи 30 настоящего федерального закона, правил внутреннего распорядка
                    обучающихся, правил внутреннего трудового распорядка, коллективного договора
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="localActStud">
                            Правила внутреннего распорядка обучающихся
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="localActOrder">
                            Правила внутреннего трудового распорядка
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="localActCollec">
                            Коллективный договор
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Отчет о результатах самообследования</p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="reportEduDocLink">
                            Отчёт о результатах самообследования
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="reportEduDocLink">
                            Показатели деятельности образовательной организации высшего образования, подлежащей самообследованию
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="reportEduDocLink">
                            Порядок проведения самообследования образовательной организацией
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
                        <Link href="#" itemProp="prescriptionDocLink">
                            Предписание об устранении выявленных нарушений №07-55-123/18-3 от 25.08.2017 г.
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="prescriptionDocLink">
                            Приказ №311 от 28.08.2017 г.
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="prescriptionDocLink">
                            План мероприятий по устранению нарушений, несоответствий и причин, способствующих их совершению, указанных в Акте проверки
                            Федеральной службой по надзору в сфере образования и науки юридического лица от 25.08.2017 г.№271/3/К и Предписании
                            Федеральной службы по надзору в сфере образования и науки от 25.08.2017 г. № 07-55-123/18-3
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="prescriptionDocLink">
                            Отчет об устранении нарушений, указанных в Предписании об устранении выявленных нарушений Федеральной службы по надзору в
                            сфере образования и науки от 25.08.2017 №07-55-123/18-3
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="prescriptionDocLink">
                            Отчет об устранении несоответствий, указанных в Акте проверки Федеральной службой по надзору в сфере образования и науки
                            юридического лица от 25.08.2017 №271/3/К
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Локальные нормативные акты образовательной организации по основным вопросам организации и осуществления образовательной
                    деятельности
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="priemDocLink">
                            Правила приема на обучение по образовательным программам высшего образования – программам бакалавриата, программам
                            специалитета, программам магистратуры в ФГБОУ ВО Воронежский ГАУ на 2024/2025 учебный год
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="priemDocLink">
                            Правила приема на 2024-2025 учебный год на обучение по образовательным программам высшего образования – программам
                            подготовки научных и научно-педагогических кадров в аспирантуре
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="priemDocLink">
                            Правила приема на 2023-2024 учебный год на обучение по образовательным программам среднего профессионального образования
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="priemDocLink">
                            Особенности приема на обучение в федеральное государственное бюджетное образовательное учреждение высшего образования
                            «Воронежский государственный аграрный университет имени императора Петра I» осуществляющее образовательную деятельность,
                            по программам бакалавриата, программам специалитета, программам магистратуры и программам подготовки научно-педагогических
                            кадров в аспирантуре, предусмотренные частями 7 и 8 статьи 5 Федерального закона от 17 февраля 2023 г. N° 19-Ф3 «Об
                            особенностях правового регулирования отношений в сферах образования и науки в связи с принятием в Российскую Федерацию
                            Донецкой Народной Республики, Луганской Народной Республики, Запорожской области, Херсонской области и образованием в
                            составе Российской Федерации новых субъектов – Донецкой Народной Республики, Луганской Народной Республики, Запорожской
                            области, Херсонской области и о внесении изменений в отдельные законодательные акты Российской Федерации»
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="priemDocLink">
                            Особенности приема на обучение в федеральное государственное бюджетное образовательное учреждение высшего образования
                            «Воронежский государственный аграрный университет имени императора Петра I» по образовательным программам высшего
                            образования, имеющим государственную аккредитацию, программам подготовки научных и научно-педагогических кадров в
                            аспирантуре в 2023 году
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="priemDocLink">
                            Особенности приема на обучение по программам бакалавриата, программам специалитета лиц, обучавшихся в образовательных
                            организациях, расположенных на приграничных территориях Российской Федерации
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="modeDocLink">
                            Режим занятий обучающихся
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="tekKontrolDocLink">
                            Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="perevodDocLink">
                            Порядок и основания перевода, отчисления и восстановления обучающихся
                        </Link>
                    </li>
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="vozDocLink">
                            Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и
                            обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default SvedenDocumentPage;
