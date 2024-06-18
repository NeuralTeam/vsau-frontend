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
                href: "/"
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
                href: "/"
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
                href: "/"
            },
            {
                id: 32,
                title: "Магистратура",
                icon: InfoIcon,
                href: "/"
            },
            {
                id: 33,
                title: "Аспирантура",
                icon: InfoIcon,
                href: "/"
            },
            {
                id: 34,
                title: "СПО",
                icon: InfoIcon,
                href: "/"
            }
        ]
    },
    {
        id: 4,
        title: "Образование",
        icon: StudentIcon,
        href: "/"
    },
    {
        id: 5,
        title: "Работникам",
        icon: WorkerIcon,
        href: "/"
    },
    {
        id: 6,
        title: "ЭИОС",
        icon: EiosIcon,
        href: "/"
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
    }
];
