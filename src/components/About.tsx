import { Skill, skills } from "@/data";
import { Section } from "./Section";

// write a text in English that explains my background:
// - I started programming by making video games on the web. After that I got interested in creating websites and web applications. I have two years of experience as a freelance web designer. I worked 6 months at senzu, a startup that creates connected objects. I'm currently working for Milo, a tourism company in Quebec.

export const AboutSkill = ({ skill }: { skill: Skill }) => {
  return (
    <p className="font-bold text-base text-secondary p-1 border border-[#c1c3d2] rounded-lg w-fit h-fit">
      {skill.name}
    </p>
  );
};

export const About = () => {
  return (
    <Section id="about" color="white">
      <div className="flex gap-6 flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[50%] w-full flex flex-col gap-12">
          <h2 className="text-5xl font-bold">My Career So Far</h2>
          <p className="text-grey">
            For two years, I worked as a freelance developer and collaborated
            with several startups, including{" "}
            <a
              href="https://welcome.senzu.app/"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              Senzu
            </a>
            , where I worked for five months. Currently, I&apos;m working at
            <a
              href="https://www.miloguide.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold pl-1"
            >
              Miloguide
            </a>
            , a tourism company in Montréal, and I&apos;m excited to be part of
            a dynamic and evolving team. If you&apos;re looking for a skilled
            and creative web developer, please don&apos;t hesitate to contact
            me. I&apos;m confident that I can help you achieve your goals and
            bring your vision to life.
            <br></br>
            <br></br>
            Thanks for taking the time to read a little about me!
          </p>
        </div>

        <div className="lg:w-[40%] w-full flex flex-wrap gap-3 content-start pt-12 lg:pt-0">
          {skills.map((skill) => (
            <AboutSkill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
};
