import DocumentsIcon from '../icons/navbar/Documents'

const DocumentItem = ({ id, title }: IDocuments) => {
	return (
		<div className='bg-white mr-10 mb-10 p-10 rounded-lg cursor-pointer'>
			<div className='w-[70px] h-[70px] relative'>
				<div className='z-30 absolute bottom-0 bg-white'>
					<DocumentsIcon fill='#0F91D6' width={40} />
				</div>
				<div className='absolute left-1 bottom-1 z-0'>
					<DocumentsIcon fill='#96c8e353' width={50} />
				</div>
			</div>
			<h2 className='mt-6 w-3/4'>{title}</h2>
		</div>
	)
}

export default DocumentItem
