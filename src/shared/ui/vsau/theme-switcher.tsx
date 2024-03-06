"use client";

import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/shadcn/dropdown-menu";
import { Button } from "@/shared/ui/shadcn/button";
import { Moon, Sun } from "lucide-react";
import * as React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

export const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Переключить тему</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")} className="flex justify-between">
                    <span>Light</span>
                    {theme == "light" && <IoCheckmarkOutline />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="flex justify-between">
                    <span>Dark</span>
                    {theme == "dark" && <IoCheckmarkOutline />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="flex justify-between">
                    <span>System</span>
                    {theme == "system" && <IoCheckmarkOutline />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
