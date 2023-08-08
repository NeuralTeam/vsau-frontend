import Image from 'next/image'
import { INavItem } from './interface'

const Links = ({ title, img, icon }: INavItem) => {
	return (
		<div>
			<div className='h-16 ref rounded flex items-center close-navbar-icons justify-start text-white hover:bg-[#00000013]'>
				<div className='px-10 image grid items-center justify-start grid-cols-nav min-w-[500px]'>
					<Image
						src={icon || img}
						width={30}
						height={30}
						alt=''
						className='min-h-[25px] block min-w-[25px] '
					/>

					<p className='mx-[15px] block text-lg'>{title}</p>
				</div>
			</div>
		</div>
	)
}

export default Links
