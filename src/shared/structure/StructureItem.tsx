'use client'

import { useState } from 'react'
import Arrow from '../icons/arrow/Arrow'

const StructureItem = ({ ...item }: IStructureDepart) => {
	const [items] = useState(item.admin)
	const [open, setOpen] = useState(false)

	const styleItemClose = {
		height: '100px',
	}
	const styleItemOpen = {
		height: '100%',
	}
	const openHandler = () => {
		setOpen(!open)
	}

	return (
		<div
			style={open ? styleItemOpen : styleItemClose}
			className='p-10 bg-white text-white  overflow-hidden rounded-lg mb-10'
		>
			<div
				onClick={openHandler}
				className='text-[#0F91D6] text-xl cursor-pointer  font-semibold  flex items-center justify-start'
			>
				<div className={open ? 'mr-3 rotate-90' : 'mr-3'}>
					<Arrow fill='#0F91D6' width={15} />
				</div>
				<p>{item.name}</p>
			</div>
			<hr className='bg-[#0F91D6] h-[2px] my-8' />

			<div className='text-black'>
				<h4 className='text-xl '>{item.name}</h4>
				<div className=' w-full text-center mt-10 text-sm'>
					{items.map(item => (
						<div className=''>
							<div className='grid grid-cols-8 justify-between w-full'>
								<div className='w-9/12'>
									Наименование органа управления /структурного подразделения
								</div>
								<div className='w-9/12'>
									ФИО руководителя структурного подразделения
								</div>
								<div className='w-9/12'>
									Должность руководителя структурного подразделения
								</div>
								<div className='w-9/12'>
									Адрес местонахождения структурного подразделения
								</div>
								<div className='w-9/12'>Телефон</div>
								<div className='w-9/12'>
									Адрес электронной почты структурного подразделения
								</div>
								<div className='w-9/12'>
									Положение об органе управления /о структурном подразделении
								</div>
								<div className='w-9/12'>
									Адрес официального сайта структурного подразделения
								</div>
							</div>
							<hr className='bg-[#0F91D6] h-[2px] my-6' />
							<div className='grid grid-cols-8 justify-between w-full'>
								<p className='text-center text-sm w-9/12  overflow-hidden'>
									{item.adminOrg}
								</p>
								<p className='text-center text-sm w-9/12  overflow-hidden'>
									{item.adminName}
								</p>
								<p className='text-center text-sm w-9/12  overflow-hidden'>
									{item.post}
								</p>
								<p className='text-center text-sm w-9/12  overflow-hidden'>
									{item.address}
								</p>
								<p className='text-center text-sm w-9/12  overflow-hidden'>
									{item.tel}
								</p>
								<p className='text-center text-sm w-9/12  overflow-hidden'>
									{item.email}
								</p>
								<p className='text-center text-sm w-9/12  overflow-hidden'>
									{item.docHref}
								</p>
								<p className='text-center text-sm w-9/12 '>{item.ofWebSite}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default StructureItem
