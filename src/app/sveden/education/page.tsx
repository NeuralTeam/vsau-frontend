import { DocumentListBlock, TemplatePage, EducationTables } from "@/shared/ui/vsau/sveden";
import { IEducation } from "@/shared/ui/vsau/sveden/education-tables";
import { headers } from "next/headers";

const SvedenEducationPage = async () => {
    const responseDocs = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/documents?page=4`);
    const docs = await responseDocs.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/education`, { cache: "no-cache" });
    const tableData: IEducation = await response.json();

    const headersList = headers();
    const ip = headersList.get("X-Real-IP");
    const ua = headersList.get("User-Agent");

    if (ip?.startsWith("80.250.167") || ip == "194.177.20.47" || ua == "ais.monitoring.bot")
        return (
            <main>
                <table>
                    <tbody>
                        {tableData.edu_accred.map((el) => (
                            <tr key={el.id} itemProp="eduAccred">
                                <td itemProp="eduCode">{el.code}</td>
                                <td itemProp="eduName">{el.name}</td>
                                <td itemProp="eduProf">{el.prof}</td>
                                <td itemProp="eduLevel">{el.level}</td>
                                <td itemProp="eduForm">{el.form}</td>
                                <td itemProp="learningTerm">{el.learning_term}</td>
                                <td itemProp="dateEnd">{el.date_end}</td>
                                <td itemProp="eduPred">{el.pred.title}</td>
                                <td itemProp="eduPrac">
                                    <ul>
                                        {el.prac.map((p) => (
                                            <li key={p.title}>{p.title}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="eduEl">{el.el}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableData.edu_po_accred.map((el) => (
                            <tr key={el.id} itemProp="eduPOAccred">
                                <td itemProp="eduCode">{el.code}</td>
                                <td itemProp="eduName">{el.name}</td>
                                <td itemProp="eduLevel">{el.level}</td>
                                <td itemProp="eduProf">{el.prof}</td>
                                <td itemProp="orgName">{el.org_name}</td>
                                <td itemProp="dateEnd">{el.date_end}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableData.edu_o_accred.map((el) => (
                            <tr key={el.id} itemProp="eduOAccred">
                                <td itemProp="eduCode">{el.code}</td>
                                <td itemProp="eduName">{el.name}</td>
                                <td itemProp="eduLevel">{el.level}</td>
                                <td itemProp="eduProf">{el.prof}</td>
                                <td itemProp="orgName">{el.org_name}</td>
                                <td itemProp="dateEnd">{el.date_end}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableData.edu_op.map((el) => (
                            <tr key={el.id} itemProp="eduOp">
                                <td itemProp="eduCode">{el.code}</td>
                                <td itemProp="eduName">{el.name}</td>
                                <td itemProp="eduLevel">{el.level}</td>
                                <td itemProp="eduProf">{el.prof}</td>
                                <td itemProp="eduForm">{el.form}</td>
                                <td itemProp="opMain">
                                    <ul>
                                        {el.main.map((p) => (
                                            <li key={p.title}>{p.title}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="educationPlan">
                                    <ul>
                                        {el.plan.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="educationRpd">
                                    <ul>
                                        {el.rpd.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="educationShedule">
                                    <ul>
                                        {el.shedule.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="eduPr">
                                    <ul>
                                        {el.pr.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="methodology">
                                    <ul>
                                        {el.methodology.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableData.edu_ad_op.map((el) => (
                            <tr key={el.id} itemProp="eduAdOp">
                                <td itemProp="eduCode">{el.code}</td>
                                <td itemProp="eduName">{el.name}</td>
                                <td itemProp="eduLevel">{el.level}</td>
                                <td itemProp="eduProf">{el.prof}</td>
                                <td itemProp="eduForm">{el.form}</td>
                                <td itemProp="opMain">
                                    <ul>
                                        {el.main.map((p) => (
                                            <li key={p.title}>{p.title}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="educationPlan">
                                    <ul>
                                        {el.plan.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="educationRpd">
                                    <ul>
                                        {el.rpd.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="educationShedule">
                                    <ul>
                                        {el.shedule.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="eduPr">
                                    <ul>
                                        {el.pr.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td itemProp="methodology">
                                    <ul>
                                        {el.methodology.map((p) => (
                                            <li key={p.title}>
                                                <a href={p.link !== null ? p.link : "#"}>{p.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableData.edu_nir.map((el) => (
                            <tr key={el.id} itemProp="eduNir">
                                <td itemProp="eduCode">{el.code}</td>
                                <td itemProp="eduName">{el.name}</td>
                                <td itemProp="perechenNir">{el.perechen_nir}</td>
                                <td itemProp="eduProf">{el.prof}</td>
                                <td itemProp="eduLevel">{el.level}</td>
                                <td itemProp="napravNir">{el.naprav_nir}</td>
                                <td itemProp="resultNir">{el.result_nir}</td>
                                <td itemProp="baseNir">{el.base_nir}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableData.graduate_job.map((el) => (
                            <tr key={el.id} itemProp="graduateJob">
                                <td itemProp="eduCode">{el.code}</td>
                                <td itemProp="eduName">{el.name}</td>
                                <td itemProp="eduProf">{el.prof}</td>
                                <td itemProp="v1">{el.v1}</td>
                                <td itemProp="t1">{el.t1}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <ul>
                    <li itemProp="languageEl">{docs[1]}</li>
                    <li itemProp="eduChislenEl">{docs[2]}</li>
                    <li itemProp="eduPriemEl">{docs[3]}</li>
                    <li itemProp="eduPerevodEl">{docs[4]}</li>
                </ul>
            </main>
        );

    return (
        <TemplatePage title="Образование">
            <EducationTables tableData={tableData} />

            <DocumentListBlock
                title="Информация о языках, на которых осуществляется образование (обучение)"
                itemProp="languageEl"
                docList={docs[1]}
            />

            <DocumentListBlock
                title="Информация о численности обучающихся по реализуемым образовательным программам за счет бюджетных ассигнований федерального
                        бюджета, бюджетов субъектов Российской Федерации, местных бюджетов и по договорам об образовании за счет средств физических и
                        (или) юридических лиц, в том числе информация о численности обучающихся, являющихся иностранными гражданами, по каждой
                        образовательной программе и каждой профессии, специальности, в том числе научной, направлению подготовки или укрупненной
                        группе профессий, специальностей и направлений подготовки (для профессиональных образовательных программ)"
                itemProp="eduChislenEl"
                docList={docs[2]}
            />

            <DocumentListBlock
                title="Информация о результатах приема по каждой профессии, специальности среднего профессионального образования (при наличии
                        вступительных испытаний), каждому направлению подготовки или специальности высшего образования, каждой научной специальности с
                        различными условиями приема (на места, финансируемые за счет бюджетных ассигнований федерального бюджета, бюджетов субъектов
                        Российской Федерации, местных бюджетов, по договорам об образовании за счет средств физических и (или) юридических лиц) с
                        указанием средней суммы набранных баллов по всем вступительным испытаниям"
                itemProp="eduPriemEl"
                docList={docs[3]}
            />

            <DocumentListBlock title="Информация о результатах перевода, восстановления и отчисления" itemProp="eduPerevodEl" docList={docs[4]} />
        </TemplatePage>
    );
};

export default SvedenEducationPage;
