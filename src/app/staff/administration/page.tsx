'use client'
import StaffWidget from '@/widgets/staff/StaffWidget'
import StaffIcon from "@/shared/icons/navbar/Staff";
import BackButton from "@/shared/buttons/BackButton";

import React from "react";

const Admin = () => {
    return (
        <div className='bg-slate-100 min-h-screen p-10 pl-24'>
            <div className="mb-10 flex items-end justify-start">
                <StaffIcon fill='#0f91d6' width={70}/>
                <h3 className="ml-3 text-3xl text-[#0f91d6] font-semibold">Персонал</h3>
                <BackButton/>
            </div>
            <h4 className='py-10 text-2xl text-slate-400'>Руководство ФГБОУ ВО Воронежский ГАУ</h4>
            <div className=''>
                <StaffWidget/>
            </div>
        </div>
    )
}

export default Admin
