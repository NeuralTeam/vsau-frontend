'use client'

import { newsArray } from '@/TestArrays/newsArray'
import news from '@/news.png'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const NewsItemPage = ({}) => {
	const param = useParams()

	const [item] = useState<INews[]>(newsArray)
	let currentItem = item.findIndex(x => x.id === param.id)

	const itemsArray = item[currentItem]

	return (
		<div className='grid' style={{ gridTemplateColumns: '80% 20%' }}>
			<div className='bg-white mr-10 p-[62px] rounded-lg text-blue relative'>
				<p>{itemsArray.date}</p>
				<div className='text-2xl font-bold my-5'>{itemsArray.title}</div>
				<div className=''>
					<Image
						src={news}
						alt=''
						width={900}
						height={100}
						className='w-full h-full'
					/>
				</div>
				<div className='mt-7'>
					Дорогие друзья!
					<br /> От всей души поздравляю вас с наступающим Новым годом и
					Рождеством! <br /> Уходящий год, несмотря на глобальные вызовы, стал
					для нашей страны периодом роста. Россия продолжила активное развитие
					экономики и социальной сферы. При этом большой вклад в общие
					результаты внес агропромышленный комплекс, который в очередной раз
					продемонстрировал высокую устойчивость к мировым кризисам и
					способность надежно обеспечивать продовольственную безопасность
					страны. Российские аграрии подтвердили свой высочайший профессионализм
					и сплоченность, готовность эффективно решать самые сложные задачи.
					Сделали все возможное, чтобы на полках наших магазинов в избытке были
					отечественные продукты питания. В этом году наша страна получила
					хороший урожай зерна и масличных, овощей и фруктов, нарастила
					производство мяса, молока и другой пищевой продукции. При этом мы не
					только сохранили стабильную ситуацию на внутреннем рынке, но и
					укрепили свои позиции в мире. Важно, что все успехи аграриев нашли
					свое отражение в повышении качества жизни на селе, где сегодня
					проживает около четверти всего населения России. В 2021 году мы
					продолжили реализацию госпрограммы «Комплексное развитие сельских
					территорий». С момента ее запуска масштабные преобразования коснулись
					всех регионов страны и затронули в общей сложности уже порядка 8 млн
					человек. Впереди большая работа по дальнейшему совершенствованию
					инфраструктуры, благоустройству, строительству современного жилья,
					новых культурных, образовательных и спортивных объектов. Безусловно,
					продолжим увеличивать объемы и эффективность поддержки отрасли,
					комплексно развивать социально-экономическую сферу села и работать над
					тем, чтобы жить там было комфортно и привлекательно. Пусть наступающий
					2022 год станет еще более плодотворным для нашей страны и принесет
					богатый урожай новых побед и достижений. Будьте здоровы, берегите
					близких, и пусть исполнятся все ваши самые заветные желания! Министр
					сельского хозяйства Российской Федерации Д.Н. Патрушев
				</div>
			</div>
			<div className='bg-white rounded-lg p-7 h-fit text-blue'>
				<p className='text-lg font-bold '>Архивы</p>
			</div>
		</div>
	)
}
export default NewsItemPage