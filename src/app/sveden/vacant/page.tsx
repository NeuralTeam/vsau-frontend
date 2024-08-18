import { TemplatePage } from "@/shared/ui/vsau/sveden";

interface IVacants {
    id: number;
    code: string;
    name: string;
    level: string | null;
    prof: string | null;
    course: string | null;
    form: string;
    bf: number;
    br: number;
    bm: number;
    pv: number;
}

const SvedenVacantPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/vacants`);
    const vacants: IVacants[] = await response.json();

    return (
        <TemplatePage title="Вакантные места для приема (перевода) обучающихся">
            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Информация о количестве вакантных мест для приема (перевода) обучающихся</p>
                <table className="text-surface min-w-full text-left text-sm font-light">
                    <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                        <tr>
                            <th scope="col" className="px-4 py-4 text-white">
                                Код
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Уровень образования
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Образовательная программа, направленность, профиль, шифр и наименование научной специальности
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Курс
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Форма обучения
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Количество вакантных мест для приёма (перевода) за счёт бюджетных ассигнований федерального бюджета
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Количество вакантных мест для приёма (перевода) за счёт бюджетных ассигнований бюджетов субъекта Российской Федерации
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Количество вакантных мест для приёма (перевода) за счёт бюджетных ассигнований местных бюджетов
                            </th>
                            <th scope="col" className="px-4 py-4 text-white">
                                Количество вакантных мест для приёма (перевода) за счёт средств физических и (или) юридических лиц
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        {vacants.map((el) => (
                            <tr key={el.id} itemProp="vacant">
                                <td itemProp="eduCode" className="px-4 py-4">
                                    {el.code}
                                </td>
                                <td itemProp="eduName" className="px-4 py-4">
                                    {el.name}
                                </td>
                                <td itemProp="eduLevel" className="px-4 py-4">
                                    {el.level}
                                </td>
                                <td itemProp="eduProf" className="px-4 py-4">
                                    {el.prof}
                                </td>
                                <td itemProp="eduCourse" className="px-4 py-4">
                                    {el.course}
                                </td>
                                <td itemProp="eduForm" className="px-4 py-4">
                                    {el.form}
                                </td>
                                <td itemProp="numberBFVacant" className="px-4 py-4">
                                    {el.bf}
                                </td>
                                <td itemProp="numberBRVacant" className="px-4 py-4">
                                    {el.br}
                                </td>
                                <td itemProp="numberBMVacant" className="px-4 py-4">
                                    {el.bm}
                                </td>
                                <td itemProp="numberPVacant" className="px-4 py-4">
                                    {el.pv}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </TemplatePage>
    );
};

export default SvedenVacantPage;
