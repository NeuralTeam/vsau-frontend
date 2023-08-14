import agibalov from '@/agibalov.png'
import Image from 'next/image'
import StaffCircle from '../icons/staff/StaffCircle'

const AdminItem = ({ id, post, name, photo, tel, cabinet, email }: IStaff) => {
	return (
		<div className='mr-7 mb-10 p-10 min-h-[350px] max-w-[450px] relative cursor-pointer bg-[#0F91D6] text-white rounded-lg '>
			<div className=' h-7/12 mb-5'>
				<div className=' flex items-center justify-center min-h-[300px]'>
					<div className='absolute top-[10%] '>
						<StaffCircle fill='#ffffffbb' width={280} />
					</div>
					<div className='w-full flex items-center justify-center'>
						<Image
							src={agibalov}
							alt='photo'
							className=' rounded-full overflow-hidden absolute top-[15%] '
						/>
					</div>
				</div>
			</div>
			<div className='h-4/12'>
				<h3 className='text-3xl font-semibold'>{name}</h3>
				<p className='my-7 text-lg'>{post}</p>
				<div className=''>
					<p>
						{tel} / {cabinet} каб.
					</p>
					<p>{email}</p>
				</div>
			</div>
		</div>
	)
}

export default AdminItem
