import { ShareBlock } from "@/shared/ui/vsau/share-block";
import { Dot, Files, Share2, UserRound } from "lucide-react";
import { ITeachingStaff } from "@/shared/ui/vsau/sveden/types";
import Link from "next/link";

const SvedenEmployerPage = async ({ params }: { params: { id: string } }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/employees/${params.id}`);
    const staff: ITeachingStaff = await response.json();

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
                    <li className="flex">
                        <Dot className="min-h-6 min-w-6" />
                        <p className="text-[16px] font-medium">{staff.post}</p>
                    </li>
                </ul>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Перечень преподаваемых дисциплин</p>
                <ul className="space-y-2">
                    {staff.disciplines.map((value, index) => (
                        <li key={index} className="flex">
                            <Dot className="min-h-6 min-w-6" />
                            <p className="text-[16px] font-medium">{value}</p>
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
                <p className="text-[16px] font-medium">{staff.academ_stat}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">
                    Сведения о повышении квалификации (за последние 3 года) и сведения о профессиональной переподготовке
                </p>
                <ul className="space-y-2">
                    {staff.prof_developments.map((value, index) => (
                        <li key={index} className="flex">
                            <Dot className="min-h-6 min-w-6" />
                            <p className="text-[16px] font-medium">{value}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Общий стаж работы (лет)</p>
                <p className="text-[16px] font-medium">{staff.total_work_experience}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Стаж работы педагогического работника по специальности (лет)</p>
                <p className="text-[16px] font-medium">{staff.spec_work_experience}</p>
            </div>
            <div className="flex w-full flex-col justify-center space-y-4 rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">
                    Наименование образовательных программ, в реализации которых участвует педагогический работник
                </p>
                <ul className="space-y-2">
                    {staff.edu_programs.map((value, index) => (
                        <li key={index} className="flex">
                            <Dot className="min-h-6 min-w-6" />
                            <p className="text-[16px] font-medium">{value}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <ShareBlock />
        </div>
    );
};

export default SvedenEmployerPage;
