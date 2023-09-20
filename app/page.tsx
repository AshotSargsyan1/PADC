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

import styles from './page.module.css'

export const metadata: Metadata = generateMetadataPerPage('PADC - Home')

export default function Home() {
  return (
    <>
      <HeaderContent />
      <main className={styles.main}>
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
