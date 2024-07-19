import { ITemplatePage } from "@/shared/ui/vsau/sveden/types";

export const TemplatePage = ({ title, children }: ITemplatePage) => {
    return (
        <main itemProp="copy" className="space-y-8 pr-[70px] pt-[50px]">
            <h1>{title}</h1>

            {children}
        </main>
    );
};
