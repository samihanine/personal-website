import {
  About,
  Header,
  Landing,
  Projects,
  Contact,
  Footer,
  Quote,
  Networks,
} from "@/components";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sami Hanine</title>
        <meta name="description" content="Sami Hanine's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col bg-secondary">
        <Header />
        <Landing />
        <About />
        <Projects />
        <Quote />
        <Networks />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
