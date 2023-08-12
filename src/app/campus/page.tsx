import map from '@/map.png'
import CampusIcon from '@/shared/icons/navbar/Campus'
import Image from 'next/image'

const Campus = () => {
	return (
		<div className='bg-slate-100 min-h-screen px-10'>
			<div className='py-20 flex items-end justify-start'>
				<CampusIcon fill='#0F91D6' width={50} />
				<h1 className='text-4xl text-[#0F91D6] font-semibold ml-4'>
					Университетский городок
				</h1>
			</div>
			<div className='flex items-center justify-center pt-10'>
				<Image src={map} alt='' />
			</div>
		</div>
	)
}

export default Campus
