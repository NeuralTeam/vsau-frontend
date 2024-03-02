import { Separator } from "@/shared/ui/shadcn/separator";
import Link from "next/link";

const CommonPage = () => {
    return (
        <>
            <div>
                <h1 className="text-2xl">Полное наименование образовательной организации</h1>
                <p itemProp="fullName" className="max-w-[80%]">
                    Федеральное государственное бюджетное образовательное учреждение высшего образования «Воронежский государственный аграрный
                    университет имени императора Петра I»
                </p>
            </div>
            <Separator />
            <div>
                <h1 className="text-2xl">Сокращенное наименование образовательной организации</h1>
                <p itemProp="shortName">ФГБОУ ВО Воронежский ГАУ</p>
            </div>
            <Separator />
            <div>
                <h1 className="text-2xl">Дата создания образовательной организации</h1>
                <p itemProp="regDate">9 июня 1912 года</p>
            </div>
            <Separator />
            <div>
                <h1 className="text-2xl">Учредитель</h1>
                <div itemProp="uchredLaw">
                    <div className="space-x-3">
                        <span>Наименование:</span>
                        <span itemProp="nameUchred">Министерство Сельского Хозяйства Российской Федерации</span>
                    </div>
                    <div className="space-x-3">
                        {/*TODO: itemProp="fullnameUchred" не существует*/}
                        <span>Ф.И.О. руководителя:</span>
                        <span itemProp="fullnameUchred">Патрушев Дмитрий Николаевич</span>
                    </div>
                    <div className="space-x-3">
                        <span>Юридический адрес:</span>
                        <span itemProp="addressUchred">Россия, 107139, Москва, Орликов переулок, д. 1/11</span>
                    </div>
                    <div className="space-x-3">
                        {/*TODO: перечисление списка телефонов*/}
                        <span>Контактные телефоны:</span>
                        <Link itemProp="telUchred" href="tel: +74956078000" className="underline-offset-4 hover:underline">
                            +7 (495) 607-80-00
                        </Link>
                    </div>
                    <div className="space-x-3">
                        <span>Адрес сайта учредителя:</span>
                        <Link itemProp="websiteUchred" href="https://mcx.ru" className="underline-offset-4 hover:underline">
                            mcx.ru
                        </Link>
                    </div>
                    <div className="space-x-3">
                        <span>Адрес электронной почты учредителя:</span>
                        <Link itemProp="mailUchred" href="mailto:info@mcx.ru" className="underline-offset-4 hover:underline">
                            info@mcx.ru
                        </Link>
                    </div>
                </div>
            </div>
            <Separator />
            <div>
                <h1 className="text-2xl">Справочная информация об образовательной организации</h1>
                <div className="space-x-3">
                    <span>Адрес:</span>
                    <span itemProp="address">Россия, 394087, г. Воронеж, ул. Мичурина, 1</span>
                </div>
                <div className="space-x-3">
                    <span>График работы:</span>
                    <span itemProp="workTime">Мы не работаем!</span>
                </div>
                <div className="space-x-3">
                    <span>Телефон:</span>
                    <Link itemProp="telephone" href="tel: +74732538651" className="underline-offset-4 hover:underline">
                        +7 (473) 253-86-51
                    </Link>
                </div>
                <div className="space-x-3">
                    <span>Адрес электронной почты:</span>
                    <Link itemProp="email" href="mailto:main@vsau.ru" className="underline-offset-4 hover:underline">
                        main@vsau.ru
                    </Link>
                </div>
            </div>
            <Separator />
            <div>
                <h1 className="text-2xl">Представительства образовательной организации</h1>
                <p itemProp=""></p>
            </div>
            <Separator />
            <div>
                <h1 className="text-2xl">Филиалы образовательной организации</h1>
                <p itemProp="filInfo">Отсутствуют</p>
            </div>
        </>
    );
};

export default CommonPage;
