import { FC } from "react"

import Header from "@/components/header/header"
import { HeaderContent } from "@/components/headercontent/headercontent"
import { Request2 } from "@/components/request/request"
import { Contact } from "@/components/contact/contact"

interface pageProps {
    params: {
        id: string
    }
}

const page: FC<pageProps> = ({ params }) => {

    return (
        <>
            <HeaderContent forAllTrainings={true} />
            <Request2 />
            <Contact />
        </>
    )
}

export default page