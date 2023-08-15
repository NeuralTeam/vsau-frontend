import InfEduOrgIcon from '@/shared/icons/navbar/InfEduOrg'
import InfEduWdget from '@/widgets/information/InfEduWidget'

const InfEduOrg = () => {
	return (
		<div className='bg-slate-100 min-h-screen p-10'>
			<div className='flex items-end justify-start'>
				<InfEduOrgIcon fill='#0F91D6' width={50} />
				<h2 className='text-2xl font-semibold ml-4 text-[#0F91D6]'>
					Сведения об образовательной организации
				</h2>
			</div>
			<div className=''>
				<InfEduWdget />
			</div>
		</div>
	)
}

export default InfEduOrg
