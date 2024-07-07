import Image, { StaticImageData } from "next/image";
import { NewsOpenPhotoDialog } from "@/widgets/news/news-open-photo-dialog";
import { Download } from "lucide-react";

export function NewsGallery({ mediaId, photoList }: { mediaId?: number; photoList: StaticImageData[] }) {
    console.log(mediaId);
    return (
        <div className="space-y-5">
            <div className="grid w-full grid-cols-4 gap-5">
                {photoList.map((photo, i) => (
                    <NewsOpenPhotoDialog key={i} isOpen={mediaId == i + 100} photo={photo}>
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

            <button className="flex w-fit items-center space-x-2 rounded-[10px] bg-[#E3E3E3FF] px-6 py-3">
                <Download size={24} strokeWidth={3} />
                <p>Скачать альбом</p>
            </button>
        </div>
    );
}
