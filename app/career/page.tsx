import { Metadata } from "next";

import { generateMetadataPerPage } from "@/helpers/metadata";
import { HeaderContent } from "@/components/headercontent/headercontent";
import JobAdvertisment from "@/components/jobadvertisement/jobadvertisment";
import { Request } from "@/components/request/request";
import { ICareers, ISingleCareer } from "@/models/interfaces/career";
import { HeaderContentFrom } from "@/models/enums/headercontent";

export const metadata: Metadata = generateMetadataPerPage('Career - PADC LLC')

export function getVacancies(): Promise<ICareers> {
    return fetch('https://api.padcllc.com/vacancies', { next: { revalidate: 150 } }).then(res => res.json())
}

export default async function Career() {

    const vacancies: ICareers = await getVacancies()

    return (
        <>
            <HeaderContent from={HeaderContentFrom.CAREER} />
            {!!vacancies.data && vacancies.data.map((vacancie: ISingleCareer) => {
                return <JobAdvertisment {...vacancie} />
            })}
            <Request />
        </>
    )
}