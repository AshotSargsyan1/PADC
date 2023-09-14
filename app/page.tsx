import Header from "@/components/header/header";

import { WhatWeDo } from "@/components/whatwedo/whatwedo";
import { OurServices } from "@/components/ourservices/ourservices";
import { Partnership } from "@/components/partnership/partnership";
import { Team } from "@/components/team/team";
import { Request } from "@/components/request/request";
import styles from './page.module.css'
import { Contact } from "@/components/contact/contact";
import OurProjects from "@/components/ourprojects/ourprojects";
import { HeaderContent } from "@/components/headercontent/headercontent";

export default function Home() {
  return (
    <>
      <Header />
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
