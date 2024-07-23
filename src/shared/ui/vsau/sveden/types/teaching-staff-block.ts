export interface IPost {
    id: number;
    title: string;
}

export interface IDiscipline {
    id: number;
    title: string;
}

export interface IProfDevelopment {
    id: number;
    year: number;
    title: string;
}

export interface IEduProgram {
    id: number;
    title: string;
}

export interface ITeachingStaff {
    id: number;
    first_name: string;
    last_name: string;
    post: IPost[];
    disciplines: IDiscipline[];
    level: string;
    qualification: string;
    degree?: string;
    academStat?: string;
    profDevelopments: IProfDevelopment[];
    totalWorkExperience: number;
    specWorkExperience: number;
    eduPrograms: IEduProgram[];
}

export interface ITeachingStaffBlock {
    staffList: ITeachingStaff[];
}
