import { Section } from "./Section";
import Image from "next/image";
import face from "../../public/images/face.png";

export const Landing = () => {
  return (
    <Section color="black" id="landing" className="!py-0 h-[600px]">
      <div className="flex items-center h-full aspect-square justify-between">
        <div className="absolute flex flex-col gap-10">
          <h1 className="text-[80px] leading-[90px] lg:text-[120px] lg:leading-[140px] text-white">
            Sami <br></br> Hanine
          </h1>

          <p className="text text-grey">
            {`I've been learning to code through projects since I was 12`}
            <br></br>
            {` and I've never stopped.`}
          </p>

          <a
            className="text-2xl bold underline-offset-8 underline"
            href="#contact"
          >
            Send me a message 👋
          </a>
        </div>
        <div></div>
        <div className="h-full relative">
          <Image
            alt="picture of Sami Hanine"
            src={face}
            height={700}
            width={500}
            placeholder="blur"
            className="h-full w-auto hidden lg:block"
          />
        </div>
      </div>
    </Section>
  );
};
