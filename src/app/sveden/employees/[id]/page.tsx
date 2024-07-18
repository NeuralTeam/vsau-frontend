import { ShareBlock } from "@/shared/ui/vsau/share-block";

const SvedenEmployerPage = ({ params }: { params: { id: string } }) => {
    return (
        <div className="space-y-8 pr-[70px] pt-[50px]">
            <div></div>
            <div className="h-20 w-full rounded-[10px] bg-white">A</div>
            <ShareBlock />
        </div>
    );
};

export default SvedenEmployerPage;
