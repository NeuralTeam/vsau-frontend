import { ShareBlock } from "@/shared/ui/vsau/share-block";
import { Dot, Files, Share2, UserRound } from "lucide-react";
import { ITeachingStaff } from "@/shared/ui/vsau/sveden/types";
import Link from "next/link";

const SvedenEmployerPage = ({ params }: { params: { id: string } }) => {
    const staff: ITeachingStaff = {
        id: 1,
        first_name: "Евгений Валентинович",
        last_name: "Авдеев",
        post: [{ id: 1, title: "Доцент кафедры организации производства и предпринимательской деятельности в АПК" }],
        disciplines: [
            { id: 1, title: "Организация сельскохозяйственного производства" },
            { id: 2, title: "Экономика организации (предприятия)" },
            { id: 3, title: "Организация и планирование производства на предприятиях автомобильного транспорта" },
            { id: 4, title: "Планирование на предприятии" }
        ],
        level: "Экономист-менеджер (высшее образование)",
        qualification: "Экономика и управление на предприятии агропромышленного комплекса",
        degree: "Кандидат экономических наук",
        academStat: "Доцент",
        profDevelopments: [
            {
                id: 1,
                year: 2022,
                title: "Педагогика, психология высшего и инклюзивного образования"
            }
        ],
        totalWorkExperience: 11,
        specWorkExperience: 0,
        eduPrograms: [
            { id: 1, title: '38.03.02 Менеджмент, направленность (профиль) "Производственный менеджмент в АПК" (ФГОС ВО № 970 от 12.08.2020)' },
            {
                id: 2,
                title: '38.05.01 Экономическая безопасность, специализация "Экономико-правовое обеспечение экономической безопасности" (ФГОС ВО № 293 от 14.04.2021)'
            },
            {
                id: 3,
                title: '23.05.01 Наземные транспортно-технологические средства, специализация "Автомобильная техника в транспортных технологиях" (ФГОС ВО № 935 от 11.08.2020)'
            },
            {
                id: 4,
                title: '38.05.01 Экономическая безопасность, специализация №1 "Экономико-правовое обеспечение экономической безопасности" (ФГОС ВО № 20 от 16.01.2017)'
            }
        ]
    };

    return (
        <div className="space-y-4 pr-[70px] pt-[50px]">
            <div className="flex space-x-4">
                <div className="rounded-[10px] bg-white p-8"></div>
                <div className="flex items-center justify-center space-x-8 rounded-[10px] bg-white p-8">
                    <div className="flex min-h-32 min-w-32 justify-center overflow-hidden rounded-full bg-[#ECEBEB]">
                        <UserRound size={112} strokeWidth={1} fill="#FFFFFF" color="#FFFFFF" className="relative top-8" />
                    </div>

                    <p className="text-[30px] font-bold text-[#0F91D6]">
                        {staff.last_name} {staff.first_name}
                    </p>
                </div>
                <div className="flex w-full flex-col items-end space-y-4">
                    <button className="flex h-fit w-fit items-center space-x-2 text-nowrap rounded-[10px] bg-[#E3E3E3FF] px-6 py-3">
                        <Files size={20} strokeWidth={2} />
                        <p>Скопировать данные</p>
                    </button>
                    <Link
                        href="#share-section"
                        className="flex h-fit w-fit items-center space-x-2 text-nowrap rounded-[10px] bg-[#E3E3E3FF] px-6 py-3"
                    >
                        <Share2 size={20} strokeWidth={3} />
                        <p>Поделиться</p>
                    </Link>
                </div>
            </div>

            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Занимаемая должность (должности)</p>
                <ul className="space-y-2">
                    {staff.post.map((el) => (
                        <li key={el.id} className="flex">
                            <Dot className="min-h-6 min-w-6" />
                            <p className="text-[16px] font-medium">{el.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Перечень преподаваемых дисциплин</p>
                <ul className="space-y-2">
                    {staff.disciplines.map((el) => (
                        <li key={el.id} className="flex">
                            <Dot className="min-h-6 min-w-6" />
                            <p className="text-[16px] font-medium">{el.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Квалификация (уровень образования)</p>
                <p className="text-[16px] font-medium">{staff.level}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Наименование направления подготовки и (или) специальности</p>
                <p className="text-[16px] font-medium">{staff.qualification}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Учёная степень</p>
                <p className="text-[16px] font-medium">{staff.degree}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Учёное звание</p>
                <p className="text-[16px] font-medium">{staff.academStat}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">
                    Сведения о повышении квалификации (за последние 3 года) и сведения о профессиональной переподготовке
                </p>
                <ul className="space-y-2">
                    {staff.profDevelopments.map((el) => (
                        <li key={el.id} className="flex">
                            <Dot className="min-h-6 min-w-6" />
                            <p className="text-[16px] font-medium">
                                {el.year}: {el.title}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Общий стаж работы (лет)</p>
                <p className="text-[16px] font-medium">{staff.totalWorkExperience}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Стаж работы педагогического работника по специальности (лет)</p>
                <p className="text-[16px] font-medium">{staff.specWorkExperience}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">
                    Наименование образовательных программ, в реализации которых участвует педагогический работник
                </p>
                <ul className="space-y-2">
                    {staff.eduPrograms.map((el) => (
                        <li key={el.id} className="flex">
                            <Dot className="min-h-6 min-w-6" />
                            <p className="text-[16px] font-medium">{el.title}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <ShareBlock />
        </div>
    );
};

export default SvedenEmployerPage;
