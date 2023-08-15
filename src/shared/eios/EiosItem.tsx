'use client'
import { useState } from 'react'
import DocumentsIcon from '../icons/navbar/Documents'

const EiosItem = ({ ...item }: IEios) => {
	const [items] = useState(item.description)
	const [hr, setHr] = useState(false)

	return (
		<div className='bg-white mr-10 mb-10 px-5 py-10 w-[450px] rounded-lg '>
			<div>
				<div className='w-[70px] h-[70px] relative'>
					<div className='z-30 absolute bottom-0 bg-white'>
						<DocumentsIcon fill='#0F91D6' width={40} />
					</div>
					<div className='absolute left-1 bottom-1 z-0'>
						<DocumentsIcon fill='#96c8e353' width={50} />
					</div>
				</div>
				<h2 className='mt-6 w-3/4 font-semibold cursor-pointer hover:underline'>
					{item.title}
				</h2>
			</div>

			<div className=''>
				{item.hasOwnProperty('description') ? (
					<hr className='w-full my-7' />
				) : (
					''
				)}
				{items?.map(item => (
					<div className='mb-2 cursor-pointer hover:underline font-semibold'>
						{item.title}
					</div>
				))}
			</div>
		</div>
	)
}

export default EiosItem
