import image from '@/naw.jpg'
import Image from 'next/image'
import Link from 'next/link'

const NewsItem = ({img, title, text, date, id}: INews) => {

    return (
        <Link href={`news/${id}`}>
            <div

                className=' mr-7 min-w-[320px] h-[350px] relative bg-white rounded-lg '>
                <Image src={image} alt='#' width={320} height={0}/>
                <div className='p-3'>
                    <p className='cursor-pointer hover:underline'>
                        <b>{title}</b>
                    </p>
                    <div className='flex absolute w-[90%] bottom-2 justify-between  mt-7'>
                        <p>{date}</p>

                        <div className='flex items-center hover:underline'>
                            <p className='mr-2'>Читать</p>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NewsItem
