const SvedenVacantPage = () => {
    return (
        <main className="space-y-5 pr-[70px] pt-[50px]">
            <h1>Вакантные места для приема (перевода) обучающихся</h1>

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
                        {Array.from({ length: 3 }).map((_, i) => (
                            <tr key={i} itemProp="internationalDog">
                                <td itemProp="eduCode" className="px-4 py-4"></td>
                                <td itemProp="eduName" className="px-4 py-4"></td>
                                <td itemProp="eduLevel" className="px-4 py-4"></td>
                                <td itemProp="eduProf" className="px-4 py-4"></td>
                                <td itemProp="eduCourse" className="px-4 py-4"></td>
                                <td itemProp="eduForm" className="px-4 py-4"></td>
                                <td itemProp="numberBFVacant" className="px-4 py-4"></td>
                                <td itemProp="numberBRVacant" className="px-4 py-4"></td>
                                <td itemProp="numberBMVacant" className="px-4 py-4"></td>
                                <td itemProp="numberPVacant" className="px-4 py-4"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default SvedenVacantPage;
