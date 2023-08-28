import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {INavItem} from './interface'

const CloseLinks = ({title, img, icon, path}: INavItem) => {
    const router = usePathname()

    return (
        <div>
            <div
                className='h-12 ref rounded flex items-center px-10 close-navbar-icons  justify-center text-white hover:bg-[#00000013]'>
                <div className={router === path ? '' : 'opacity-50'}>
                    <Image
                        src={icon}
                        width={15}
                        height={15}
                        alt=''
                        className='min-h-[25px] block min-w-[25px]'
                    />
                </div>
            </div>
        </div>
    )
}

export default CloseLinks
