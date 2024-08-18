import { TemplatePage } from "@/shared/ui/vsau/sveden";
import Link from "next/link";

interface IInterInfo {
    id: number;
    gov_name: string;
    org_name: string;
    agreement_name: string;
    agreement_number: string;
    agreement_end_date: number | null;
}

const SvedenInterPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/international`);
    const interInfo: IInterInfo[] = await response.json();

    return (
        <TemplatePage title="Международное сотрудничество">
            <div className="space-y-4 rounded-[10px] bg-white px-8 py-4">
                <p className="text-[23px] font-semibold leading-[20px]">
                    Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам
                    образования и науки
                </p>
                <table className="text-surface min-w-full text-left text-sm font-light">
                    <thead className="sticky top-0 z-10 bg-[#0F91D6] font-medium">
                        <tr>
                            <th scope="col" className="max-w-10 px-4 py-4 text-white">
                                Название государства
                            </th>
                            <th scope="col" className="max-w-16 px-4 py-4 text-white">
                                Наименование организации
                            </th>
                            <th scope="col" className="max-w-32 px-4 py-4 text-white">
                                Реквизиты договора
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>*:nth-child(odd)]:bg-[#E7F4FB]">
                        {interInfo.map((el) => (
                            <tr key={el.id} itemProp="internationalDog">
                                <td itemProp="stateName" className="max-w-10 px-4 py-4">
                                    {el.gov_name}
                                </td>
                                <td itemProp="orgName" className="max-w-16 px-4 py-4">
                                    {el.org_name.startsWith("http") ? (
                                        <Link href={el.org_name} className="underline-offset-2 hover:underline">
                                            {el.org_name}
                                        </Link>
                                    ) : (
                                        el.org_name
                                    )}
                                </td>
                                <td itemProp="dogReg" className="max-w-32 px-4 py-4">
                                    <ul>
                                        <li>
                                            <strong>{el.agreement_name}</strong>
                                        </li>
                                        <li>
                                            <strong>Номер:</strong> № {el.agreement_number}
                                        </li>
                                        <li>
                                            <strong>Срок действия:</strong>{" "}
                                            {el.agreement_end_date === null
                                                ? "Бессрочно"
                                                : new Date(el.agreement_end_date * 1000).toLocaleString("ru", {
                                                      year: "numeric",
                                                      month: "long",
                                                      day: "numeric",
                                                      timeZone: "UTC"
                                                  })}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </TemplatePage>
    );
};

export default SvedenInterPage;
