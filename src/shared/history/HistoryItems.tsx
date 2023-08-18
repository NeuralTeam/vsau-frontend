import history from '@/history.png'
import Image from 'next/image'

const HistoryItems = ({ ...item }: IHistory) => {
	const images = item.image

	const imageViewOpen = () => {
		const currentImage = document.querySelector('.history-image')
		const currentPage = document.querySelector('.hs')
		currentImage?.classList.add('active-image')
		currentPage?.classList.add('overflow-y-hidden')
	}
	const imageViewClose = () => {
		const currentImage = document.querySelector('.history-image')
		const currentPage = document.querySelector('.hs')
		currentImage?.classList.remove('active-image')
		currentPage?.classList.remove('overflow-y-hidden')
	}
	return (
		<div className='bg-white m-2 p-4 rounded f'>
			<h2 className='text-slate-500 px-2'>{item.title}</h2>
			<div className='flex justify-between'>
				{images.map(img => (
					<div className='my-3  w-full p-0 mx-2 relative history-image'>
						<div className='exit cursor-pointer fixed' onClick={imageViewClose}>
							X
						</div>
						<Image
							src={history}
							alt=''
							className='cursor-pointer'
							onClick={imageViewOpen}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default HistoryItems
