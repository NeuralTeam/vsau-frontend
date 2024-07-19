export interface IAddressListBlock {
    title: string;
    itemProp: string;
    addressList?: IAddress[];
    className?: string;
}

export interface IAddress {
    id: number;
    address: string;
}
