import { DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenEduStandartsPage = () => {
    return (
        <TemplatePage title="Образовательные стандарты и требования">
            <DocumentListBlock
                title="Информация о применяемых федеральных государственных образовательных стандартах"
                itemProp="eduFedDoc"
                docList={[]}
            />

            <DocumentListBlock title="Информация об утвержденных образовательных стандартах" itemProp="eduStandartDoc" docList={[]} />

            <DocumentListBlock title="Информация о применяемых федеральных государственных требованиях" itemProp="eduFedTreb" docList={[]} />

            <DocumentListBlock title="Информация о самостоятельно устанавливаемых требованиях" itemProp="eduStandartTreb" docList={[]} />
        </TemplatePage>
    );
};

export default SvedenEduStandartsPage;
