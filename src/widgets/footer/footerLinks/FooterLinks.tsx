'use client'
import React, {useState} from 'react'
import {navItem} from "@/TestArrays/navLinksArray";
import Link from "next/link";

const FooterLinks = () => {
    const [items] = useState(navItem)
    const [infItems] = useState([
        {
            id: '1',
            title: '2005-2023 ФГБОУ ВО Воронежский ГАУ'
        },
        {
            id: '2',
            title: 'Тел: (473) 253-86-51; 253-86-31'
        },
        {
            id: '3',
            title: 'Россия, 394087, Воронеж, ул. Мичурина, 1'
        },
        {
            id: '4',
            title: 'Факс: (473) 253-86-51 / Эл. почта: main@vsau.ru'
        }
    ])
    return (
        <div className='py-10 px-5 w-9/12 ml-[25%]'>
            <div className='flex items-center justify-start  text-sm'>
                {items.map(item => (
                    <div key={item.id} className='mr-4 text-white'>
                        <Link className='' href={item.path}><p>{item.title}</p></Link>
                    </div>
                ))}

            </div>
            <div className=" ">
                <div className="grid grid-cols-2 text-slate-300 mt-10 justify-center items-center text-sm">
                    {
                        infItems.map(item => (
                            <p className='my-2'>{item.title}</p>
                        ))
                    }</div>
            </div>
        </div>
    )
}
export default FooterLinks
