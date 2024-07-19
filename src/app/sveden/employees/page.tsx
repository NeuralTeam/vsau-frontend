import { TeachingStaffBlock, TemplatePage } from "@/shared/ui/vsau/sveden";
import { ITeachingStaff } from "@/shared/ui/vsau/sveden/types";

const SvedenEmployeesPage = () => {
    const staffList: ITeachingStaff[] = [
        {
            id: 1,
            first_name: "Евгений Валентинович",
            last_name: "Авдеев",
            post: "Доцент кафедры организации производства и предпринимательской деятельности в АПК",
            disciplines: [
                { id: 1, title: "Организация сельскохозяйственного производства" },
                { id: 2, title: "Экономика организации (предприятия)" },
                { id: 3, title: "Организация и планирование производства на предприятиях автомобильного транспорта" },
                { id: 4, title: "Планирование на предприятии" }
            ],
            level: "Экономист-менеджер (Высшее образование)",
            qualification: "Экономика и управление на предприятии агропромышленного комплекса",
            degree: "Кандидат экономических наук",
            academStat: "Доцент",
            profDevelopments: [
                {
                    id: 1,
                    year: "2022",
                    title: "Педагогика, психология высшего и инклюзивного образования"
                }
            ],
            totalWorkExperience: 11,
            specWorkExperience: 0,
            eduPrograms: [
                { id: 1, title: '38.03.02 Менеджмент, направленность (профиль) "Производственный менеджмент в АПК" (ФГОС ВО № 970 от 12.08.2020)' }
            ]
        }
    ];

    return (
        <TemplatePage title="Педагогический состав">
            <TeachingStaffBlock staffList={staffList} />
        </TemplatePage>
    );
};

export default SvedenEmployeesPage;
