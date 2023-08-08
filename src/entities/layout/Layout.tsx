import Navbar from '@/widgets/navbar/Navbar'
import { ReactNode } from 'react'

interface IChildren {
	children?: ReactNode
}

const Layout = () => {
	return (
		<div className='w-full h-full layout'>
			<Navbar />
			<div className='w-30 h-30 bg-white'> vdfsv</div>
		</div>
	)
}

export default Layout
