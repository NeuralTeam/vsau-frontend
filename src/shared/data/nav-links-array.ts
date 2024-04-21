import InfoIcon from "@/shared/images/icons/raw-svg/info_icon.svg?url";

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

export interface INavGroup extends Array<INavItem> {}

export const navGroups: INavGroup[] = [
    [
        {
            id: 1,
            title: "Главная",
            icon: InfoIcon,
            href: "/"
        },
        {
            id: 2,
            title: "О ВУЗе",
            icon: InfoIcon,
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
                    href: "/"
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
            icon: InfoIcon,
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
            icon: InfoIcon,
            href: "/"
        },
        {
            id: 5,
            title: "Работникам",
            icon: InfoIcon,
            href: "/"
        },
        {
            id: 6,
            title: "ЭИОС",
            icon: InfoIcon,
            href: "/"
        }
    ]
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
