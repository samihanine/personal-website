import { Section } from "./Section";
import Image from "next/image";
import face from "../../public/images/face.png";
import { useTranslation } from "next-i18next";

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <Section color="black" id="landing" className="!py-0 h-[600px]">
      <div className="flex items-center h-full aspect-square justify-between w-full">
        <div
          className="absolute flex flex-col gap-10 p-5"
          data-aos="fade-right"
        >
          <h1 className="text-[80px] leading-[90px] lg:text-[125px] font-extralight lg:leading-[140px] text-white">
            Sami <br /> Hanine
          </h1>

          <p className="text-grey hidden flex-col lg:flex">
            <span>{t`landing.description1`}</span>

            <span>{t`landing.description2`}</span>
          </p>

          <p className="flex text-grey lg:hidden">
            {t`landing.description1`}
            {t`landing.description2`}
          </p>

          <a
            className="text-2xl bold underline-offset-8 underline"
            href="#contact"
          >
            {t`landing.send`}
          </a>
        </div>
        <div></div>
        <div className="h-full relative">
          <Image
            alt="picture of Sami Hanine"
            src={face}
            height={700}
            width={500}
            className="h-full w-auto hidden lg:block"
          />
        </div>
      </div>
    </Section>
  );
};
