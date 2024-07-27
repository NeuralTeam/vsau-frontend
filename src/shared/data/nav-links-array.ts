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
                title: "Персонал",
                href: "/23"
            },
            {
                id: 24,
                title: "Интерактивная карта университетского городка",
                href: "/interactive-map"
            }
        ]
    },
    {
        id: 3,
        title: "Абитуриентам",
        icon: ApplicantIcon,
        child: [
            {
                id: 31,
                title: "Бакалавриат и специалитет",
                href: "/31"
            },
            {
                id: 32,
                title: "Магистратура",
                href: "/32"
            },
            {
                id: 33,
                title: "Аспирантура",
                href: "/33"
            },
            {
                id: 34,
                title: "СПО",
                href: "/34"
            }
        ]
    },
    {
        id: 4,
        title: "Студентам",
        icon: StudentsIcon,
        child: [
            {
                id: 41,
                title: "Платные образовательные услуги",
                href: "/41"
            },
            {
                id: 42,
                title: "Стипендии и меры поддержки обучающихся",
                href: "/42"
            },
            {
                id: 43,
                title: "Оплата обучения",
                href: "/43"
            },
            {
                id: 44,
                title: "Вход в личный кабинет и расписание",
                href: "/44"
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
                title: "Заказ справок для сотрудников",
                href: "/51"
            },
            {
                id: 52,
                title: "Воинский учет",
                href: "/52"
            }
        ]
    },
    {
        id: 6,
        title: "ЭИОС",
        icon: EiosIcon,
        href: "/6"
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
