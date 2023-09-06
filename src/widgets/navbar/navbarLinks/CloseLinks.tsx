import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {INavItem} from './interface'

const CloseLinks = ({title, img, icon, path}: INavItem) => {
    const router = usePathname()

    return (
        <div>
            <div
                className='h-12 ref rounded flex items-center px-10 close-navbar-icons  justify-center text-white hover:bg-[#00000013]'>
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
            </div>
        </div>
    )
}

export default CloseLinks
