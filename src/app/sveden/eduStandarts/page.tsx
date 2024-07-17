import { DocumentListBlock, TemplatePage } from "@/shared/ui/vsau/sveden";

const SvedenEduStandartsPage = () => {
    return (
        <TemplatePage title="Образовательные стандарты и требования">
            <DocumentListBlock title="Информация о применяемых федеральных государственных образовательных стандартах" itemProp="eduFedDoc" />

            <DocumentListBlock title="Информация об утвержденных образовательных стандартах" itemProp="eduStandartDoc" />

            <DocumentListBlock title="Информация о применяемых федеральных государственных требованиях" itemProp="eduFedTreb" />

            <DocumentListBlock title="Информация о самостоятельно устанавливаемых требованиях" itemProp="eduStandartTreb" />
        </TemplatePage>
    );
};

export default SvedenEduStandartsPage;
