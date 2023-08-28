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
                    <li className="">
                        <TeachersItem id={item.id} name={item.name} post={item.post}/>
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default TeachersWidget
