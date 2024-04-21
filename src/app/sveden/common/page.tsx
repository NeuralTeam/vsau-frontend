import Link from "next/link";

interface IMainInfo {
    [key: string]: string;

    full_name: string;
    short_name: string;
    reg_date: string;
    address: string;
    work_time: string;
    tel: string;
    email: string;
    uchred_name: string;
    uchred_address: string;
    uchred_tel: string;
    uchred_email: string;
    uchred_website: string;
}

const CommonPage = async () => {
    const mainInfo: IMainInfo = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/main-info`).then((res) => res.json());
    for (const key in mainInfo) {
        if (mainInfo[key] === null) mainInfo[key] = "Отсутствует";
    }

    return (
        <div className="flex flex-wrap gap-8 pr-[70px] pt-[70px]">
            <div className="max-w-[550px] space-y-3 rounded-[10px] bg-white p-8">
                <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Полное наименование образовательной организации</h1>
                <p itemProp="fullName" className="leading-[18px]">
                    {mainInfo.full_name}
                </p>
            </div>

            <div className="max-w-[500px] space-y-3 rounded-[10px] bg-white p-8">
                <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Сокращенное наименование образовательной организации</h1>
                <p itemProp="shortName" className="leading-[18px]">
                    {mainInfo.short_name}
                </p>
            </div>

            <div className="max-w-[250px] space-y-3 rounded-[10px] bg-white p-8">
                <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Дата создания образовательной организации</h1>
                <p itemProp="regDate" className="leading-[18px]">
                    {mainInfo.reg_date}
                </p>
            </div>

            <div className="max-w-[700px] space-y-3 rounded-[10px] bg-white p-8">
                <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Учредитель</h1>
                <div itemProp="uchredLaw" className="leading-[22px]">
                    <div className="space-x-3">
                        <span>Наименование:</span>
                        <span itemProp="nameUchred">{mainInfo.uchred_name}</span>
                    </div>
                    {/*TODO: itemProp="fullnameUchred" не существует*/}
                    {/*<div className="space-x-3">*/}
                    {/*    <span>Ф.И.О. руководителя:</span>*/}
                    {/*    <span itemProp="fullnameUchred">Патрушев Дмитрий Николаевич</span>*/}
                    {/*</div>*/}
                    <div className="space-x-3">
                        <span>Юридический адрес:</span>
                        <span itemProp="addressUchred">{mainInfo.uchred_address}</span>
                    </div>
                    <div className="space-x-3">
                        {/*TODO: перечисление списка телефонов*/}
                        {/*TODO: нормализовать формат телефона*/}
                        <span>Контактные телефоны:</span>
                        <Link itemProp="telUchred" href="tel:+74956078000" className="underline-offset-4 hover:underline">
                            {mainInfo.uchred_tel}
                        </Link>
                    </div>
                    <div className="space-x-3">
                        <span>Адрес сайта учредителя:</span>
                        <Link itemProp="websiteUchred" href={mainInfo.uchred_website} className="underline-offset-4 hover:underline">
                            mcx.ru
                        </Link>
                    </div>
                    <div className="space-x-3">
                        <span>Адрес электронной почты учредителя:</span>
                        <Link itemProp="mailUchred" href={`mailto:${mainInfo.uchred_email}`} className="underline-offset-4 hover:underline">
                            {mainInfo.uchred_email}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[600px] space-y-3 rounded-[10px] bg-white p-8">
                <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Справочная информация об образовательной организации</h1>
                <div className="leading-[22px]">
                    <div className="space-x-3">
                        <span>Адрес:</span>
                        <span itemProp="address">{mainInfo.address}</span>
                    </div>
                    <div className="space-x-3">
                        <span>График работы:</span>
                        <span itemProp="workTime">{mainInfo.work_time}</span>
                    </div>
                    <div className="space-x-3">
                        <span>Телефон:</span>
                        <Link itemProp="telephone" href="tel:+74732538651" className="underline-offset-4 hover:underline">
                            {mainInfo.tel}
                        </Link>
                    </div>
                    <div className="space-x-3">
                        <span>Адрес электронной почты:</span>
                        <Link itemProp="email" href={`mailto:${mainInfo.email}`} className="underline-offset-4 hover:underline">
                            {mainInfo.email}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[500px] space-y-3 rounded-[10px] bg-white p-8">
                <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Представительства образовательной организации</h1>
                <p itemProp="">Отсутствуют</p>
            </div>

            <div className="max-w-[500px] space-y-3 rounded-[10px] bg-white p-8">
                <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Филиалы образовательной организации</h1>
                <p itemProp="filInfo">Отсутствуют</p>
            </div>
        </div>
    );
};

export default CommonPage;
