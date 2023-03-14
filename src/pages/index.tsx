import {
  About,
  Header,
  Landing,
  Projects,
  Contact,
  Footer,
  Quote,
  Networks,
  Section,
} from "@/components";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Sami Hanine</title>
        <meta name="description" content={t`meta.description`} />
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

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
