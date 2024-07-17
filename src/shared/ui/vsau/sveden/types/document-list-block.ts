export interface IDocumentListBlock {
    title: string;
    itemProp?: string;
    docList?: IDocumentList[];
}

export interface IDocumentList {
    id: number;
    title: string;
    href?: string;
    itemProp: string;
}
