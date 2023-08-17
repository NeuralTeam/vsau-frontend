import cow from '@/cow.png'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='bg-slate-100 min-h-screen flex items-center justify-center'>
			<div className=''>
				<Image src={cow} alt='Cow' width={400} />
			</div>
			<div className='ml-32'>
				<h1 className='text-[#0F91D6] text-[150px] text-center font-bold'>
					404
				</h1>
				<p className='text-[#0F91D6] text-center  text-3xl mb-20'>
					Страница не найдена
				</p>
				<Link
					href={`/`}
					className='rounded w-[400px] text-white mx-auto bg-[#0f91d6] px-36 text-lg py-5'
				>
					На главную
				</Link>
			</div>
		</div>
	)
}

export default NotFound
