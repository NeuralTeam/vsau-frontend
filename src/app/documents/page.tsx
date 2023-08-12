import DocumentsIcon from '@/shared/icons/navbar/Documents'
import DocumentWidget from '@/widgets/documents/DocumentWidget'

const page = () => {
	return (
		<div className='min-h-screen w-full bg-slate-100 p-10'>
			<div className='flex items-end mb-16'>
				<DocumentsIcon fill='#0F91D6' width={40} />
				<h2 className='px-5 text-[#0F91D6] w-[40%] text-2xl font-semibold'>
					Документы
				</h2>
			</div>
			<DocumentWidget />
		</div>
	)
}

export default page
