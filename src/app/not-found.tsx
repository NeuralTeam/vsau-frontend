import Link from "next/link";
import { Button } from "@/shared/ui/shadcn/button";

const NotFoundPage = () => {
    return (
        <div className="flex h-svh justify-center">
            <div className="flex flex-col">
                <div className="mt-20 flex flex-col items-center">
                    <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl">404</h2>
                    <p>Страница не найдена</p>
                    <Button variant="default" className="mt-5 max-w-[100px]">
                        <Link href="/">На главную</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
