import Link from "next/link";
import { cn } from "@/shared/libs/shadcn-utils";
import {
    NavigationMenu as NavigationMenuShadcn,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/shared/ui/shadcn/navigation-menu";
import { Logo } from "@/shared/images/logo/logo";

export const NavigationMenu = ({ pathname }: { pathname: string | null }) => {
    return (
        <NavigationMenuShadcn>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Об Университете</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-5">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/about"
                                        className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                    >
                                        <Logo width={32} height={32} fillColor="" className="h-16 w-16 fill-foreground" />
                                        <div className="mb-2 mt-4 text-lg font-medium">Наш ВГАУ</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Один из самых красивых, старинных и продвинутых обучающих учреждений в стране.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/news" title="Новости" description="И мероприятия" />
                            <ListItem href="/stuff" title="Персонал" description="И преподавательский состав" />
                            <ListItem href="/contacts" title="Контакты" description="И документы" />
                            <ListItem href="/infrastructure" title="Инфраструктура" description="И прочее" />
                            <ListItem href="/sveden" title="Сведения об образовательной организации" />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Образование</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                            <ListItem href="/" title="Студентам" description="Сдать сессию на отлично" />

                            <ListItem href="/" title="Аспирантам" description="Понять зачем им это нужно" />

                            <ListItem href="/" title="Выпускникам" description="Поздравления и соболезнования!" />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                        <Link href="/">Абитуриентам</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                        <Link href="/">Работникам</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                        <Link href="/">ЭИОС</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenuShadcn>
    );
};

const ListItem = ({
    title,
    href,
    description,
    className
}: Readonly<{
    title: string;
    href: string;
    description?: string;
    className?: string;
}>) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    {description && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{description}</p>}
                </Link>
            </NavigationMenuLink>
        </li>
    );
};
