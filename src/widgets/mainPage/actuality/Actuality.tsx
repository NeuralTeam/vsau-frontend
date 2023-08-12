'use client'

import { actualityArray } from '@/TestArrays/actualityArray'
import ActualityItem from '@/shared/main/actuality/ActualityItem'
import { useState } from 'react'

const Actuality = () => {
	const [items] = useState(actualityArray)
	return (
		<div className='flex justify-start transition-all delay-200 items-center pr-10 flex-wrap'>
			{items.map(item => (
				<div className='px-5 min-w-[300px] py-3 mr-10 mb-10 bg-white rounded-lg cursor-pointer'>
					<ActualityItem id={item.id} img={item.img} title={item.title} />
				</div>
			))}
		</div>
	)
}

export default Actuality
