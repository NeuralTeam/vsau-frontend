'use client'
import { historyItems } from '@/TestArrays/historyArray'
import HistoryItems from '@/shared/history/HistoryItems'
import { useState } from 'react'

const HistoryWidget = () => {
	const [items] = useState(historyItems)
	return (
		<div className='p-10'>
			<div className='flex flex-wrap items-center '>
				{items.map(item => (
					<HistoryItems {...item} />
				))}
			</div>
		</div>
	)
}

export default HistoryWidget
