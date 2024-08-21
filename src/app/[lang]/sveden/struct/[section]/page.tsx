import Link from "next/link";

const SvedenStructSectionPage = () => {
    // TODO: <ul className="h-svh space-y-10 overflow-hidden overflow-y-scroll">
    return (
        <main>
            <ul className="space-y-10">
                {Array.from({ length: 10 }).map((_, i) => (
                    <li key={i} className="rounded-[10px] bg-white p-8">
                        <p className="text-[23px] font-semibold text-[#0F91D6]">Отдел земельно-имущественных отношений</p>
                        <div className="mt-4 space-y-2">
                            <p className="text-[22px] font-semibold leading-[25px]">Яурова Ирина Васильевна</p>
                            <p className="text-[16px] font-normal leading-[16px]">Начальник отдела</p>
                        </div>
                        <div className="mt-4 space-y-0.5 text-[16px] font-normal leading-[18px]">
                            <p>Корпус главный, ауд. 139</p>
                            <p>8-900-944-81-03</p>
                            <p>yaurova@adm.vsau.ru</p>
                        </div>
                        <div className="mt-5 space-x-8">
                            {/* TODO: добавить иконку "Файл"*/}
                            <Link href="#" className="rounded-[10px] bg-[#E3E3E3FF] px-4 py-2">
                                Положение о структуре управления
                            </Link>

                            {/*TODO: копировать ссылку сделать справа от заголовка в виде иконки*/}
                            {/*TODO: добавить иконку "Поделиться"*/}
                            <Link href="#" className="rounded-[10px] bg-[#E3E3E3FF] px-4 py-2">
                                Поделиться
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default SvedenStructSectionPage;
