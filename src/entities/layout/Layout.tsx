import Navbar from '@/widgets/navbar/Navbar'
import {ReactNode} from 'react'

interface IChildren {
    children?: ReactNode
}

const Layout = () => {
    return (
        <div>
            <div className='w-full h-full layout'>
                <Navbar/>
            </div>
            
        </div>
    )
}

export default Layout
