export interface ITrainingData {
    id: number;
    name: string;
    description: string;
    date: string;
    type: string;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
    mediaFiles: {
        id: number;
        path: string;
        createdAt: Date;
        updatedAt: Date
    }
}

export interface ITraining {
    success: boolean;
    data: ITrainingData[]
}

export interface ISingleTraining {
    success: boolean;
    data: ITrainingData
}

export interface ISingleTrainingProps {
    params: {
        id: string
    }
}
