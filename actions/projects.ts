import { IProjects } from "@/models/interfaces/ourprojects";

export function getProjects(): Promise<IProjects> {
    return fetch('https://api.padcllc.com/projects', { next: { revalidate: 150 } })
        .then(res => res.json())
}