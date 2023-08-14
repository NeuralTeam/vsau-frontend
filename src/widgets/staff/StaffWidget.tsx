'use client'

import { adminArray } from '@/TestArrays/adminArray'
import AdminItem from '@/shared/admin/AdminItem'
import { useState } from 'react'

const StaffWidget = () => {
	const [items] = useState(adminArray)

	return (
		<div>
			<div className='flex items-center justify-start flex-wrap'>
				{items.map(item => (
					<AdminItem
						id={item.id}
						post={item.post}
						name={item.name}
						photo={item.photo}
						tel={item.tel}
						cabinet={item.cabinet}
						email={item.email}
					/>
				))}
			</div>
		</div>
	)
}

export default StaffWidget
