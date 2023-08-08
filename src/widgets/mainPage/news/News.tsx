'use client'
import { newsArray } from '@/TestArrays/newsArray'
import NewsItem from '@/shared/news/NewsItem'
import { useState } from 'react'

const News = () => {
	const [items] = useState(newsArray)
	return (
		<div className='flex flex-nowrap news overflow-x-scroll'>
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
