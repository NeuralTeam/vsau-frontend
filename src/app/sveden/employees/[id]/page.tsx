import { ShareBlock } from "@/shared/ui/vsau/share-block";
import { UserRound } from "lucide-react";

const SvedenEmployerPage = ({ params }: { params: { id: string } }) => {
    return (
        <div className="space-y-4 pr-[70px] pt-[50px]">
            <div className="flex space-x-4">
                <div className="rounded-[10px] bg-white p-8"></div>
                <div className="flex items-center justify-center space-x-8 rounded-[10px] bg-white p-8">
                    <div className="flex min-h-32 min-w-32 justify-center overflow-hidden rounded-full bg-[#ECEBEB]">
                        <UserRound size={112} strokeWidth={1} fill="#FFFFFF" color="#FFFFFF" className="relative top-8" />
                    </div>

                    <p className="text-[30px] font-bold text-[#0F91D6]">Авдеев Евгений Валентинович</p>
                </div>
                <div></div>
            </div>
            <div className="flex h-20 w-full flex-col justify-center rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Занимаемая должность (должности)</p>
                <p className="text-[16px] font-medium">Доцент кафедры организации производства и предпринимательской деятельности в АПК</p>
            </div>
            <div className="flex h-20 w-full flex-col justify-center rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Перечень преподаваемых дисциплин</p>
                <p className="text-[16px] font-medium">Доцент кафедры организации производства и предпринимательской деятельности в АПК</p>
            </div>
            <div className="flex h-20 w-full flex-col justify-center rounded-[10px] bg-white p-8">
                <p className="text-[14px] font-light">Уровень образования</p>
                <p className="text-[16px] font-medium">Доцент кафедры организации производства и предпринимательской деятельности в АПК</p>
            </div>
            <ShareBlock />
        </div>
    );
};

export default SvedenEmployerPage;
