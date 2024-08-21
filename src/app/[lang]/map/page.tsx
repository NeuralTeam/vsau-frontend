import Image from "next/image";
import mapImage from "@/shared/images/plugs/map.png";
import Link from "next/link";

const MapPage = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-1 pr-[70px] pt-[50px]">
            <h1 className="text-3xl font-bold">Карта университетского городка</h1>
            <Link
                href="https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B8%D1%87%D1%83%D1%80%D0%B8%D0%BD%D0%B0,+1,+%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6,+%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+394087/@51.7128539,39.2240379,673m/data=!3m2!1e3!4b1!4m6!3m5!1s0x413b25f7d62daf53:0x3e354d70ae5b378c!8m2!3d51.7128539!4d39.2266128!16s%2Fg%2F11c5nzndyb?hl=ru&entry=ttu"
                target="_blank"
                className="text-xl font-bold underline-offset-2 hover:underline"
            >
                Карты Google
            </Link>

            <div className="h-1/2 pt-8">
                <Image src={mapImage} alt="Карта главного корпуса ВГАУ" className="object-cover" />
            </div>
        </div>
    );
};

export default MapPage;
