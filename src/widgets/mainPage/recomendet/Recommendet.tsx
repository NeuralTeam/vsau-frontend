'use client'

import { recommendetArray } from '@/TestArrays/recommendetItem'
import RecommendetItem from '@/shared/main/recommendet/RecommendetItem'
import { useState } from 'react'

const Recommendet = () => {
	const [items] = useState(recommendetArray)
	return (
		<div className='flex justify-start transition-all delay-200 items-center pr-10 flex-wrap'>
			{items.map(item => (
				<div className='px-5 min-w-[300px] py-3 mr-10 mb-10 bg-white rounded-lg cursor-pointer'>
					<RecommendetItem id={item.id} img={item.img} title={item.title} />
				</div>
			))}
		</div>
	)
}

export default Recommendet
