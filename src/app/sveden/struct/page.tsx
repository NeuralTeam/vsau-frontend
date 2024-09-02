import Link from "next/link";
import { IStructChapter } from "@/app/sveden/struct/layout";
import { slugifyReplace } from "@/shared/libs/slugify";

interface IStructData {
    id: number;
    level: number;
    name: string;
    manager_name: string | null;
    manager_post: string | null;
    address: string | null;
    website: string | null;
    email: string | null;
    doc_link: string | null;
}

const SvedenStructPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/struct`);
    const struct: IStructChapter[] = await response.json();

    const responseData = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/sveden/struct/list`);
    const structData: IStructData[] = await responseData.json();

    return (
        <main className="space-y-10">
            {struct.map(
                (chapter) =>
                    chapter.parent !== null && (
                        <div key={chapter.id} className="space-y-5">
                            <p
                                id={slugifyReplace(chapter.name, { lower: true, strict: true })}
                                className="rounded-[10px] bg-white p-4 text-3xl font-semibold"
                            >
                                {chapter.name}
                            </p>
                            <ul className="space-y-5">
                                {structData.map(
                                    (el) =>
                                        chapter.id === el.level &&
                                        el.manager_name !== null && (
                                            <li key={el.id} itemProp="structOrgUprav" className="rounded-[10px] bg-white p-8">
                                                <p itemProp="name" className="text-[23px] font-semibold text-[#0F91D6]">
                                                    {el.name}
                                                </p>
                                                <div className="mt-4 space-y-2">
                                                    <p itemProp="fioPost" className="text-[22px] font-semibold leading-[25px]">
                                                        {el.manager_name}
                                                    </p>
                                                    <p itemProp="post" className="text-[16px] font-normal leading-[16px]">
                                                        {el.manager_post}
                                                    </p>
                                                </div>
                                                <div className="mt-4 space-y-1 text-[16px] font-normal leading-[18px]">
                                                    <p itemProp="addressStr">{el.address}</p>
                                                    <Link
                                                        itemProp="email"
                                                        href={`mailto:${el.email}`}
                                                        className="block font-normal underline-offset-2 hover:underline"
                                                    >
                                                        {el.email}
                                                    </Link>
                                                    {el.website !== null && (
                                                        <Link
                                                            itemProp="site"
                                                            href={el.website}
                                                            className="block font-normal underline-offset-2 hover:underline"
                                                        >
                                                            Сайт
                                                        </Link>
                                                    )}
                                                </div>
                                                <div className="mt-5 space-x-8">
                                                    {/* TODO: добавить иконку "Файл"*/}
                                                    {el.doc_link !== null ? (
                                                        <Link
                                                            itemProp="divisionClauseDocLink"
                                                            target="_blank"
                                                            href={el.doc_link}
                                                            className="rounded-[10px] bg-[#E3E3E3] px-4 py-2"
                                                        >
                                                            Положение о структуре управления
                                                        </Link>
                                                    ) : (
                                                        <span
                                                            itemProp="divisionClauseDocLink"
                                                            className="cursor-not-allowed rounded-[10px] bg-[#E3E3E3] px-4 py-2"
                                                        >
                                                            Положение о структуре управления отсутствует
                                                        </span>
                                                    )}

                                                    {/*TODO: копировать ссылку сделать справа от заголовка в виде иконки*/}
                                                    {/*TODO: добавить иконку "Поделиться"*/}
                                                    <Link href="#" className="rounded-[10px] bg-[#E3E3E3] px-4 py-2">
                                                        Поделиться
                                                    </Link>
                                                </div>
                                            </li>
                                        )
                                )}
                            </ul>
                        </div>
                    )
            )}

            <div itemProp="filInfo" hidden>
                <p itemProp="nameFil">Отсутствует</p>
                <p itemProp="addressFil">Отсутствует</p>
                <p itemProp="workTimeFil">Отсутствует</p>
                <p itemProp="telephoneFil">Отсутствует</p>
                <p itemProp="emailFil">Отсутствует</p>
                <p itemProp="websiteFil">Отсутствует</p>
            </div>
            <div itemProp="repInfo" hidden>
                <p itemProp="nameRep">Отсутствует</p>
                <p itemProp="addressRep">Отсутствует</p>
                <p itemProp="workTimeRep">Отсутствует</p>
                <p itemProp="telephoneRep">Отсутствует</p>
                <p itemProp="emailRep">Отсутствует</p>
                <p itemProp="websiteRep">Отсутствует</p>
            </div>
        </main>
    );
};

export default SvedenStructPage;
