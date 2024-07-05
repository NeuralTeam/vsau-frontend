import InfoIcon from "@/shared/images/icons/raw-svg/info_icon.svg?url";
import HomeIcon from "@/shared/images/icons/raw-svg/home_icon.svg?url";
import AboutIcon from "@/shared/images/icons/raw-svg/about_icon.svg?url";
import AbitIcon from "@/shared/images/icons/raw-svg/abit_icon.svg?url";
import StudentIcon from "@/shared/images/icons/raw-svg/student_icon.svg?url";
import WorkerIcon from "@/shared/images/icons/raw-svg/worker_icon.svg?url";
import EiosIcon from "@/shared/images/icons/raw-svg/eios_icon.svg?url";

export interface INavBaseItem {
    id: number;
    title: string;
    icon: any;
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
                icon: InfoIcon,
                href: "/21"
            },
            {
                id: 22,
                title: "Новости",
                icon: InfoIcon,
                href: "/news"
            },
            {
                id: 23,
                title: "Персонал",
                icon: InfoIcon,
                href: "/23"
            },
            {
                id: 24,
                title: "Интерактивная карта университетского городка",
                icon: InfoIcon,
                href: "/24"
            }
        ]
    },
    {
        id: 3,
        title: "Абитуриентам",
        icon: AbitIcon,
        child: [
            {
                id: 31,
                title: "Бакалавриат и специалитет",
                icon: InfoIcon,
                href: "/31"
            },
            {
                id: 32,
                title: "Магистратура",
                icon: InfoIcon,
                href: "/32"
            },
            {
                id: 33,
                title: "Аспирантура",
                icon: InfoIcon,
                href: "/33"
            },
            {
                id: 34,
                title: "СПО",
                icon: InfoIcon,
                href: "/34"
            }
        ]
    },
    {
        id: 4,
        title: "Студентам",
        icon: StudentIcon,
        child: [
            {
                id: 41,
                title: "Платные образовательные услуги",
                icon: InfoIcon,
                href: "/41"
            },
            {
                id: 42,
                title: "Стипендии и меры поддержки обучающихся",
                icon: InfoIcon,
                href: "/42"
            },
            {
                id: 43,
                title: "Оплата обучения",
                icon: InfoIcon,
                href: "/43"
            },
            {
                id: 44,
                title: "Вход в личный кабинет и расписание",
                icon: InfoIcon,
                href: "/44"
            }
        ]
    },
    {
        id: 5,
        title: "Работникам",
        icon: WorkerIcon,
        child: [
            {
                id: 51,
                title: "Заказ справок для сотрудников",
                icon: InfoIcon,
                href: "/51"
            },
            {
                id: 52,
                title: "Воинский учет",
                icon: InfoIcon,
                href: "/52"
            }
        ]
    },
    {
        id: 6,
        title: "ЭИОС",
        icon: EiosIcon,
        href: "/eios"
    }
];

export const navSvedenItems: INavSvedenItem[] = [
    {
        id: 1,
        title: "Основные сведения",
        icon: InfoIcon,
        href: "/sveden/common"
    },
    {
        id: 2,
        title: "Структура и органы управления образовательной организацией",
        icon: InfoIcon,
        href: "/sveden/struct"
    },
    {
        id: 3,
        title: "Документы",
        icon: InfoIcon,
        href: "/sveden/document"
    },
    {
        id: 4,
        title: "Образование",
        icon: InfoIcon,
        href: "/4"
    },
    {
        id: 5,
        title: "Руководство",
        icon: InfoIcon,
        href: "/5"
    },
    {
        id: 6,
        title: "Педагогический состав",
        icon: InfoIcon,
        href: "/6"
    },
    {
        id: 7,
        title: "Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда",
        icon: InfoIcon,
        href: "/7"
    },
    {
        id: 8,
        title: "Платные образовательные услуги",
        icon: InfoIcon,
        href: "/8"
    },
    {
        id: 9,
        title: "Финансово-хозяйственная деятельность",
        icon: InfoIcon,
        href: "/9"
    },
    {
        id: 10,
        title: "Вакантные места для приема (перевода) обучающихся",
        icon: InfoIcon,
        href: "/10"
    },
    {
        id: 11,
        title: "Стипендии и меры поддержки виды обучающихся",
        icon: InfoIcon,
        href: "/11"
    },
    {
        id: 12,
        title: "Международное сотрудничество",
        icon: InfoIcon,
        href: "/12"
    },
    {
        id: 13,
        title: "Организация питания в образовательной организации",
        icon: InfoIcon,
        href: "/13"
    }
];
