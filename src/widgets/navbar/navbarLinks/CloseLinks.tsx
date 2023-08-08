import Image from 'next/image'
import { INavItem } from './interface'

const CloseLinks = ({ title, img, icon }: INavItem) => {
	return (
		<div>
			<div className='h-16 ref rounded flex items-center px-10 close-navbar-icons  justify-center text-white hover:bg-[#00000013]'>
				<Image
					src={icon}
					width={30}
					height={30}
					alt=''
					className='min-h-[25px] block min-w-[25px]'
				/>
			</div>
		</div>
	)
}

export default CloseLinks