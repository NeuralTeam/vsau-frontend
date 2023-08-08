import shedule from '@/shedule.png'
import Image from 'next/image'

const ActualityItem = ({ id, img, title }: IActuality) => {
	return (
		<div className='grid grid-cols-act w-full'>
			<div className=''>
				<Image src={shedule} alt='a ' className='min-w-[70px] h-[70px]' />
			</div>
			<p className='flex items-center justify-center'>{title}</p>
		</div>
	)
}

export default ActualityItem
