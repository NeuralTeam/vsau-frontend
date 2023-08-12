'use client'

import { documentsItems } from '@/TestArrays/documents'
import DocumentItem from '@/shared/documents/DocumentItem'
import { useState } from 'react'

const DocumentWidget = () => {
	const [items] = useState(documentsItems)
	return (
		<div className='flex items-center justify-start flex-wrap'>
			{items.map(item => (
				<DocumentItem id={item.id} title={item.title} />
			))}
		</div>
	)
}

export default DocumentWidget
