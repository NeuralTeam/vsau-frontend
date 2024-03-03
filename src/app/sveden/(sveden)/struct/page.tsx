import Link from "next/link";

const StructPage = () => {
    return (
        <>
            <h1>Структурные подразделения</h1>
            <details>
                <summary>Развернуть</summary>
                <table cellPadding={16}>
                    <thead className="border">
                        <tr>
                            <th>Наименование</th>
                            <th>ФИО руководителя</th>
                            <th>Должность руководителя</th>
                            <th>Адрес</th>
                            <th>Официальный сайт</th>
                            <th>Электронная почта</th>
                            <th>Положение</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 50 }).map((_, i) => (
                            <tr key={i} itemProp="structOrgUprav" className="border">
                                <td itemProp="name">Проректор по цифровой трансформации</td>
                                <td itemProp="fio">Ворохобин Андрей Викторович</td>
                                <td itemProp="post">Проректор по цифровой трансформации</td>
                                <td itemProp="addressStr">Главный корпус, ауд. 110</td>
                                <td itemProp="site" align="center">
                                    Отсутствует
                                </td>
                                <td itemProp="email" align="center">
                                    <Link href="mailto:dogruzka@gmail.com">dogruzka@gmail.com</Link>
                                </td>
                                <td itemProp="divisionClauseDocLink" align="center">
                                    <Link href="/sveden/struct">Файл</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </details>
        </>
    );
};

export default StructPage;
