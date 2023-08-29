interface ITeacherAreaDescription {
    id: string
    content: string
}

interface ITeacherProfile {
    id: string
    areaName: string
    areaDescription: ITeacherAreaDescription[]
}

interface ITeachers {
    id: string
    name: string
    post: string
    teacherProfile?: ITeacherProfile[]
}