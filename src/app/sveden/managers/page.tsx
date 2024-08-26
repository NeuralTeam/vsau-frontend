import Image from "next/image";
import { TemplatePage } from "@/shared/ui/vsau/sveden";
import Link from "next/link";

interface IManagersPerson {
    name: string;
    post: string;
    tel: string;
    email: string;
    workplace: string | null;
    photo_link: string | null;
}

interface IManagersFil {
    fil_name: string;
    name: string;
    post: string;
    tel: string;
    email: string;
    workplace: string | null;
    photo_link: string | null;
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
                            <Image
                                src={
                                    value.photo_link === null
                                        ? "/manifest_logo512_example.png"
                                        : `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/storage/${value.photo_link}?bucket=sveden`
                                }
                                width={178}
                                height={178}
                                priority={true}
                                placeholder="empty"
                                alt="#"
                                className="min-h[178px] min-w-[178px] duration-300 hover:scale-105"
                            />
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
                                    {value.tel} / {value.workplace}
                                </p>
                                <p itemProp="email">{value.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {managers.zam_ruk.map((value) => (
                    <div key={value.name} className="flex max-w-[650px] items-center space-x-10 rounded-[10px] bg-[#0F91D6] p-10">
                        <div>
                            <Image
                                src={
                                    value.photo_link === null
                                        ? "/manifest_logo512_example.png"
                                        : `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/storage/${value.photo_link}?bucket=sveden`
                                }
                                width={178}
                                height={178}
                                priority={true}
                                placeholder="empty"
                                alt="#"
                                className="min-h[178px] min-w-[178px] duration-300 hover:scale-105"
                            />
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
                                    {value.tel.split("/").length == 2 ? `${value.tel.split("/")} (доб. ${value.tel.split("/")[1]})` : value.tel} /{" "}
                                    {value.workplace}
                                </p>
                                <Link href={`mailto:${value.email}`} itemProp="email">
                                    {value.email}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div itemProp="rucovodstvoFil" className="space-y-4 rounded-[10px] bg-white p-8 text-[18px]">
                <p className="text-[24px] font-semibold leading-[24px]">Информация о руководителях филиалов образовательной организации</p>

                {/*{managers.fil_ruk.length == 0 ? (*/}
                {/*    <p>У образовательной организации нет филиалов</p>*/}
                {/*) : (*/}
                {/*    managers.fil_ruk.map((value) => (*/}
                {/*        <div key={value.name} className="space-y-2">*/}
                {/*            <p itemProp="nameFil" className="text-[22px] font-semibold leading-[20px] text-[#0F91D6]">*/}
                {/*                {value.fil_name}*/}
                {/*            </p>*/}
                {/*            <div className="space-y-1">*/}
                {/*                <p itemProp="fio" className="text-[20px] font-semibold leading-[25px]">*/}
                {/*                    {value.name}*/}
                {/*                </p>*/}
                {/*                <p itemProp="post" className="text-[17px] font-light leading-[16px]">*/}
                {/*                    {value.post}*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="flex flex-col space-y-1 text-[17px] font-light leading-[20px]">*/}
                {/*                <p>{value.workplace}</p>*/}
                {/*                <p itemProp="telephone">{value.tel}</p>*/}
                {/*                <Link href={`mailto:${value.email}`} itemProp="email">*/}
                {/*                    {value.email}*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*)}*/}
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
                                <p>{value.workplace}</p>
                                <p itemProp="telephone">{value.tel}</p>
                                <Link href={`mailto:${value.email}`} itemProp="email">
                                    {value.email}
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
