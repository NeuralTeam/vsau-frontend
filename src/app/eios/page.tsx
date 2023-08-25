import EIOS from '@/shared/icons/navbar/EIOS'
import EiosWidget from '@/widgets/eios/EiosWidget'

const Eois = () => {
    return (
        <div className='p-10 pl-24 bg-slate-100 min-h-screen'>
            <div className='flex items-end justify-start'>
                <EIOS fill='#0F91D6' width={50}/>
                <p className='ml-4 text-[#0f91d6] font-semibold text-2xl'>ЭИОС</p>
            </div>
            <EiosWidget/>
        </div>
    )
}

export default Eois
