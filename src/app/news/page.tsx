'use client'

import {newsArray} from '@/TestArrays/newsArray'
import news from '@/news.png'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

const News = () => {
    const [items] = useState<INews[]>(newsArray)
    return (
        <div className='bg-slate-100 pl-24'>
            <div className=''>
                <p className='py-10 mx-10 font-bold text-xl'>Декабрь 2021</p>
                <div className='flex flex-wrap mx-10 transition-all text-blue'>
                    {items.map(item => (
                        <div className=' mr-7 mb-7 w-[320px] h-[350px] relative bg-white rounded-lg'>
                            <Image
                                src={news}
                                alt='#'
                                width={320}
                                height={0}
                                className='w-full'
                            />
                            <div className='p-3'>
                                <Link
                                    href={`news/${item.id}`}
                                    className='cursor-pointer hover:underline'
                                >
                                    <b>{item.title}</b>
                                </Link>
                                <div className='flex absolute w-[90%] bottom-2 justify-between  mt-7'>
                                    <p>{item.date}</p>
                                    <Link href='news/#'>Читать </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News
