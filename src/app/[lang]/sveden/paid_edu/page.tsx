import { DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenPaidEduPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/documents?page=10`);
    const data = await response.json();

    return (
        <TemplatePage title="Платные образовательные услуги">
            <DocumentListBlock title="Порядок оказания платных образовательных услуг" itemProp="paidEdu" docList={data[1]} />

            <DocumentListBlock title="Образец договора об оказании платных образовательных услуг" itemProp="paidDog" docList={data[2]} />

            <DocumentListBlock
                title="Документ об утверждении стоимости обучения по каждой образовательной программе"
                itemProp="paidSt"
                docList={data[3]}
            />

            <DocumentListBlock
                title="Документ об установлении размера платы, взимаемой с родителей (законных представителей) за присмотр и уход за детьми, осваивающими образовательные программы дошкольного образования в организациях, осуществляющих образовательную деятельность, за содержание детей в образовательной организации, реализующей образовательные программы начального общего, основного общего или среднего общего образования, если в такой образовательной организации созданы условия для проживания обучающихся в интернате, либо за осуществление присмотра и ухода за детьми в группах продленного дня в образовательной организации, реализующей образовательные программы начального общего, основного общего или среднего общего образования"
                itemProp="paidParents"
                docList={data[4]}
            />
        </TemplatePage>
    );
};

export default SvedenPaidEduPage;
