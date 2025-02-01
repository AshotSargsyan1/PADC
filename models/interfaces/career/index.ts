export interface ISingleCareer {
    id: number;
    description: string;
    shortDescription: string;
    title: string;
    createdAt: string,
    updatedAt: string
}

export interface ICareers {
    success: boolean;
    data: ISingleCareer[]
}