import Link from "next/link";

const RootFooter = () => {
    return (
        <div className="flex h-full w-full flex-col border-y p-5">
            {/*<ul className="flex justify-center space-x-10">*/}
            {/*    <li>Я карта</li>*/}
            {/*    <li>Я карта</li>*/}
            {/*</ul>*/}
            <div className="flex flex-col items-center">
                <p>© 2024 ВГАУ - Воронежский государственный аграрный университет</p>
                <p>Все права на материалы сайта vsau.ru принадлежат ВГАУ</p>

                <p className="mt-5">
                    Сайт разработан командой{" "}
                    <Link target="_blank" href="https://neuralteam.ru" className="underline-offset-4 hover:underline">
                        NeuralTeam
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RootFooter;
