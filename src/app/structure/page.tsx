import OrgStructureIcon from '@/shared/icons/navbar/OrgStructure'
import StructureWidget from '@/widgets/structure/StructureWidget'

const OrgStructure = () => {
	return (
		<div className='bg-slate-100 min-h-screen p-10'>
			<div className='flex items-end justify-start '>
				<OrgStructureIcon fill='#0F91D6' width={50} />
				<p className='text-2xl ml-4 font-semibold text-[#0F91D6]'>
					Организационная структура
				</p>
			</div>
			<div className='flex items-center justify-center'>
				<StructureWidget />
			</div>
		</div>
	)
}

export default OrgStructure
