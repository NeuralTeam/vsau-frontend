interface IStructureDepartAdmin {
	id: string
	name: string
	adminOrg: string
	adminName: string
	post: string
	address: string
	tel: string
	email: string
	docHref: string
	ofWebSite: string
}

interface IStructureDepart {
	id: string
	name: string
	admin: IStructureDepartAdmin[]
}

interface IStructure {
	id: string
	title: string
	depart: IStructureDepart[]
}
