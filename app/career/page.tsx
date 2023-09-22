import { Metadata } from "next";

import { generateMetadataPerPage } from "@/helpers/metadata";
import { HeaderContent } from "@/components/headercontent/headercontent";
import JobAdvertisment from "@/components/jobadvertisement/jobadvertisment";
import { Request } from "@/components/request/request";

export const metadata: Metadata = generateMetadataPerPage('Career - PADC LLC')

export default function Career() {

    return (
        <>
            <HeaderContent forCareer={true} />
            <JobAdvertisment />
            <JobAdvertisment />
            <Request />
        </>
    )
}