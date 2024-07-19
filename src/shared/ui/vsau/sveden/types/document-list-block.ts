export interface IDocumentListBlock {
    title: string;
    itemProp: string;
    docList?: IDocument[];
    className?: string;
}

export interface IDocument {
    id: number;
    title: string;
    href?: string;
}
