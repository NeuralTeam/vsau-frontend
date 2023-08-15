'use client'

import { infEduArray } from '@/TestArrays/infEduArray'
import DocumentItem from '@/shared/documents/DocumentItem'
import { useState } from 'react'

const InfEduWidget = () => {
	const [items] = useState(infEduArray)
	return (
		<div className='mt-10 flex items-center justify-start flex-wrap'>
			{items.map(item => (
				<div className='min-w-[400px]'>
					<DocumentItem id={item.id} title={item.title} />
				</div>
			))}
		</div>
	)
}

export default InfEduWidget
