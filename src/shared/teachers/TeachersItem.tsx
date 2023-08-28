import React from 'react'

const TeachersItem = ({name, post}: ITeachers) => {
    return (
        <div>
            <div className='text-2xl mb-3 text-black'>{name}</div>
            <p>{post}</p>
        </div>
    )
}
export default TeachersItem
