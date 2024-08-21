import { CollapsingCateringTable, TemplatePage } from "@/shared/ui/vsau/sveden";
import { ICateringInfo } from "@/shared/ui/vsau/sveden/collapsing-catering-table";

const SvedenCateringPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/catering`);
    const cateringInfo: ICateringInfo = await response.json();

    return (
        <TemplatePage title="Организация питания в образовательной организации">
            <CollapsingCateringTable cateringInfo={cateringInfo} />
        </TemplatePage>
    );
};

export default SvedenCateringPage;
