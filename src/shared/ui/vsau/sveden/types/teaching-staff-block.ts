export interface IDiscipline {
    id: number;
    title: string;
}

export interface IProfDevelopment {}

export interface IEduProgram {}

export interface ITeachingStaff {
    id: number;
    first_name: string;
    last_name: string;
    post: string;
    disciplines: IDiscipline[];
    level: string;
    qualification: string;
    degree?: string;
    academStat?: string;
    profDevelopments?: IProfDevelopment[];
    totalWorkExperience: number;
    specWorkExperience: number;
    eduPrograms: IEduProgram[];
}

export interface ITeachingStaffBlock {
    staffList: ITeachingStaff[];
}
