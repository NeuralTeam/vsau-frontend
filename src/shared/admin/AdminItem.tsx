import Image from 'next/image'
import StaffCircle from '../icons/staff/StaffCircle'

const AdminItem = ({id, post, name, photo, tel, cabinet, email}: IStaff) => {
    return (
        <div
            className='mr-7 mb-10 p-10 h-[96%] relative items-center w-11/12 relative cursor-pointer bg-[#0F91D6] text-white rounded-lg '>
            <div className=' h-7/12 mb-5'>
                <div className=' flex items-center justify-center min-h-[300px]'>
                    <div className='absolute top-[10%] '>
                        <StaffCircle fill='#ffffffbb' width={290}/>
                    </div>
                    <div className='w-full w-[218px] h-218px flex items-center bg-white justify-center'>
                        <Image
                            src={photo}
                            alt='photo'
                            className=' rounded-full bg-slate-100 w-[218px] h-[218px] overflow-hidden absolute top-[15.4%] '
                        />
                    </div>
                </div>
            </div>
            <div className='h-4/12 mt-10'>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='my-7 text-lg'>{post}</p>
                <div className=''>
                    <p>
                        {tel} / {cabinet} каб.
                    </p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default AdminItem
