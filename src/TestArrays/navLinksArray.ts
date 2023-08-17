import about from '@/shared/icons/navbar/About.svg'
import campus from '@/shared/icons/navbar/Campus.svg'
import documents from '@/shared/icons/navbar/Documents.svg'
import eios from '@/shared/icons/navbar/EIOS.svg'
import history from '@/shared/icons/navbar/History.svg'
import main from '@/shared/icons/navbar/MainPage.svg'
import structure from '@/shared/icons/navbar/OrgStructure.svg'
import staff from '@/shared/icons/navbar/Staff.svg'

import InfEduOrg from '@/shared/icons/navbar/InfEduOrg.svg'
import VisuallyImpaired from '@/shared/icons/navbar/VisuallyImpired.svg'
import { INavItem } from '@/widgets/navbar/navbarLinks/interface'

export const navItem: INavItem[] = [
	{
		icon: main,
		id: 1,
		img: '@/shared/icons/navbar/MainPage.svg',
		path: '/',
		title: 'Главная',
	},
	{
		icon: about,
		id: 2,
		img: '@/shared/icons/navbar/About.svg',
		path: '/about',
		title: 'О ВУЗе',
	},
	{
		icon: history,
		id: 3,
		img: '@/shared/icons/navbar/History.svg',
		path: '/history',
		title: 'История',
	},
	{
		icon: documents,
		id: 4,
		img: '@/shared/icons/navbar/Documents.svg',
		path: '/documents',
		title: 'Документы',
	},
	{
		icon: staff,
		id: 5,
		img: '@/shared/icons/navbar/Staff.svg',
		path: '/staff',
		title: 'Персонал',
	},
	{
		icon: campus,
		id: 6,
		img: '@/shared/icons/navbar/Campus.svg',
		path: '/campus',
		title: 'Университетский городок',
	},
	{
		icon: structure,
		id: 7,
		img: '@/shared/icons/navbar/OrgStructure.svg',
		path: '/structure',
		title: 'Организационная структура',
	},
	{
		icon: eios,
		id: 8,
		img: '@/shared/icons/navbar/EIOS.svg',
		path: '/eios',
		title: 'ЭИОС',
	},
]

export const navMiddleItems: INavItem[] = [
	{
		id: 9,
		icon: VisuallyImpaired,
		img: '@/shared/icons/navbar/VisuallyImpaired.svg',
		path: '/shared-vision',
		title: 'Версия для слабовидящих',
	},
	{
		id: 10,
		icon: InfEduOrg,
		img: '@/shared/icons/navbar/MainPage.svg',
		path: '/information',
		title: 'Сведения об университете',
	},
]

// export const navDownItems: INavItem[] = [
// 	{
// 		id: 11,
// 		path: '/shared-vision',
// 		title: 'Абитуриенту 2021',
// 	},
// 	{
// 		id: 12,
// 		path: '/information',
// 		title: 'Информация для студента',
// 	},
// 	{
// 		id: 13,
// 		path: '/information',
// 		title: 'Информация для работников',
// 	},
// 	{
// 		id: 14,
// 		path: '/information',
// 		title: 'Учебный процесс',
// 	},
// 	{
// 		id: 13,
// 		path: '/information',
// 		title: 'Научная деятельность',
// 	},
// 	{
// 		id: 14,
// 		path: '/information',
// 		title: 'Социально-воспитательная работа',
// 	},
// 	{
// 		id: 15,
// 		path: '/information',
// 		title: 'Отделение СПО',
// 	},
// ]
