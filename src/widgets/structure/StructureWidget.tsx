'use client'

import { structureArray } from '@/TestArrays/structureArray'
import { useState } from 'react'
import StructureSection from './StructureSection'

function StructureWidget() {
	const [items] = useState(structureArray)
	return (
		<div className=' min-h-screen  w-11/12 '>
			{items.map(item => (
				<div className='bg-[#0F91D6] p-10 my-10 rounded-lg'>
					<StructureSection {...item} />
				</div>
			))}
		</div>
	)
}

export default StructureWidget
