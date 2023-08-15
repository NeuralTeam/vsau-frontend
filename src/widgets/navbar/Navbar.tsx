'use client'
import ShortLogo from '@/shared/icons/logo/ShortLogo'
import Arrow from '@/shared/icons/navbar/Arrow'
import Button from '@/shared/icons/navbar/Button'
import { useState } from 'react'
import NavLinks from './navbarLinks/NavLinks'

const Navbar = () => {
	const [openNav, setOpenNav] = useState(true)

	const handleClick = () => {
		const bodyClass = document.querySelector('body')
		const refTitle = document.querySelector('.all-refs')
		setOpenNav(!openNav)
		bodyClass?.classList.toggle('close-navbar')
		refTitle?.classList.toggle('close-navbar-refs')
	}
	return (
		<nav
			className={
				openNav
					? 'open h-screen relative overflow-x-hidden '
					: 'h-screen relative overflow-hidden'
			}
		>
			<div className='flex items-center justify-between px-5 py-5 w-full'>
				<div className=' flex'>
					<div className='w-[120px] relative transition-all'>
						<ShortLogo fill='white' width={120} />
					</div>

					{openNav ? (
						<div className='flex text-white justify-between transition-all visible top-auto relative  items-center w-[300px]'>
							<div className=''>
								<p className='no-wrap text-[11px] leading-3 min-w-[250px] max-w-[full] transition-all  font-thin ml-5 overflow-hidden max-h-[150px]'>
									Федеральное государственное бюджетное образовательное
									учреждение высшего образования
								</p>
								<p className='no-wrap text-[20px] mt-1 leading-[22px] min-w-[320px] max-w-[320px] transition-all  font-normal ml-5 overflow-hidden max-h-[150px]'>
									Воронежский государственный аграрный университет <br /> имени
									Петра I
								</p>
							</div>
						</div>
					) : (
						<div className='flex text-white  absolute justify-between delay-200 flex-nowrap right-full invisible transition-all items-center w-[0] overflow-hidden'>
							<p>
								Федеральное государственное бюджетное образовательное учреждение
								высшего образования
							</p>
							<p className='no-wrap text-[16px] transition-all  font-semibold ml-5 min-w-[250px]'>
								Воронежский государственный аграрный университет имени Петра I
							</p>
						</div>
					)}
				</div>
				<div
					onClick={handleClick}
					className='absolute -right-0 flex items-center justify-start cursor-pointer rounded-2xl top-[300px] '
				>
					<div className=''>
						<Button />
					</div>

					{openNav ? (
						<div className='absolute  left-1/3 transition-all delay-150 ease-in'>
							<Arrow fill='grey' width={100} />
						</div>
					) : (
						<div className='-rotate-180 absolute  left-1/3 transition-all delay-150 ease-in'>
							<Arrow fill='grey' width={100} />
						</div>
					)}
				</div>
			</div>
			<div className='all-refs'>
				<NavLinks />
			</div>
		</nav>
	)
}

export default Navbar
