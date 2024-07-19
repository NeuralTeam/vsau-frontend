import { TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenInterPage = () => {
    return (
        <TemplatePage title="Международное сотрудничество">
            <div className="space-y-4 rounded-[10px] bg-white px-8 py-4">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам
                    образования и науки
                </p>
                <table className="text-surface min-w-full text-left text-sm font-light">
                    <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                        <tr>
                            <th scope="col" className="max-w-10 px-4 py-4 text-white">
                                Название государства
                            </th>
                            <th scope="col" className="max-w-16 px-4 py-4 text-white">
                                Наименование организации
                            </th>
                            <th scope="col" className="max-w-32 px-4 py-4 text-white">
                                Реквизиты договора
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <tr key={i} itemProp="internationalDog">
                                <td itemProp="stateName" className="max-w-10 px-4 py-4">
                                    Республика Беларусь
                                </td>
                                <td itemProp="orgName" className="max-w-16 px-4 py-4">
                                    УО «Белорусский государственный аграрный технический университет»
                                </td>
                                <td itemProp="dogReg" className="max-w-32 px-4 py-4">
                                    <ul>
                                        <li>Соглашение о сотрудничестве в области науки, образования и дополнительного образования взрослых</li>
                                        <li>Дата: ????</li>
                                        <li>Номер: № 81-060100</li>
                                        <li>Срок действия: 28.11.2023</li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </TemplatePage>
    );
};

export default SvedenInterPage;
