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
                className={`flex items-center  ${openNav ? 'justify-between' : 'justify-center'}  py-5 px-5 w-full`}>
                <Link href={`/`}>
                    <div className=' flex items-center justify-center overflow-hidden '>
                        <div
                            className='w-[100px] logo mx-auto relative transition-none z-10 bg-[#0F91D6]'>
                            <ShortLogo fill='white' width={100}/>
                        </div>

                        {openNav ? (
                            <div
                                className='flex text-white ml-3 justify-center transition-all visible top-auto relative  items-center w-[320px]'>
                                <div className=''>
                                    <p className=' text-[11px] leading-3 min-w-[250px] max-w-[full] transition-all  font-thin ml-5  '>
                                        Федеральное государственное бюджетное образовательное
                                        учреждение высшего образования
                                    </p>
                                    <p className='no-wrap text-[20px] mt-1 leading-[22px] min-w-[320px] max-w-[320px] transition-all  font-normal ml-5 overflow-hidden max-h-[150px]'>
                                        Воронежский государственный аграрный университет <br/>{' '}
                                        имени Петра I
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
                className={`fixed z-10 bottom-0 py-2 bg-white ${openNav ? 'flex-row w-[500px]' : 'flex-col w-[160px]'} flex  items-center justify-between px-10`}>
                <div className="my-2">
                    <Image src={vk} alt={`dk`}/>
                </div>
                <div className="my-2">
                    <Image src={ok} alt={`dk`}/>
                </div>
                <div className="my-2">
                    <Image src={tg} alt={`dk`}/>
                </div>
                <div className="my-2">
                    {openNav ?
                        <Image src={yt} alt={'yt'}/>
                        :
                        <Image src={ytSmall} alt={'yt'}/>
                    }
                </div>
                <div className="my-2">
                    <Image src={dzen} alt='dzen'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
