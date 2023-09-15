import { Metadata } from "next";

export function generateMetadataPerPage(currentPage: string): Metadata {
    return (
        {
            title: `${currentPage}`,
            description: 'PADC LLC is a start-up, founded in Gyumri, Armenia. A team of experienced software developers, we aim at delivering creative and innovative software solutions, promoting technology awareness, and creating applications, that will make a difference. Our company develops both web and mobile applications in a number of fields, such as business, e- commerce, entertainment, and booking.Our products are developed with the customers needs in mind, and their main purpose is to make life, business, leisure more enjoyable and manageable.'
        }
    )
}