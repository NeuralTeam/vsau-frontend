import { HomeIcon, AboutIcon, ApplicantIcon, StudentsIcon, WorkersIcon, EiosIcon } from "@/shared/images/icons/navigation-menu";

export interface INavBaseItem {
    id: number;
    title: string;
    icon?: any;
    href?: string;
}

export interface INavSvedenItem extends INavBaseItem {
    href: string;
}

export interface INavItem extends INavBaseItem {
    child?: Array<INavBaseItem>;
}

export const navGroups: INavItem[] = [
    {
        id: 1,
        title: "Главная",
        icon: HomeIcon,
        href: "/"
    },
    {
        id: 2,
        title: "О ВУЗе",
        icon: AboutIcon,
        child: [
            {
                id: 21,
                title: "Наша история",
                href: "/about"
            },
            {
                id: 22,
                title: "Новости",
                href: "/news"
            },
            {
                id: 23,
                title: "Интерактивная карта университетского городка",
                href: "/map"
            },
            {
                id: 24,
                title: "Учебный процесс",
                href: "http://www.vsau.ru/uchebnyj-process/"
            },
            {
                id: 25,
                title: "Научная деятельность",
                href: "http://www.vsau.ru/nauchnaja-dejatelnost/"
            }
        ]
    },
    {
        id: 3,
        title: "Абитуриенту",
        icon: ApplicantIcon,
        href: "https://abit.vsau.ru/"
    },
    {
        id: 4,
        title: "Студентам",
        icon: StudentsIcon,
        child: [
            {
                id: 41,
                title: "Электронный каталог Научной библиотеки",
                href: "http://www.catalog.vsau.ru/"
            },
            {
                id: 42,
                title: "Портал дистанционого обучения",
                href: "http://www.distedu.vsau.ru/"
            },
            {
                id: 43,
                title: "Информация по изданиям типографии",
                href: "http://ts2k.vsau.ru/tgrafindex/"
            },
            {
                id: 44,
                title: "Оформление заявки на получение справки о стипендии онлайн",
                href: "http://comm.vsau.ru/order/"
            },
            {
                id: 45,
                title: "Социально-воспитательная работа",
                href: "http://svr.vsau.ru/"
            }
        ]
    },
    {
        id: 5,
        title: "Работникам",
        icon: WorkersIcon,
        child: [
            {
                id: 51,
                title: "Вакансии",
                href: "http://www.vsau.ru/vakansii/"
            }
        ]
    },
    {
        id: 6,
        title: "ЭИОС",
        icon: EiosIcon,
        href: "http://www.vsau.ru/dostup-v-internet/"
    }
];

export const navSvedenItems: INavSvedenItem[] = [
    {
        id: 1,
        title: "Основные сведения",
        href: "/sveden/common"
    },
    {
        id: 2,
        title: "Структура и органы управления образовательной организацией",
        href: "/sveden/struct"
    },
    {
        id: 3,
        title: "Документы",
        href: "/sveden/document"
    },
    {
        id: 4,
        title: "Образование",
        href: "/sveden/education"
    },
    {
        id: 5,
        title: "Образовательные стандарты и требования",
        href: "/sveden/eduStandarts"
    },
    {
        id: 6,
        title: "Руководство",
        href: "/sveden/managers"
    },
    {
        id: 7,
        title: "Педагогический состав",
        href: "/sveden/employees"
    },
    {
        id: 8,
        title: "Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда",
        href: "/sveden/objects"
    },
    {
        id: 9,
        title: "Стипендии и меры поддержки виды обучающихся",
        href: "/sveden/grants"
    },
    {
        id: 10,
        title: "Платные образовательные услуги",
        href: "/sveden/paid_edu"
    },
    {
        id: 11,
        title: "Финансово-хозяйственная деятельность",
        href: "/sveden/budget"
    },
    {
        id: 12,
        title: "Вакантные места для приема (перевода) обучающихся",
        href: "/sveden/vacant"
    },
    {
        id: 13,
        title: "Международное сотрудничество",
        href: "/sveden/inter"
    },
    {
        id: 14,
        title: "Организация питания в образовательной организации",
        href: "/sveden/catering"
    }
];
