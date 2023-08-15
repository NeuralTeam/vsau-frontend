'use client'

import StructureItem from '@/shared/structure/StructureItem'
import { useState } from 'react'

const StructureSection = ({ ...item }: IStructure) => {
	const [items] = useState(item.depart)
	return (
		<div className='text-white  '>
			<div className='flex items-center justify-start mb-5'>
				<div className='h-1 w-4 mr-4 bg-white'></div>
				<p className='text-2xl font-semibold'>{item.title}</p>
			</div>
			<div className=''>
				{items.map(item => (
					<StructureItem {...item} />
				))}
			</div>
		</div>
	)
}

export default StructureSection
