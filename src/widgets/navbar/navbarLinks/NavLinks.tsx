import Link from 'next/link'
import {navItem, navMiddleItems} from '../../../TestArrays/navLinksArray'
import CloseLinks from './CloseLinks'
import Links from './Link'

const NavLinks = () => {
    return (
        <>
            <div className='refs '>
                {navItem.map(item => (
                    <Link href={item.path}>
                        <Links
                            id={item.id}
                            title={item.title}
                            path={item.path}
                            img={item.img}
                            icon={item.icon}
                        />
                    </Link>
                ))}
                <div className='flex items-center justify-center'>
                    <hr className='bg-[#0F91D6] h-[1px] my-3 w-10/12 opacity-50 '/>
                </div>
                {navMiddleItems.map(item => (
                    <Link href={item.path}>
                        <Links
                            id={item.id}
                            title={item.title}
                            path={item.path}
                            img={item.img}
                            icon={item.icon}
                        />
                    </Link>
                ))}
                <div className='flex items-center justify-center'>
                    <hr className='bg-[#0F91D6] my-3 h-[1px] w-10/12 opacity-50'/>
                </div>
            </div>
            <div className='close-refs overflow-y-auto'>
                {navItem.map(item => (
                    <Link href={item.path}>
                        <CloseLinks
                            id={item.id}
                            path={item.path}
                            img={item.img}
                            icon={item.icon}
                        />
                    </Link>
                ))}
                <div className='flex items-center justify-center'>
                    <hr className='bg-[#0F91D6] h-[2px] my-3 w-9/12 '/>
                </div>
                {navMiddleItems.map(item => (
                    <Link href={item.path}>
                        <CloseLinks
                            id={item.id}
                            title={item.title}
                            path={item.path}
                            img={item.img}
                            icon={item.icon}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default NavLinks
