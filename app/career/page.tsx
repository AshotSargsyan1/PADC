import Header from "@/components/header/header";
import { HeaderContent } from "@/components/headercontent/headercontent";
import JobAdvertisment from "@/components/jobadvertisement/jobadvertisment";
import { Request2 } from "@/components/request/request";

export default function Career() {
    return (
        <>
            <Header />
            <HeaderContent forCareer={true} />
            <JobAdvertisment />
            <JobAdvertisment />
            <JobAdvertisment />
            <JobAdvertisment />
            <Request2 />
        </>
    )
}