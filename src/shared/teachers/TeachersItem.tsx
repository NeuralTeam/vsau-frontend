import React from 'react'
import Link from "next/link";

const TeachersItem = ({id, name, post}: ITeachers) => {
    return (
        <div>
            <Link href={`teachers/${id}`}>
                <div className='text-2xl mb-3 text-black'>{name}</div>
                <p>{post}</p>
            </Link>
        </div>
    )
}
export default TeachersItem
