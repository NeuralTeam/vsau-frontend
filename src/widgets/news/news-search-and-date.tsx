"use client";

import { cn } from "@/shared/libs/shadcn-utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/shadcn/popover";
import { CalendarIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Separator } from "@/shared/ui/shadcn/separator";
import { usePostsStore } from "@/shared/providers/posts-store-provider";

const SectionSearchAndDate = () => {
    const { setSearchParams, searchParams, startDate, endDate, search } = usePostsStore((state) => state);

    const defaultClassNames = getDefaultClassNames();
    const [date, setDate] = useState<DateRange | undefined>();

    const xxx = (date: DateRange | undefined) => {
        let startDate = null;
        let endDate = null;

        if (date?.from) startDate = date.from.getTime() / 1000;
        if (date?.to) endDate = date.to.getTime() / 1000;

        setSearchParams(searchParams, startDate, endDate, search);
        setDate(date);
    };

    const handleSearchPost = async (e: FormEvent<HTMLInputElement>) => {
        setSearchParams(searchParams, startDate, endDate, (e.target as HTMLInputElement).value);
    };

    return (
        <div className="space-y-4 rounded-[10px] bg-white px-6 py-4">
            <input onInput={handleSearchPost} placeholder="Найти по новостям" className="px-4 py-2 outline-none" />
            <Separator />
            <div className={cn("grid gap-2")}>
                <Popover>
                    <PopoverTrigger asChild>
                        <button
                            id="date"
                            className={cn(
                                "flex w-[300px] items-center justify-start px-4 py-2 text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon size={20} className="mb-1 mr-2 h-5 w-5" />
                            {date?.from && date?.to ? (
                                date.from != date.to ? (
                                    <>
                                        {format(date.from, "dd LLL y", { locale: ru })} — {format(date.to, "dd LLL y", { locale: ru })}
                                    </>
                                ) : (
                                    format(date.from, "dd LLL y", { locale: ru })
                                )
                            ) : (
                                <span>Выберите дату</span>
                            )}
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                        <DayPicker
                            locale={ru}
                            captionLayout="dropdown"
                            mode="range"
                            numberOfMonths={2}
                            pagedNavigation
                            weekStartsOn={1}
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={xxx}
                            classNames={{
                                ...defaultClassNames,
                                root: cn(defaultClassNames.root, "p-4")
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default SectionSearchAndDate;
