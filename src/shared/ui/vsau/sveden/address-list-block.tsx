import { Dot } from "lucide-react";
import { cn } from "@/shared/libs/shadcn-utils";
import { IAddressListBlock } from "@/shared/ui/vsau/sveden/types";

export const AddressListBlock = ({ title, itemProp, addressList, className }: IAddressListBlock) => {
    let data = <p itemProp={itemProp}>Отсутствует</p>;

    if (addressList && addressList.length == 1)
        data = (
            <div className="flex">
                <Dot className="min-h-6 min-w-6" />
                <p itemProp={itemProp}>{addressList[0]}</p>
            </div>
        );
    else if (addressList && addressList.length > 1)
        data = (
            <ul className="space-y-2">
                {addressList.map((addressEl, i) => (
                    <li key={i} className="flex">
                        <Dot className="min-h-6 min-w-6" />
                        <p itemProp={itemProp}>{addressEl}</p>
                    </li>
                ))}
            </ul>
        );

    return (
        <div className={cn("space-y-4 rounded-[10px] bg-white p-8 text-[18px]", className)}>
            <p className="text-[24px] font-semibold leading-[24px] text-[#0F91D6]">{title}</p>

            {data}
        </div>
    );
};
