'use client'

import {adminArray} from '@/TestArrays/adminArray'
import AdminItem from '@/shared/admin/AdminItem'
import {useState} from 'react'

const StaffWidget = () => {
    const [items] = useState(adminArray)

    return (
        <div>
            <div className='grid grid-cols-3 grid-rows-[700px] items-center justify-center flex-wrap'>
                {items.map(item => (
                    <AdminItem
                        id={item.id}
                        post={item.post}
                        name={item.name}
                        photo={item.photo}
                        tel={item.tel}
                        cabinet={item.cabinet}
                        email={item.email}
                    />
                ))}
            </div>
        </div>
    )
}

export default StaffWidget
