import Link from "next/link";
import { Dot } from "lucide-react";

interface IDocLink {
    [key: string]: string;

    title: string;
    link: string;
}
interface IAddresses {
    [key: string]: string | number;

    id: number;
    title: string;
}
interface IFounders {
    [key: string]: string | number;

    id: number;
    name: string;
    address: string;
    tel: string;
    email: string;
    website: string;
}
interface IMainInfo {
    [key: string]: string | IDocLink | IFounders[] | IAddresses[];

    full_name: string;
    short_name: string;
    reg_date: string;
    address: string;
    work_time: string;
    tel: string;
    email: string;
    license_doc: IDocLink;
    accreditation_doc: IDocLink;
    founders: IFounders[];
    online_activity_addresses: IAddresses[];
    practice_addresses: IAddresses[];
    practical_training_addresses: IAddresses[];
    final_certification_addresses: IAddresses[];
    additional_activity_addresses: IAddresses[];
    main_activity_addresses: IAddresses[];
}

const SvedenCommonPage = async () => {
    const mainInfo: IMainInfo = {
        full_name:
            "Федеральное государственное бюджетное образовательное учреждение высшего образования «Воронежский государственный аграрный университет имени императора Петра I»",
        short_name: "ФГБОУ ВО Воронежский ГАУ",
        reg_date: "9 июня 1912 года",
        address: "Россия, 394087, г. Воронеж, ул. Мичурина, 1",
        work_time: "Мы не работаем!",
        tel: "+74732538651",
        email: "main@vsau.ru",
        license_doc: { title: "Лицензия на осуществление образовательной деятельности", link: "http://localhost:3000" },
        accreditation_doc: { title: "Государственная аккредитация образовательной деятельности", link: "http://localhost:3000" },
        founders: [
            {
                id: 1,
                name: "Министерство Сельского Хозяйства Российской Федерации",
                address: "Россия, 107139, Москва, Орликов переулок, д. 1/11",
                tel: "+74956078000",
                email: "info@mcx.ru",
                website: "https://mcx.ru"
            }
        ],
        online_activity_addresses: [],
        practice_addresses: [{ id: 1, title: "394087, Воронежская область, г Воронеж, ул. Мичурина, 1" }],
        practical_training_addresses: [{ id: 1, title: "394087, Воронежская область, г Воронеж, ул. Мичурина, 1" }],
        final_certification_addresses: [{ id: 1, title: "394087, Воронежская область, г Воронеж, ул. Мичурина, 1" }],
        additional_activity_addresses: [{ id: 1, title: "394087, Воронежская область, г Воронеж, ул. Мичурина, 1" }],
        main_activity_addresses: [{ id: 1, title: "394087, Воронежская область, г Воронеж, ул. Тимирязева, 13" }]
    };

    for (const key in mainInfo) {
        if (mainInfo[key] === null) mainInfo[key] = "Отсутствует";
    }

    return (
        <main itemProp="copy" className="space-y-5 pr-[70px] pt-[50px]">
            <h1>Основные сведения</h1>

            <div className="flex flex-wrap gap-8">
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

                <div className="max-w-[600px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Справочная информация об образовательной организации</h1>
                    <div className="leading-[22px]">
                        <div className="space-x-3">
                            <span>Адрес:</span>
                            <span itemProp="address">{mainInfo.address}</span>
                        </div>
                        <div className="space-x-3">
                            <span>Телефон:</span>
                            <Link itemProp="telephone" href={`tel:${mainInfo.tel}`} className="underline-offset-4 hover:underline">
                                {mainInfo.tel}
                            </Link>
                        </div>
                        <div className="space-x-3">
                            <span>Адрес электронной почты:</span>
                            <Link itemProp="email" href={`mailto:${mainInfo.email}`} className="underline-offset-4 hover:underline">
                                {mainInfo.email}
                            </Link>
                        </div>
                        <div className="space-x-3">
                            <span>График работы:</span>
                            <span itemProp="workTime">{mainInfo.work_time}</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-[700px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">
                        {mainInfo.founders.length > 1 ? "Учредители" : "Учредитель"}
                    </h1>
                    {mainInfo.founders.length != 0 ? (
                        mainInfo.founders.map((founder) => (
                            <div key={founder.id} itemProp="uchredLaw" className="leading-[22px]">
                                <div className="space-x-3">
                                    <span>Наименование:</span>
                                    <span itemProp="nameUchred">{founder.name}</span>
                                </div>
                                <div className="space-x-3">
                                    <span>Юридический адрес:</span>
                                    <span itemProp="addressUchred">{founder.address}</span>
                                </div>
                                <div className="space-x-3">
                                    <span>Контактные телефоны:</span>
                                    <Link itemProp="telUchred" href="tel:+74956078000" className="underline-offset-4 hover:underline">
                                        {founder.tel}
                                    </Link>
                                </div>
                                <div className="space-x-3">
                                    <span>Адрес сайта учредителя:</span>
                                    <Link itemProp="websiteUchred" href={founder.website} className="underline-offset-4 hover:underline">
                                        mcx.ru
                                    </Link>
                                </div>
                                <div className="space-x-3">
                                    <span>Адрес электронной почты учредителя:</span>
                                    <Link itemProp="mailUchred" href={`mailto:${founder.email}`} className="underline-offset-4 hover:underline">
                                        {founder.email}
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div itemProp="uchredLaw" className="leading-[22px]">
                            Отсутствует
                        </div>
                    )}
                </div>

                <div className="max-w-[600px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">Документы</h1>
                    <ul className="space-y-2">
                        <li className="flex items-start text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href={mainInfo.license_doc.link} itemProp="licenseDocLink">
                                {mainInfo.license_doc.title}
                            </Link>
                        </li>
                        <li className="flex items-start text-[18px] text-[#0F91D6] underline underline-offset-2">
                            <Dot className="min-h-6 min-w-6" />
                            <Link href={mainInfo.accreditation_doc.link} itemProp="accreditationDocLink">
                                {mainInfo.accreditation_doc.title}
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="max-w-[700px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">
                        О местах осуществления образовательной деятельности при использовании сетевой формы реализации образовательных программ
                    </h1>
                    {mainInfo.online_activity_addresses.length != 0 ? (
                        mainInfo.online_activity_addresses.map((address, i) => (
                            <div key={address.id} itemProp="addressPlaceSet" className="space-x-3 leading-[22px]">
                                <span>{i + 1}</span>
                                <span>{address.title}</span>
                            </div>
                        ))
                    ) : (
                        <div itemProp="addressPlaceSet" className="leading-[22px]">
                            Отсутствует
                        </div>
                    )}
                </div>

                <div className="max-w-[700px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">О местах проведения практики</h1>
                    {mainInfo.practice_addresses.length != 0 ? (
                        mainInfo.practice_addresses.map((address, i) => (
                            <div key={address.id} itemProp="addressPlacePrac" className="space-x-3 leading-[22px]">
                                <span>{i + 1}</span>
                                <span>{address.title}</span>
                            </div>
                        ))
                    ) : (
                        <div itemProp="addressPlacePrac" className="leading-[22px]">
                            Отсутствует
                        </div>
                    )}
                </div>

                <div className="max-w-[700px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">
                        О местах проведения практической подготовки обучающихся
                    </h1>
                    {mainInfo.practical_training_addresses.length != 0 ? (
                        mainInfo.practical_training_addresses.map((address, i) => (
                            <div key={address.id} itemProp="addressPlacePodg" className="space-x-3 leading-[22px]">
                                <span>{i + 1}</span>
                                <span>{address.title}</span>
                            </div>
                        ))
                    ) : (
                        <div itemProp="addressPlacePodg" className="leading-[22px]">
                            Отсутствует
                        </div>
                    )}
                </div>

                <div className="max-w-[700px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">
                        О местах проведения государственной итоговой аттестации
                    </h1>
                    {mainInfo.final_certification_addresses.length != 0 ? (
                        mainInfo.final_certification_addresses.map((address, i) => (
                            <div key={address.id} itemProp="addressPlaceGia" className="space-x-3 leading-[22px]">
                                <span>{i + 1}</span>
                                <span>{address.title}</span>
                            </div>
                        ))
                    ) : (
                        <div itemProp="addressPlaceGia" className="leading-[22px]">
                            Отсутствует
                        </div>
                    )}
                </div>

                <div className="max-w-[700px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">
                        О местах осуществления образовательной деятельности по основным программам профессионального обучения
                    </h1>
                    {mainInfo.main_activity_addresses.length != 0 ? (
                        mainInfo.main_activity_addresses.map((address, i) => (
                            <div key={address.id} itemProp="addressPlaceOppo" className="space-x-3 leading-[22px]">
                                <span>{i + 1}</span>
                                <span>{address.title}</span>
                            </div>
                        ))
                    ) : (
                        <div itemProp="addressPlaceOppo" className="leading-[22px]">
                            Отсутствует
                        </div>
                    )}
                </div>

                <div className="max-w-[700px] space-y-3 rounded-[10px] bg-white p-8">
                    <h1 className="text-[23px] font-semibold leading-[20px] text-[#0F91D6]">
                        О местах осуществления образовательной деятельности по дополнительным образовательным программам
                    </h1>
                    {mainInfo.additional_activity_addresses.length != 0 ? (
                        mainInfo.additional_activity_addresses.map((address, i) => (
                            <div key={address.id} itemProp="addressPlaceDop" className="space-x-3 leading-[22px]">
                                <span>{i + 1}</span>
                                <span>{address.title}</span>
                            </div>
                        ))
                    ) : (
                        <div itemProp="addressPlaceDop" className="leading-[22px]">
                            Отсутствует
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default SvedenCommonPage;
