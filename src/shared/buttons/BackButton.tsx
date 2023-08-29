import React from 'react'
import Arrow from "@/shared/icons/navbar/Arrow";
import {useRouter} from "next/navigation";

const BackButton = () => {
    const router = useRouter()
    return (
        <div
            onClick={() => router.back()}
            className='px-5 py-3 flex items-center justify-between ml-10 bg-slate-200 rounded cursor-pointer transition-all hover:bg-slate-100'>
            <Arrow fill={'rgb(91,96,103)'} width={10}/>
            <p className='ml-5'>Назад</p>
        </div>
    )
}
export default BackButton
