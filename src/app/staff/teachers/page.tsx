import React from 'react'
import TeachersWidget from "@/widgets/teachers/TeachersWidget";
import StaffIcon from "@/shared/icons/navbar/Staff";

const Teachers = () => {
    return (
        <div className='pl-24 p-10 bg-slate-100 min-h-screen'>
            <div className="flex items-end justify-self-auto">
                <StaffIcon fill={'#0f91d6'} width={60}/>
                <h2 className='text-[#0f91d6] ml-3 text-3xl font-semibold'>Персонал</h2>
            </div>
            <p className='my-10 text-2xl text-black opacity-40'>Персональный состав педагогических
                работников</p>
            <TeachersWidget/>
        </div>
    )
}
export default Teachers
