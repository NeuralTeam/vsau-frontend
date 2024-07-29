import Link from "next/link";
import { AddressListBlock, DocumentListBlock, TemplatePage, Block } from "@/shared/ui/vsau/sveden";

interface IFounder {
    [key: string]: string;

    name: string;
    address: string;
    tel: string;
    email: string;
    website: string;
}

interface IWorkTime {
    [key: string]: string;

    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
}

interface IMainInfo {
    [key: string]: string | IWorkTime | IFounder | string[];

    full_name: string;
    short_name: string;
    reg_date: string;
    address: string;
    work_time: IWorkTime;
    tel: string;
    email: string;
    license_doc: string;
    accreditation_doc: string;
    founder: IFounder;
    online_activity_addresses: string[];
    practice_addresses: string[];
    practical_training_addresses: string[];
    final_certification_addresses: string[];
    additional_activity_addresses: string[];
    main_activity_addresses: string[];
}

const SvedenCommonPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/main-info`);
    const mainInfo: IMainInfo = await response.json();

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
                            {/*<span itemProp="workTime">{mainInfo.work_time}</span>*/}
                        </div>
                    </div>
                </Block>

                <Block title="Учредитель" className="col-span-2">
                    <div itemProp="uchredLaw" className="leading-[22px]">
                        <div className="space-x-3">
                            <span>Наименование:</span>
                            <span itemProp="nameUchred">{mainInfo.founder.name}</span>
                        </div>
                        <div className="space-x-3">
                            <span>Юридический адрес:</span>
                            <span itemProp="addressUchred">{mainInfo.founder.address}</span>
                        </div>
                        <div className="space-x-3">
                            <span>Контактные телефоны:</span>
                            <Link itemProp="telUchred" href={`tel:${mainInfo.founder.tel}`} className="underline-offset-4 hover:underline">
                                {mainInfo.founder.tel}
                            </Link>
                        </div>
                        <div className="space-x-3">
                            <span>Адрес сайта учредителя:</span>
                            <Link itemProp="websiteUchred" href={mainInfo.founder.website} className="underline-offset-4 hover:underline">
                                mcx.ru
                            </Link>
                        </div>
                        <div className="space-x-3">
                            <span>Адрес электронной почты учредителя:</span>
                            <Link itemProp="mailUchred" href={`mailto:${mainInfo.founder.email}`} className="underline-offset-4 hover:underline">
                                {mainInfo.founder.email}
                            </Link>
                        </div>
                    </div>
                </Block>

                <DocumentListBlock
                    title="Лицензия на осуществление образовательной деятельности"
                    itemProp="licenseDocLink"
                    className="col-span-2"
                    docList={[{ id: 1, title: "Лицензия на осуществление образовательной деятельности", href: mainInfo.license_doc }]}
                />

                <DocumentListBlock
                    title="Государственная аккредитация образовательной деятельности"
                    itemProp="accreditationDocLink"
                    className="col-span-2"
                    docList={[{ id: 1, title: "Государственная аккредитация образовательной деятельности", href: mainInfo.accreditation_doc }]}
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
