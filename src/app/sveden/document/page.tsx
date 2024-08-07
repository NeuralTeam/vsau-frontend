import { DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenDocumentPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/documents?page=3`);
    const data = await response.json();

    return (
        <TemplatePage title="Документы">
            <DocumentListBlock title="Устав образовательной организации" itemProp="ustavDocLink" docList={data[1]} />

            <DocumentListBlock title="Правила внутреннего распорядка обучающихся" itemProp="localActStud" docList={data[2]} />

            <DocumentListBlock title="Правила внутреннего трудового распорядка" itemProp="localActOrder" docList={data[3]} />

            <DocumentListBlock title="Коллективный договор" itemProp="localActCollec" docList={data[4]} />

            <DocumentListBlock title="Отчет о результатах самообследования" itemProp="reportEduDocLink" docList={data[5]} />

            <DocumentListBlock
                title="Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчеты об исполнении таких предписаний"
                itemProp="prescriptionDocLink"
                docList={data[6]}
            />

            <DocumentListBlock
                title="Локальные нормативные акты образовательной организации по основным вопросам организации и осуществления образовательной
                    деятельности"
                itemProp="priemDocLink"
                docList={data[7]}
            />

            <DocumentListBlock
                title="Локальные нормативные акты образовательной организации по режиму занятий обучающихся"
                itemProp="modeDocLink"
                docList={data[8]}
            />

            <DocumentListBlock
                title="Локальные нормативные акты образовательной организации по формам, периодичности и порядку текущего контроля успеваемости и промежуточной аттестации обучающихся"
                itemProp="tekKontrolDocLink"
                docList={data[9]}
            />

            <DocumentListBlock
                title="Локальные нормативные акты образовательной организации про порядок и основания перевода, отчисления и восстановления обучающихся"
                itemProp="perevodDocLink"
                docList={data[10]}
            />

            <DocumentListBlock
                title="Локальные нормативные акты образовательной организации про порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся"
                itemProp="vozDocLink"
                docList={data[11]}
            />
        </TemplatePage>
    );
};

export default SvedenDocumentPage;
