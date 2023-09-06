import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {INavItem} from './interface'

const Links = ({title, img, icon, path}: INavItem) => {
    const router = usePathname()
    return (
        <div>
            <div
                className='h-14 ref rounded flex items-center close-navbar-icons justify-start text-white hover:bg-[#00000013]'>
                <div
                    className='px-10 image grid items-center justify-start grid-cols-nav min-w-[450px] max-w-10/12 overflow-hidden'>
                    {path === '/documents' ? <div className={router === path ? '' : 'opacity-50'}>
                        <Image
                            src={icon || img}
                            width={12}
                            height={12}
                            alt=''
                            className='min-h-[20px] block min-w-[20px] '
                        />
                    </div> : <div className={router === path ? '' : 'opacity-50'}>
                        <Image
                            src={icon || img}
                            width={12}
                            height={12}
                            alt=''
                            className='min-h-[24px] block min-w-[24px] '
                        />
                    </div>}

                    <p className='mx-[8px] text-lg  block overflow-hidden'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Links
