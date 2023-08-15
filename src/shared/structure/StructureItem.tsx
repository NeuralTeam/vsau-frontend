'use client'

import { useState } from 'react'

const StructureItem = ({ ...item }: IStructureDepart) => {
	const [items] = useState(item.admin)
	return (
		<div className='p-10 bg-white text-white rounded-lg mb-10'>
			<div className='text-[#0F91D6] text-xl font-semibold  flex items-center justify-start'>
				<div className='h-1 w-4 mr-4 bg-[#0F91D6]'></div>
				<p>{item.name}</p>
			</div>
			<hr className='bg-[#0F91D6] h-[2px] my-4' />

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
