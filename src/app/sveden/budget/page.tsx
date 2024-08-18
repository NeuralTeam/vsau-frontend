import { DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

interface IFinInfo {
    name: string;
    bf: number;
    br: number;
    bm: number;
    pv: number;
}

interface IVolumeInfo {
    year: number;
    income: number;
    ras: number;
    fin_plan_doc: string;
}

interface IFinancesInfo {
    fin_info: IFinInfo[];
    volume_info: IVolumeInfo[];
}

const SvedenBudgetPage = async () => {
    const responseDocs = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/documents?page=11`);
    const docs = await responseDocs.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/finances`);
    const financesInfo: IFinancesInfo = await response.json();

    return (
        <TemplatePage title="Финансово-хозяйственная деятельность">
            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Сведения об объеме образовательной деятельности</p>
                <table className="text-surface min-w-full text-left text-sm font-light">
                    <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                        <tr>
                            <th scope="col" className="px-4 py-4 text-white">
                                Наименование
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                За счёт бюджетных ассигнований федерального бюджета (тыс. руб.)
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                За счёт бюджетов субъектов Российской Федерации (тыс. руб.)
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                За счёт местных бюджетов (тыс. руб.)
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                По договорам об оказании платных образовательных услуг (тыс. руб.)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        {financesInfo.fin_info.map((el) => (
                            <tr key={el.name}>
                                <td className="px-4 py-4">{el.name}</td>
                                <td itemProp="finBFVolume" className="px-4 py-4">
                                    {el.bf}
                                </td>
                                <td itemProp="finBRVolume" className="px-4 py-4">
                                    {el.br}
                                </td>
                                <td itemProp="finBMVolume" className="px-4 py-4">
                                    {el.bm}
                                </td>
                                <td itemProp="finPVolume" className="px-4 py-4">
                                    {el.pv}
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
                            <th scope="col" className="px-4 py-4 text-white">
                                Год
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Поступившие финансовые и материальные средства
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Расходованные финансовые и материальные средств
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        {financesInfo.volume_info.map((el) => (
                            <tr itemProp="volume" key={el.year}>
                                <td itemProp="finYear" className="px-4 py-4">
                                    {el.year}
                                </td>
                                <td itemProp="finPost" className="px-4 py-4">
                                    {el.income}
                                </td>
                                <td itemProp="finRas" className="px-4 py-4">
                                    {el.ras}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <DocumentListBlock
                title="Утвержденный план финансово-хозяйственной деятельности образовательной организации или бюджетные сметы образовательной организации"
                itemProp="finPlanDocLink"
                docList={docs[1]}
            />
        </TemplatePage>
    );
};

export default SvedenBudgetPage;
