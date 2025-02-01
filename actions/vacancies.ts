import { ICareers } from "@/models/interfaces/career";

export function getVacancies(): Promise<ICareers> {
    return fetch('https://api.padcllc.com/vacancies', { next: { revalidate: 150 } }).then(res => res.json())
}