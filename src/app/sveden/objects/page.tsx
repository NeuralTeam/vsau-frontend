import { Block, CollapsingObjectsTable, DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";
import { IGrantsInfo } from "@/app/sveden/grants/page";
import { IObjectsInfo } from "@/shared/ui/vsau/sveden/collapsing-objects-table";

const SvedenObjectsPage = async () => {
    const responseGrantsDocs = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/documents?page=9`);
    const grantsDocs = await responseGrantsDocs.json();

    const responseGrantsInfo = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/grants`);
    const grantsInfo: IGrantsInfo = await responseGrantsInfo.json();

    const responseDocs = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/documents?page=8`);
    const docs = await responseDocs.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/objects`);
    const objectsInfo: IObjectsInfo = await response.json();
    // TODO: исправить на бэкенде
    objectsInfo.practices = [];
    objectsInfo.libraries = [];
    objectsInfo.sports = [];

    return (
        <TemplatePage title="Материально-техническое обеспечение и оснащённость образовательного процесса. Доступная среда">
            <CollapsingObjectsTable objectsInfo={objectsInfo} />

            <DocumentListBlock
                title="Информация об обеспечении беспрепятственного доступа в здания образовательной организации"
                itemProp="ovz"
                docList={docs[1]}
            />

            <DocumentListBlock title="Сведения о средствах обучения и воспитания" itemProp="purposeFacil" docList={docs[2]} />

            <DocumentListBlock title="Информация о приспособленных средствах обучения и воспитания" itemProp="purposeFacilOvz" docList={docs[3]} />

            <DocumentListBlock
                title="Сведения о доступе к информационным системам и информационно-телекоммуникационным сетям"
                itemProp="comNet"
                docList={docs[4]}
            />

            <DocumentListBlock
                title="Информация о доступе к приспособленным информационным системам и информационнотелекоммуникационным сетям"
                itemProp="comNetOvz"
                docList={docs[5]}
            />

            <DocumentListBlock
                title="Наличие в образовательной организации электронной информационно-образовательной среды"
                itemProp="purposeEios"
                docList={docs[6]}
            />

            <DocumentListBlock title="Электронный образовательный ресурс" itemProp="erList" docList={docs[7]} />

            <DocumentListBlock title="Приспособленный электронный образовательный ресурс" itemProp="erListOvz" docList={docs[8]} />

            <DocumentListBlock
                title="Информация о наличии специальных технических средств обучения коллективного и индивидуального пользования"
                itemProp="techOvz"
                docList={docs[9]}
            />

            <Block title="Информация о наличии электронных образовательных и информационных ресурсов">
                <table className="text-surface min-w-full text-left text-sm font-light">
                    <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                        <tr>
                            <th scope="col" className="max-w-10 px-4 py-4 text-white">
                                Наименование
                            </th>
                            <th scope="col" className="max-w-16 px-4 py-4 text-center text-white">
                                Количество
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        <tr>
                            <th scope="row" className="max-w-10 px-4 py-4">
                                Количество собственных электронных образовательных и информационных ресурсов
                            </th>
                            <td itemProp="eoisOwn" className="max-w-10 px-4 py-4 text-center">
                                111
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="max-w-16 px-4 py-4">
                                Количество сторонних электронных образовательных и информационных ресурсов
                            </th>
                            <td itemProp="eoisSide" className="max-w-16 px-4 py-4 text-center">
                                222
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="max-w-32 px-4 py-4">
                                Количество баз данных электронного каталога
                            </th>
                            <td itemProp="bdec" className="max-w-32 px-4 py-4 text-center">
                                333
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Block>

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

            <DocumentListBlock
                title="Информация о наличии условий для беспрепятственного доступа в общежитие, интернат"
                itemProp="hostelInterOvz"
                docList={docs[10]}
            />

            <DocumentListBlock title="Информация о формировании платы за проживание в общежитии" itemProp="localActObSt" docList={grantsDocs[4]} />
        </TemplatePage>
    );
};

export default SvedenObjectsPage;
