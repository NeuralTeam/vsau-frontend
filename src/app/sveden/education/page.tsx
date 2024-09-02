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

    if (ip?.startsWith("80.250.167") || ip == "194.177.20.47" || ua == "ais.monitoring.bot") return <main></main>;

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
