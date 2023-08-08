import image from '@/news.png'
import Image from 'next/image'
import Link from 'next/link'

const NewsItem = ({ img, title, text, date, id }: INews) => {
	return (
		<div className=' mr-7 min-w-[320px] h-[350px] relative bg-white rounded-lg'>
			<Image src={image} alt='#' width={320} height={0} />
			<div className='p-3'>
				<Link href={`news/${id}`} className='cursor-pointer hover:underline'>
					<b>{title}</b>
				</Link>
				<div className='flex absolute w-[90%] bottom-2 justify-between  mt-7'>
					<p>{date}</p>
					<Link href={`news/${id}`}>
						<div className='flex items-center hover:underline'>
							<p className='mr-2'>Читать</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NewsItem
