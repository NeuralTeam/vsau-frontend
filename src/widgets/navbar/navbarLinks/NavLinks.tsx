import Link from 'next/link'
import { navItem } from '../../../TestArrays/navLinksArray'
import CloseLinks from './CloseLinks'
import Links from './Link'

const NavLinks = () => {
	return (
		<>
			<div className='refs'>
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
			</div>
			<div className='close-refs'>
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
			</div>
		</>
	)
}

export default NavLinks
