interface ISingleProject {
    id: number,
    title: string,
    description: string
}

export interface IProjects {
    success: boolean,
    data: ISingleProject[]
}