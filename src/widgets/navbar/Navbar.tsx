'use client'
import ShortLogo from '@/shared/icons/logo/ShortLogo'
import Arrow from '@/shared/icons/navbar/Arrow'
import Button from '@/shared/icons/navbar/Button'
import Link from 'next/link'
import {useState} from 'react'
import NavLinks from './navbarLinks/NavLinks'
import Image from "next/image";
import vk from "@/vk.png"
import ok from "@/ok.png"
import tg from "@/tg.png"
import yt from "@/yt.png"
import ytSmall from "@/yt-small.png"
import dzen from '@/dzen.png'

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
            <div
                className={`flex items-center  ${openNav ? 'justify-between' : 'justify-center'}  py-4 px-5 w-full`}>
                <Link href={`/`}>
                    <div className=' flex items-center  justify-center overflow-hidden '>
                        <div
                            className='w-[100px] logo mx-auto relative transition-none z-10 bg-[#0F91D6]'>
                            <ShortLogo fill='white' width={100}/>
                        </div>

                        {openNav ? (
                            <div
                                className='flex text-white ml-1 justify-center transition-all visible top-auto relative  items-center w-[320px]'>
                                <div
                                    className='ml-2 w-full flex flex-col items-baseline justify-center min-h-[100px] max-h-[100px]'>
                                    <p className=' text-[9px] leading-3  max-w-[full] transition-all text-left   font-thin  '>
                                        Федеральное государственное бюджетное <br/> образовательное
                                        учреждение высшего образования
                                    </p>
                                    <p className='no-wrap text-[16px] mt-[5px] leading-[16px] transition-all  font-normal overflow-hidden max-h-[51px]'>
                                        Воронежский государственный аграрный университет
                                        имени <br/> императора Петра I
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                className='flex text-white  absolute justify-between delay-200 flex-nowrap right-full invisible transition-all items-center w-[0] overflow-hidden'>
                                <p>
                                    Федеральное государственное бюджетное образовательное
                                    учреждение высшего образования
                                </p>
                                <p className=' text-[16px] transition-all  font-semibold ml-5 min-w-[250px]'>
                                    Воронежский государственный аграрный университет имени Петра I
                                </p>
                            </div>
                        )}
                    </div>
                </Link>
                <div
                    onClick={handleClick}
                    className='absolute -right-0 flex items-center justify-start cursor-pointer rounded-2xl top-[300px] '
                >
                    <div className=''>
                        <Button/>
                    </div>

                    {openNav ? (
                        <div className='absolute  left-1/3 transition-all delay-150 ease-in'>
                            <Arrow fill='grey' width={100}/>
                        </div>
                    ) : (
                        <div className='-rotate-180 absolute  left-1/3 transition-all delay-150 ease-in'>
                            <Arrow fill='grey' width={100}/>
                        </div>
                    )}
                </div>
            </div>
            <div className='all-refs mb-10'>
                <NavLinks/>
            </div>
            <div
                className={`fixed z-10  bottom-0 py-2 bg-white ${openNav ? 'flex-row w-[450px] transition-[width]  delay-100' : 'flex-col w-[120px] '} flex  items-center justify-between px-10`}>
                <Link href='https://vk.com/vsau1912' className="my-2">
                    <Image src={vk} alt={`dk`}/>
                </Link>
                <Link href='https://ok.ru/vsau1912' className="my-2">
                    <Image src={ok} alt={`dk`}/>
                </Link>
                <Link href='https://t.me/vsau1912' className="my-2">
                    <Image src={tg} alt={`dk`}/>
                </Link>
                <Link href='https://www.youtube.com/channel/UCF3LAx0wx0kjOW2QchlP6KQ' className="my-2">
                    {openNav ?
                        <Image src={yt} alt={'yt'}/>
                        :
                        <Image src={ytSmall} alt={'yt'}/>
                    }
                </Link>
                <Link href='https://dzen.ru/vsau1912' className="my-2">
                    <Image src={dzen} alt='dzen'/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
