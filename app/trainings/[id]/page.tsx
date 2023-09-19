import { FC } from "react"

import { HeaderContent } from "@/components/headercontent/headercontent"
import { Request } from "@/components/request/request"
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
            <Request />
            <Contact />
        </>
    )
}

export default page