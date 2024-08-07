export interface ITeachingStaff {
    id: number;
    first_name: string;
    last_name: string;
    post: string;
    disciplines: string[];
    level: string;
    qualification: string;
    degree?: string;
    academ_stat?: string;
    prof_developments: string[];
    total_work_experience: number;
    spec_work_experience: number;
    edu_programs: string[];
}

export interface ITeachingStaffList {
    id: number;
    first_name: string;
    last_name: string;
    post: string;
}

export interface ITeachingStaffBlock {
    staffList: ITeachingStaffList[];
}
