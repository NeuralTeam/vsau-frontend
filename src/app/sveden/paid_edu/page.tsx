import { Dot } from "lucide-react";
import Link from "next/link";

const SvedenPaidEduPage = () => {
    return (
        <main className="space-y-5 pr-[70px] pt-[50px]">
            <h1>Платные образовательные услуги</h1>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Порядок оказания платных образовательных услуг</p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="paidEdu">
                            Документ
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Образец договора об оказании платных образовательных услуг</p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="paidDog">
                            Образец договора об оказании платных образовательных услуг
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Документ об утверждении стоимости обучения по каждой образовательной программе
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                        <Dot className="min-h-6 min-w-6" />
                        <Link href="#" itemProp="paidSt">
                            Документ об утверждении стоимости обучения по каждой образовательной программе
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="space-y-2 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Документ об установлении размера платы, взимаемой с родителей (законных представителей) за присмотр и уход за детьми, осваивающими
                    образовательные программы дошкольного образования в организациях, осуществляющих образовательную деятельность, за содержание детей
                    в образовательной организации, реализующей образовательные программы начального общего, основного общего или среднего общего
                    образования, если в такой образовательной организации созданы условия для проживания обучающихся в интернате, либо за
                    осуществление присмотра и ухода за детьми в группах продленного дня в образовательной организации, реализующей образовательные
                    программы начального общего, основного общего или среднего общего образования
                </p>
                <ul className="space-y-2">
                    <li className="text-[18px]">
                        <p itemProp="paidParents">Отсутствует</p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default SvedenPaidEduPage;
