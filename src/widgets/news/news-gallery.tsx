import Image, { StaticImageData } from "next/image";
import { NewsOpenPhotoDialog } from "@/widgets/news/news-open-photo-dialog";
import { DownloadIcon } from "@/shared/images/icons/other";

export function NewsGallery({ mediaId, photoList }: { mediaId?: number; photoList: StaticImageData[] }) {
    return (
        <div className="space-y-5">
            <div className="grid w-full grid-cols-4 gap-5">
                {photoList.map((photo, i) => (
                    <NewsOpenPhotoDialog key={i} isOpen={mediaId == i + 100} mediaId={i + 100} photo={photo}>
                        <Image
                            src={photo}
                            priority={false}
                            placeholder="blur"
                            alt="#"
                            className="aspect-video min-h-[100px] rounded-[10px] object-cover transition duration-200 hover:scale-105"
                        />
                    </NewsOpenPhotoDialog>
                ))}
            </div>

            <button className="group flex w-fit items-center space-x-3 rounded-[10px] bg-[#E3E3E3FF] px-10 py-3 duration-300 hover:bg-[#767676] hover:text-[#FFFFFF] active:scale-90">
                <DownloadIcon width={20} height={20} fill="#000000" className="duration-300 group-hover:fill-[#FFFFFF]" />
                <p>Скачать альбом</p>
            </button>
        </div>
    );
}
