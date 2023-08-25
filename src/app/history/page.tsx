import HistoryIcon from '@/shared/icons/navbar/History'
import HistoryWidget from '@/widgets/history/HistoryWidget'

const History = () => {
    return (
        <div className='min-h-screen pl-24 w-full bg-slate-100 history-page'>
            <div className='px-12 pt-10 flex items-end justify-start'>
                <HistoryIcon fill='#0F91D6' width={70}/>
                <p className='px-5 text-[#0F91D6] w-[40%] text-2xl font-semibold'>
                    История Воронежского государственного аграрного университета
                </p>
            </div>
            <HistoryWidget/>
        </div>
    )
}

export default History
