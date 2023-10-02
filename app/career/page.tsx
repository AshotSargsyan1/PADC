import { Metadata } from "next";

import { generateMetadataPerPage } from "@/helpers/metadata";
import { HeaderContent } from "@/components/headercontent/headercontent";
import JobAdvertisment from "@/components/jobadvertisement/jobadvertisment";
import { Request } from "@/components/request/request";
import { ICareers, ISingleCareer } from "@/models/interfaces/career";
import { HeaderContentFrom } from "@/models/enums/headercontent";
import { getVacancies } from "../actions/vacancies";

export const metadata: Metadata = generateMetadataPerPage('Career - PADC LLC')

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