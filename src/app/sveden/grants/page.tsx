import { Block, DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

export interface IGrantsInfo {
    hostel_info: number | null;
    hostel_num: number | null;
    hostel_num_ovz: number | null;
    inter_info: number | null;
    inter_num: number | null;
    inter_num_ovz: number | null;
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
                                {grantsInfo.hostel_info !== null ? grantsInfo.hostel_info : "Отсутствует"}
                            </td>
                            <td itemProp="interInfo" className="max-w-10 px-4 py-4 text-center">
                                {grantsInfo.inter_info !== null ? grantsInfo.inter_info : "Отсутствует"}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="max-w-16 px-4 py-4">
                                Количество мест
                            </th>
                            <td itemProp="hostelNum" className="max-w-16 px-4 py-4 text-center">
                                {grantsInfo.hostel_num !== null ? grantsInfo.hostel_num : "Отсутствует"}
                            </td>
                            <td itemProp="interNum" className="max-w-16 px-4 py-4 text-center">
                                {grantsInfo.inter_num !== null ? grantsInfo.inter_num : "Отсутствует"}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="max-w-32 px-4 py-4">
                                Количество жилых помещений, приспособленных для использования инвалидами и лицами с ограниченными возможностями
                                здоровья
                            </th>
                            <td itemProp="hostelNumOvz" className="max-w-32 px-4 py-4 text-center">
                                {grantsInfo.hostel_num_ovz !== null ? grantsInfo.hostel_num_ovz : "Отсутствует"}
                            </td>
                            <td itemProp="interNumOvz" className="max-w-32 px-4 py-4 text-center">
                                {grantsInfo.inter_num_ovz !== null ? grantsInfo.inter_num_ovz : "Отсутствует"}
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
