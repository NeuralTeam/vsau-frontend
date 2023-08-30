'use client'
import {newsArray} from '@/TestArrays/newsArray'
import NewsItem from '@/shared/news/NewsItem'
import {useState} from 'react'

const News = () => {
    const [items] = useState(newsArray)


    return (
        <div className='flex flex-nowrap news overflow-x-scroll transition-all '>
            {/*<div onClick={transitionHandler} className='w-10 h-10 bg-black absolute left-0'></div>*/}
            {/*<div onClick={transitionHandlerReset} className='w-10 h-10 bg-black absolute right-0'></div>*/}
            {items.map(item => (

                <NewsItem
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    text={item.text}
                    date={item.date}
                />

            ))}
        </div>
    )
}

export default News
