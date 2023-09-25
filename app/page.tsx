import { Metadata } from "next";

import { WhatWeDo } from "@/components/whatwedo/whatwedo";
import { OurServices } from "@/components/ourservices/ourservices";
import { Partnership } from "@/components/partnership/partnership";
import { Team } from "@/components/team/team";
import { Request } from "@/components/request/request";
import { Contact } from "@/components/contact/contact";
import OurProjects from "@/components/ourprojects/ourprojects";
import { HeaderContent } from "@/components/headercontent/headercontent";
import { generateMetadataPerPage } from "@/helpers/metadata";
import { HeaderContentFrom } from "@/models/enums/headercontent";

export const metadata: Metadata = generateMetadataPerPage('Home - PADC LLC')

export default function Home() {
  return (
    <>
      <HeaderContent from={HeaderContentFrom.HOME}/>
      <main>
        <OurProjects />
        <WhatWeDo />
        <OurServices />
        <Partnership />
        <Team />
        <Request />
        <Contact />
      </main>
    </>
  )
}
