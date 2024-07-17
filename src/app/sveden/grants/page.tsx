import { Dot } from "lucide-react";
import Link from "next/link";
import { TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenGrantsPage = () => {
    return (
        <TemplatePage title="Стипендии и меры поддержки виды обучающихся">
            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Локальные нормативные акты, которыми регламентируется наличие и условия предоставления стипендий
                </p>
                <ul className="space-y-2">
                    <li className="text-[18px]">
                        <p itemProp="localAct">Отсутствует</p>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Информация о предоставлении стипендии обучающимся</p>
                <ul className="space-y-2">
                    <li className="text-[18px]">
                        <p itemProp="grant">Отсутствует</p>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Информация о мерах социальной поддержки обучающихся</p>
                <ul className="space-y-2">
                    <li className="text-[18px]">
                        <p itemProp="support">Отсутствует</p>
                    </li>
                </ul>
            </div>

            <div className="space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам
                    образования и науки
                </p>

                <table className="text-surface min-w-full text-left text-sm font-light">
                    <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                        <tr>
                            <th scope="col" className="max-w-10 px-4 py-4 text-white">
                                Наименование показателя
                            </th>
                            <th scope="col" className="max-w-16 px-4 py-4 text-center text-white">
                                Общежития
                            </th>
                            <th scope="col" className="max-w-32 px-4 py-4 text-center text-white">
                                Интернаты
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        <tr>
                            <th scope="row" className="max-w-10 px-4 py-4">
                                Количество общежитий/интернатов
                            </th>
                            <td itemProp="hostelInfo" className="max-w-10 px-4 py-4 text-center">
                                111
                            </td>
                            <td itemProp="interInfo" className="max-w-10 px-4 py-4 text-center">
                                111111
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="max-w-16 px-4 py-4">
                                Количество мест
                            </th>
                            <td itemProp="hostelNum" className="max-w-16 px-4 py-4 text-center">
                                222
                            </td>
                            <td itemProp="interNum" className="max-w-16 px-4 py-4 text-center">
                                222222
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="max-w-32 px-4 py-4">
                                Количество жилых помещений, приспособленных для использования инвалидами и лицами с ограниченными возможностями
                                здоровья
                            </th>
                            <td itemProp="hostelNumOvz" className="max-w-32 px-4 py-4 text-center">
                                333
                            </td>
                            <td itemProp="interNumOvz" className="max-w-32 px-4 py-4 text-center">
                                333333
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                    <Dot className="min-h-6 min-w-6" />
                    <Link href="#" itemProp="localActObSt">
                        информация о формировании платы за проживание в общежитии
                    </Link>
                </div>
            </div>
        </TemplatePage>
    );
};

export default SvedenGrantsPage;
