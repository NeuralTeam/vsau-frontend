import StaffIcon from '@/shared/icons/navbar/Staff'
import Link from 'next/link'

const Staff = () => {
    return (
        <div className='bg-slate-100 min-h-screen w-full p-10 pl-24'>
            <div className='flex items-end justify-start'>
                <StaffIcon width={50} fill='#0F91D6'/>
                <p className='ml-4 text-[#0F91D6] font-semibold text-2xl'>Персонал</p>
            </div>
            <div className='grid grid-cols-2 my-20'>
                <div
                    className='bg-[#0F91D6] flex items-center justify-center w-11/12 hover:border-[#0F91D6] border-2 rounded-lg cursor-pointer  transition-all'>
                    <Link href={`staff/administration`}>
                        <div className='p-10'>
                            <StaffIcon width={100} fill='#ffffff58'/>
                            <h2 className='text-white text-3xl pt-7 w-2/3'>
                                Руководство ФГБОУ ВО Воронежский ГАУ
                            </h2>
                        </div>
                    </Link>
                </div>
                <div
                    className='bg-[#ffffff] p-20 w-10/12 rounded-lg cursor-pointer transition-all hover:border-[#ffffff] border-2 border-slate-100'>
                    <StaffIcon width={100} fill='#0f90d659'/>
                    <h2 className=' text-2xl pt-7 '>
                        Состав педагогических работников каждой реализуемой образовательной
                        пограммы
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Staff
