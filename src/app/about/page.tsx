import About from '@/shared/icons/navbar/About'
import {MDXRemote} from "next-mdx-remote/rsc";


const page = () => {
    const markdown = `
                    9 июня 1912 года вступил в силу закон «Об учреждении в Воронеже cельскохозяйственного института
                    Императора Петра I», инициированный Воронежским земством, представителями ее общественности в
                    Государственном Совете, Правительстве, Государственной Думе. Законопроект, подготовленный Главным
                    управлением землеустройства и земледелия и одобренный депутатами Думы, был представлен императору
                    Николаю II и им подписан. 
                    
                  
                    Воронежский ГАУ – не только первый вуз Центрального Черноземья. На момент учреждения ВСХИ в
                    Российской Империи существовало всего два высших сельскохозяйственных учебных заведения – Московский СХИ
                    и Ново-Александрийский институт сельского хозяйства и лесоводства. В современных границах Российской
                    Федерации только Тимирязевская сельскохозяйственная академия (бывший Московский СХИ) старше
                    Воронежского СХИ – ВГАУ.
                         
                
                    Основание в 1912 году ВСХИ положило начало осуществлению Плана учреждения в Империи высших
                    сельскохозяйственных школ, одобренного в 1910 году Главным управлением землеустройства и земледелия.
                    Признав целесообразность порайонного распределения высших агрономических школ в России,
                    Сельскохозяйственный Совет Управления счел необходимым учредить сельскохозяйственные институты в
                    Томске, Саратове, Одессе, Казани, Екатеринославле, Перми. Однако открывал этот список Воронеж. Значительным
                    большинством голосов Сельскохозяйственный Совет «избрал Воронеж для немедленного учреждения
                    сельскохозяйственного института, который обслуживал бы по преимуществу Черноземный Центр России».
                    Были высказаны соображения, что «необходимо отдать предпочтения именно Черноземному Центру, столь много
                    давшему Империи, но истощенному частыми неурожаями и особенно нуждающемуся в серьезных улучшениях
                    его сельскохозяйственного строя».
                     
                    Более ста выдающихся деятелей России – представителей науки, образования, культуры, высших властных
                    структур направили свои поздравления в Воронеж по случаю основания сельскохозяйственного института.
                    В соответствии с уникальным проектом был сооружен архитектурный ансамбль ВСХИ, который ныне является
                    памятником архитектуры. Институт создавался как памятник выдающимся делам великого реформатора
                    России – Петра Великого.     
                    
                    
                               
                    Все свои 110 лет Воронежский СХИ был частью истории страны, разделив с ней горечь поражений, утрат и
                    радость успехов, побед. Непростую, но творчески интересную судьбу вуза разделили с ним такие
                    известные ученые, преподаватели, организаторы науки, как: Н. А. Успенский, П. В. Карпенко, В. Ф. Лейсле, С. Г.
                    Богоявленский, М. С. Цыганов, А. Н. Веньяминов, Г. В. Коренев, В. Я. Заплетин, В. И. Марковский, Е.М.
                    Харитончик, А. С. Куракин, М. А. Смольянинов, В. В. Ферденандов, И. А. Тапильский, В. Н. Авроров, В.А.
                    Акатов, В. Т. Котов, Я. И. Шнейберг, Л. И. Любошиц, О. Ф. Лопатина, Г. А. Тищенков, В. И. Логунов и др.
                                  
                    Многие ветераны вуза и сейчас передают свой опыт, знания молодому поколению работников
                    агроуниверситета, встречая 110-летие ВСХИ – ВГАУ в трудовом строю.
                               
                    Сегодня ВСХИ – ВГАУ – живой, динамично развивающийся организм, активный участник процессов
                    модернизации всех сторон жизни российского общества. Фундамент успехов агроуниверситета в
                    преподавательской, воспитательной, научно-исследовательской работе – сплоченность его коллектива
                    вокруг славных традиций вуза, отметившего свое 110-летие.`
    return (
        <div className='min-h-screen w-full px-24 py-10 bg-slate-100'>
            <div
                className='h-[250px] w-full  mb-20 bg rounded-lg text-white font-semibold flex items-center justify-start p-20 text-4xl'>
                <div className='flex items-end'>
                    <About width={60} height={60} fill='white'/>
                    <h2 className='ml-6'>О ВУЗЕ</h2>
                </div>
            </div>
            <div className='prose max-w-full'>
                <div className=""><MDXRemote source={markdown}/></div>

            </div>
        </div>
    )
}

export default page
