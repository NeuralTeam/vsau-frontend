import Link from "next/link";
import { AddressListBlock, DocumentListBlock, TemplatePage, Block } from "@/shared/ui/vsau/sveden";
import { IAddress, IDocument } from "@/shared/ui/vsau/sveden/types";

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
    [key: string]: string | IDocument | IFounders[] | IAddress[];

    full_name: string;
    short_name: string;
    reg_date: string;
    address: string;
    work_time: string;
    tel: string;
    email: string;
    license_doc: IDocument;
    accreditation_doc: IDocument;
    founders: IFounders[];
    online_activity_addresses: IAddress[];
    practice_addresses: IAddress[];
    practical_training_addresses: IAddress[];
    final_certification_addresses: IAddress[];
    additional_activity_addresses: IAddress[];
    main_activity_addresses: IAddress[];
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
        license_doc: { id: 1, title: "Лицензия на осуществление образовательной деятельности", href: "http://localhost:3000" },
        accreditation_doc: { id: 1, title: "Государственная аккредитация образовательной деятельности", href: "http://localhost:3000" },
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
        practice_addresses: [{ id: 1, address: "394087, Воронежская область, г Воронеж, ул. Мичурина, 1" }],
        practical_training_addresses: [
            { id: 1, address: "394087, Воронежская область, г Воронеж, ул. Мичурина, 1" },
            { id: 2, address: "394087, Воронежская область, г Воронеж, ул. Дарвина, 3" }
        ],
        final_certification_addresses: [{ id: 1, address: "394087, Воронежская область, г Воронеж, ул. Мичурина, 1" }],
        additional_activity_addresses: [{ id: 1, address: "394087, Воронежская область, г Воронеж, ул. Мичурина, 1" }],
        main_activity_addresses: [{ id: 1, address: "394087, Воронежская область, г Воронеж, ул. Тимирязева, 13" }]
    };

    for (const key in mainInfo) {
        if (mainInfo[key] === null) mainInfo[key] = "Отсутствует";
    }

    return (
        <TemplatePage title="Основные сведения">
            <div className="grid grid-cols-4 gap-8">
                <Block title="Полное наименование образовательной организации" className="col-span-2">
                    <p itemProp="fullName" className="leading-[20px]">
                        {mainInfo.full_name}
                    </p>
                </Block>

                <Block title="Сокращенное наименование образовательной организации" className="col-span-2">
                    <p itemProp="shortName" className="leading-[20px]">
                        {mainInfo.short_name}
                    </p>
                </Block>

                <Block title="Дата создания образовательной организации" className="col-span-1">
                    <p itemProp="regDate" className="leading-[20px]">
                        {mainInfo.reg_date}
                    </p>
                </Block>

                <Block title="Справочная информация об образовательной организации" className="col-span-3">
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
                </Block>

                <Block title={mainInfo.founders.length > 1 ? "Учредители" : "Учредитель"} className="col-span-2">
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
                </Block>

                <DocumentListBlock
                    title="Лицензия на осуществление образовательной деятельности"
                    itemProp="licenseDocLink"
                    className="col-span-2"
                    docList={[mainInfo.license_doc]}
                />

                <DocumentListBlock
                    title="Государственная аккредитация образовательной деятельности"
                    itemProp="accreditationDocLink"
                    className="col-span-2"
                    docList={[mainInfo.accreditation_doc]}
                />

                <AddressListBlock
                    title="О местах осуществления образовательной деятельности при использовании сетевой формы реализации образовательных программ"
                    itemProp="addressPlaceSet"
                    className="col-span-2"
                    addressList={mainInfo.online_activity_addresses}
                />

                <AddressListBlock
                    title="О местах проведения практики"
                    itemProp="addressPlacePrac"
                    className="col-span-2"
                    addressList={mainInfo.practice_addresses}
                />

                <AddressListBlock
                    title="О местах проведения практической подготовки обучающихся"
                    itemProp="addressPlacePodg"
                    className="col-span-2"
                    addressList={mainInfo.practical_training_addresses}
                />

                <AddressListBlock
                    title="О местах проведения государственной итоговой аттестации"
                    itemProp="addressPlaceGia"
                    className="col-span-2"
                    addressList={mainInfo.final_certification_addresses}
                />

                <AddressListBlock
                    title="О местах осуществления образовательной деятельности по основным программам профессионального обучения"
                    itemProp="addressPlaceOppo"
                    className="col-span-2"
                    addressList={mainInfo.main_activity_addresses}
                />

                <AddressListBlock
                    title="О местах осуществления образовательной деятельности по дополнительным образовательным программам"
                    itemProp="addressPlaceDop"
                    className="col-span-2"
                    addressList={mainInfo.additional_activity_addresses}
                />
            </div>
        </TemplatePage>
    );
};

export default SvedenCommonPage;
