'use client'
import React, {useState} from 'react'
import {teachersArray} from "@/TestArrays/teachersArray";
import TeachersItem from "@/shared/teachers/TeachersItem";

const TeachersWidget = () => {
    const [items] = useState(teachersArray)
    return (
        <div className="flex items-center justify-center">
            <ol className="w-full">
                {items.map(item => (
                    <li className="cursor-pointer mb-7 transition-all hover:bg-slate-100 hover:outline hover:outline-[#0f91d6]">
                        <TeachersItem id={item.id} name={item.name} post={item.post}/>
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default TeachersWidget
