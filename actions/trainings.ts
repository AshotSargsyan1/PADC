import { ISingleTraining, ITraining } from "@/models/interfaces/trainings";

export function getTrainings(): Promise<ITraining> {
    return fetch('https://api.padcllc.com/trainings', { next: { revalidate: 150 } }).then(res => res.json())
}

export function getSingleTraining(id: string): Promise<ISingleTraining> {
    return fetch(`https://api.padcllc.com/trainings/${id}`, { cache: 'no-store' })
        .then(res => res.json())
}