import { TeachingStaffBlock, TemplatePage } from "@/shared/ui/vsau/sveden";
import { ITeachingStaffList } from "@/shared/ui/vsau/sveden/types";

const SvedenEmployeesPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/employees`);
    const staffList: ITeachingStaffList[] = await response.json();

    return (
        <TemplatePage title="Педагогический состав">
            <TeachingStaffBlock staffList={staffList} />
        </TemplatePage>
    );
};

export default SvedenEmployeesPage;
