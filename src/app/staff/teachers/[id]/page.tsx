'use client'

import React, {useState} from 'react'
import {useParams} from "next/navigation";
import {teachersArray} from "@/TestArrays/teachersArray";
import StaffIcon from "@/shared/icons/navbar/Staff";
import BackButton from "@/shared/buttons/BackButton";

const TeacherCurrent = () => {
    const params = useParams()

    const [items] = useState(teachersArray)

    const currentItem = items.find(item => item.id === params.id)
    const profileArray = currentItem?.teacherProfile
    return (
        <div className="min-h-screen pl-24 bg-slate-100 p-10">
            <div className="mb-10 flex items-end justify-start">
                <StaffIcon fill='#0f91d6' width={70}/>
                <h3 className="ml-3 text-3xl text-[#0f91d6] font-semibold">Персонал</h3>
                <BackButton/>
            </div>
            <div className="">
                <div className="p-10 bg-white w-11/12 mx-auto">
                    <div className=" py-10">
                        <h3 className='text-3xl text-[#0F91D6] font-semibold'>{currentItem?.name}</h3>
                        <p className="py-2">{currentItem?.post}</p>
                    </div>
                    <div>

                        <div className="">{
                            profileArray?.map(item => (
                                <div className='border-t-2 border-dashed border-slate-200'>
                                    <div className="text-sm py-3 text-slate-500">{item.areaName}</div>
                                    <div className="">
                                        {item.areaDescription.map(descr => (
                                            <p className='pb-3'>{descr.content}</p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TeacherCurrent
