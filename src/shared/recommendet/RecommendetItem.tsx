import recom from '@/recom.png'
import Image from 'next/image'

const RecommendetItem = ({ id, img, title }: IRecommendet) => {
	return (
		<div className='grid grid-cols-act w-full'>
			<div className=''>
				<Image src={recom} alt='a ' className='min-w-[70px] h-[70px]' />
			</div>
			<p className='flex items-center justify-center'>{title}</p>
		</div>
	)
}

export default RecommendetItem
