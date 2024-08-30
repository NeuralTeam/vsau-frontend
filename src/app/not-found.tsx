import Link from "next/link";
import { Button } from "@/shared/ui/shadcn/button";
import Image from "next/image";
import notFound from "@/shared/images/plugs/not_found.png";

const NotFoundPage = () => {
    return (
        <div className="flex h-svh items-center">
            <div className="flex justify-center">
                <Image src={notFound} alt="#" priority={true} placeholder="blur" className="h-1/3 w-1/3" />
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-[200px] font-bold leading-[180px] text-[#0F91D6]">404</p>
                    <p className="text-[30px] font-semibold text-[#0F91D6]">Страница не найдена</p>
                    <p className="w-[300px] text-start text-[16px] leading-5">Страница, на которую вы пытаетесь попасть не существует или удалена</p>
                    <Button variant="default" className="mt-5 min-w-[200px] max-w-[200px] bg-[#0F91D6]">
                        <Link href="/">На главную</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
