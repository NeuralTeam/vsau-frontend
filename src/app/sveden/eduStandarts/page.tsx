import { DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenEduStandartsPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/documents?page=5`);
    const data = await response.json();

    return (
        <TemplatePage title="Образовательные стандарты и требования">
            <DocumentListBlock
                title="Информация о применяемых федеральных государственных образовательных стандартах"
                itemProp="eduFedDoc"
                docList={data[1]}
            />

            <DocumentListBlock title="Информация об утвержденных образовательных стандартах" itemProp="eduStandartDoc" docList={data[2]} />

            <DocumentListBlock title="Информация о применяемых федеральных государственных требованиях" itemProp="eduFedTreb" docList={data[3]} />

            <DocumentListBlock title="Информация о самостоятельно устанавливаемых требованиях" itemProp="eduStandartTreb" docList={data[4]} />
        </TemplatePage>
    );
};

export default SvedenEduStandartsPage;
