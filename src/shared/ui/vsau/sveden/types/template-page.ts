import { ReactNode } from "react";

export interface ITemplatePage {
    title: string;
    children?: Readonly<ReactNode>;
}
