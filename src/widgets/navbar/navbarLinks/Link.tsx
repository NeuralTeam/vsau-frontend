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
                    <div className={router === path ? '' : 'opacity-50'}>
                        <Image
                            src={icon || img}
                            width={15}
                            height={15}
                            alt=''
                            className='min-h-[25px] block min-w-[25px] '
                        />
                    </div>
                    <p className='mx-[15px] block overflow-hidden'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Links
