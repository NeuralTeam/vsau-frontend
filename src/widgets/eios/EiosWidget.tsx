'use client'
import { eiosMainArray, eiosSecondArray } from '@/TestArrays/eios'
import EiosItem from '@/shared/eios/EiosItem'
import { useState } from 'react'

const EiosWidget = () => {
	const [items] = useState(eiosMainArray)
	const [saItem] = useState(eiosSecondArray)

	return (
		<div className=''>
			<div className='mt-20 flex items-center justify-start'>
				{items.map(item => (
					<EiosItem {...item} />
				))}
			</div>
			<h3 className='text-2xl font-semibold w-full mb-10'>
				Доступ к электронным образовательным ресурсам и профессиональным базам
				данных
			</h3>
			<div className=''>
				{saItem.map(item => (
					<EiosItem {...item} />
				))}
			</div>
		</div>
	)
}

export default EiosWidget
