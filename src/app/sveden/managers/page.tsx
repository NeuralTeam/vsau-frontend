import Image from "next/image";
import { Block, TemplatePage } from "@/shared/ui/vsau/sveden";
import Link from "next/link";

interface IManagersContacts {
    workplace: string;
    tels: string[];
    emails: string[];
}

interface IManagersPerson {
    name: string;
    post: string;
    photo?: string;
    contacts: IManagersContacts;
}

interface IManagersFil {
    name: string;
    post: string;
    fil_name: string;
    contacts: IManagersContacts;
}

interface IManagers {
    ruk: IManagersPerson[];
    zam_ruk: IManagersPerson[];
    fil_ruk: IManagersFil[];
    predst_ruk: IManagersFil[];
}

const SvedenManagersPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/managers`);
    const managers: IManagers = await response.json();

    return (
        <TemplatePage title="Руководство">
            <div className="grid grid-cols-2 grid-rows-3 gap-5 rounded-[10px] bg-white p-8">
                {managers.ruk.map((value) => (
                    <div key={value.name} className="flex max-w-[650px] items-center space-x-10 rounded-[10px] bg-[#0F91D6] p-10">
                        <div>
                            <Image src="/manifest_logo512_example.png" width={180} height={180} alt="#" />
                        </div>
                        <div itemProp="rucovodstvo" className="space-y-4 text-white">
                            <div className="space-y-2">
                                <p itemProp="fio" className="text-[25px] font-semibold leading-[25px]">
                                    {value.name}
                                </p>
                                <p itemProp="post" className="text-[17px] font-light leading-[16px]">
                                    {value.post}
                                </p>
                            </div>
                            <div className="space-y-0.5 text-[17px] font-light leading-[18px]">
                                <p itemProp="telephone">
                                    {value.contacts.tels[0]} / {value.contacts.workplace}
                                </p>
                                <p itemProp="email">{value.contacts.emails[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {managers.zam_ruk.map((value) => (
                    <div key={value.name} className="flex max-w-[650px] items-center space-x-10 rounded-[10px] bg-[#0F91D6] p-10">
                        <div>
                            <Image src="/manifest_logo512_example.png" width={180} height={180} alt="#" />
                        </div>
                        <div itemProp="rucovodstvoZam" className="space-y-4 text-white">
                            <div className="space-y-2">
                                <p itemProp="fio" className="text-[25px] font-semibold leading-[25px]">
                                    {value.name}
                                </p>
                                <p itemProp="post" className="text-[17px] font-light leading-[16px]">
                                    {value.post}
                                </p>
                            </div>
                            <div className="flex flex-col space-y-1 text-[17px] font-light leading-[18px]">
                                <p itemProp="telephone">
                                    {value.contacts.tels[0].split("/").length == 2
                                        ? `${value.contacts.tels[0].split("/")[0]} (доб. ${value.contacts.tels[0].split("/")[1]})`
                                        : value.contacts.tels[0]}{" "}
                                    / {value.contacts.workplace}
                                </p>
                                <Link href={`mailto:${value.contacts.emails[0]}`} itemProp="email">
                                    {value.contacts.emails[0]}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div itemProp="rucovodstvoFil" className="space-y-4 rounded-[10px] bg-white p-8 text-[18px]">
                <p className="text-[24px] font-semibold leading-[24px]">Информация о руководителях филиалов образовательной организации</p>

                {managers.fil_ruk.length == 0 ? (
                    <p>У образовательной организации нет филиалов</p>
                ) : (
                    managers.fil_ruk.map((value) => (
                        <div key={value.name} className="space-y-2">
                            <p itemProp="nameFil" className="text-[22px] font-semibold leading-[20px] text-[#0F91D6]">
                                {value.fil_name}
                            </p>
                            <div className="space-y-1">
                                <p itemProp="fio" className="text-[20px] font-semibold leading-[25px]">
                                    {value.name}
                                </p>
                                <p itemProp="post" className="text-[17px] font-light leading-[16px]">
                                    {value.post}
                                </p>
                            </div>
                            <div className="flex flex-col space-y-1 text-[17px] font-light leading-[20px]">
                                <p>{value.contacts.workplace}</p>
                                <p itemProp="telephone">{value.contacts.tels[0]}</p>
                                <Link href={`mailto:${value.contacts.emails[0]}`} itemProp="email">
                                    {value.contacts.emails[0]}
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div itemProp="rucovodstvoRep" className="space-y-4 rounded-[10px] bg-white p-8 text-[18px]">
                <p className="text-[24px] font-semibold leading-[24px]">Информация о руководителях представительств образовательной организации</p>

                {managers.predst_ruk.length == 0 ? (
                    <p>У образовательной организации нет представительств</p>
                ) : (
                    managers.predst_ruk.map((value) => (
                        <div key={value.name} className="space-y-2">
                            <p itemProp="nameRep" className="text-[22px] font-semibold leading-[20px] text-[#0F91D6]">
                                {value.fil_name}
                            </p>
                            <div className="space-y-1">
                                <p itemProp="fio" className="text-[20px] font-semibold leading-[25px]">
                                    {value.name}
                                </p>
                                <p itemProp="post" className="text-[17px] font-light leading-[16px]">
                                    {value.post}
                                </p>
                            </div>
                            <div className="flex flex-col space-y-1 text-[17px] font-light leading-[20px]">
                                <p>{value.contacts.workplace}</p>
                                <p itemProp="telephone">{value.contacts.tels[0]}</p>
                                <Link href={`mailto:${value.contacts.emails[0]}`} itemProp="email">
                                    {value.contacts.emails[0]}
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </TemplatePage>
    );
};

export default SvedenManagersPage;
