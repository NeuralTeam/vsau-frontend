import slider from '@/slider.png'
import Actuality from '@/widgets/mainPage/actuality/Actuality'
import News from '@/widgets/mainPage/news/News'
import Recommendet from '@/widgets/mainPage/recomendet/Recommendet'
import Image from 'next/image'

const page = () => {
	return (
		<div className='min-h-screen min-w-full bg-slate-100'>
			<div className='flex'>
				<Image
					src={slider}
					width={0}
					height={0}
					alt=''
					className='w-full slider'
				/>
			</div>
			<div className='w-full py-6 pl-10'>
				<div className='news '>
					<h1 className='text-[#3F3F3F66] py-8 text-3xl'> Новости</h1>
					<News />
				</div>
				<div className='actuality'>
					<h1 className='text-[#3F3F3F66] py-8 text-3xl'> Актуальное</h1>
					<Actuality />
				</div>
				<div className='actuality'>
					<h1 className='text-[#3F3F3F66] py-8 text-3xl'> Рекомендуемое</h1>
					<Recommendet />
				</div>
			</div>
		</div>
	)
}

export default page
