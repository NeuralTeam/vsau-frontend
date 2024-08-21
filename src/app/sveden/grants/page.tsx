import { Block, DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

export interface IGrantsInfo {
    hostel_info: number;
    hostel_num: number;
    hostel_num_ovz: number;
    inter_info: number;
    inter_num: number;
    inter_num_ovz: number;
}

const SvedenGrantsPage = async () => {
    const responseDocs = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/documents?page=9`);
    const docs = await responseDocs.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/grants`);
    const grantsInfo: IGrantsInfo = await response.json();

    return (
        <TemplatePage title="Стипендии и меры поддержки виды обучающихся">
            <DocumentListBlock
                title="Локальные нормативные акты, которыми регламентируется наличие и условия предоставления стипендий"
                itemProp="localAct"
                docList={docs[1]}
            />

            <DocumentListBlock title="Информация о предоставлении стипендии обучающимся" itemProp="grant" docList={docs[2]} />

            <DocumentListBlock title="Информация о мерах социальной поддержки обучающихся" itemProp="support" docList={docs[3]} />

            <Block title="Сведения об общежитии, интернате, количестве жилых помещений в общежитии, интернате для иногородних обучающихся">
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
                                {grantsInfo.hostel_info}
                            </td>
                            <td itemProp="interInfo" className="max-w-10 px-4 py-4 text-center">
                                {grantsInfo.inter_info}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="max-w-16 px-4 py-4">
                                Количество мест
                            </th>
                            <td itemProp="hostelNum" className="max-w-16 px-4 py-4 text-center">
                                {grantsInfo.hostel_num}
                            </td>
                            <td itemProp="interNum" className="max-w-16 px-4 py-4 text-center">
                                {grantsInfo.inter_num}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="max-w-32 px-4 py-4">
                                Количество жилых помещений, приспособленных для использования инвалидами и лицами с ограниченными возможностями
                                здоровья
                            </th>
                            <td itemProp="hostelNumOvz" className="max-w-32 px-4 py-4 text-center">
                                {grantsInfo.hostel_num_ovz}
                            </td>
                            <td itemProp="interNumOvz" className="max-w-32 px-4 py-4 text-center">
                                {grantsInfo.inter_num_ovz}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Block>

            <DocumentListBlock title="Информация о формировании платы за проживание в общежитии" itemProp="localActObSt" docList={docs[4]} />
        </TemplatePage>
    );
};

export default SvedenGrantsPage;
