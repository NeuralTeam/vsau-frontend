import { Dot } from "lucide-react";
import Link from "next/link";
import { Block, DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenGrantsPage = () => {
    return (
        <TemplatePage title="Стипендии и меры поддержки виды обучающихся">
            <DocumentListBlock
                title="Локальные нормативные акты, которыми регламентируется наличие и условия предоставления стипендий"
                itemProp="localAct"
                docList={[]}
            />

            <DocumentListBlock title="Информация о предоставлении стипендии обучающимся" itemProp="grant" docList={[]} />

            <DocumentListBlock title="Информация о мерах социальной поддержки обучающихся" itemProp="support" docList={[]} />

            <Block
                title="Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам
                    образования и науки"
            >
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
            </Block>
        </TemplatePage>
    );
};

export default SvedenGrantsPage;
