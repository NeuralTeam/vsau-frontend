import { Dot } from "lucide-react";
import Link from "next/link";

const SvedenEduStandartsPage = () => {
    return (
        <main itemProp="copy" className="space-y-8 pr-[70px] pt-[50px]">
            <h1>Образовательные стандарты и требования</h1>

            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Информация о применяемых федеральных государственных образовательных стандартах
                </p>
                <ul className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i} className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href="#" itemProp="eduFedDoc">
                                Документ №{i + 1}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Информация об утвержденных образовательных стандартах</p>
                <ul className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i} className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href="#" itemProp="eduStandartDoc">
                                Документ №{i + 1}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Информация о применяемых федеральных государственных требованиях</p>
                <ul className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i} className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href="#" itemProp="eduFedTreb">
                                Документ №{i + 1}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-8 rounded-[10px] bg-white p-8">
                <p className="text-[23px] font-semibold leading-[20px]">Информация о самостоятельно устанавливаемых требованиях</p>
                <ul className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i} className="flex items-center text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href="#" itemProp="eduStandartTreb">
                                Документ №{i + 1}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default SvedenEduStandartsPage;
