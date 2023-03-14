import { Skill, skills } from "@/data";
import { Section } from "./Section";
import { useTranslation } from "next-i18next";

export const AboutSkill = ({ skill }: { skill: Skill }) => {
  return (
    <p className="font-bold text-base text-secondary p-1 border border-[#c1c3d2] rounded-lg w-fit h-fit">
      {skill.name}
    </p>
  );
};

export const About = () => {
  const { t } = useTranslation("common");

  return (
    <Section id="about" color="white">
      <div className="flex gap-6 flex-col lg:flex-row items-center justify-between">
        <div
          data-aos="fade-right"
          className="lg:w-[50%] w-full flex flex-col gap-12"
        >
          <h2 className="text-5xl font-bold">{t`about.title`}</h2>
          <p className="text-grey">
            {t`about.description`}
            <br></br>
            <br></br>
            {t`about.thanks`}
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="lg:w-[40%] w-full flex flex-wrap gap-3 content-start pt-12 lg:pt-0"
        >
          {skills.map((skill) => (
            <AboutSkill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
};
