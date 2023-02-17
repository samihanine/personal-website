import { Section } from "./Section";
import { networks } from "@/data";

export const Networks = () => {
  return (
    <Section id="contact" color="black">
      <div className="flex gap-10 justify-evenly">
        {networks.map((network, index) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={network.link}
            key={network.name}
            aos-delay={index * 300}
            data-aos="fade-right"
          >
            <network.icon className="lg:w-12 lg:h-12 w-10 h-10 text-inherit" />
          </a>
        ))}
      </div>
    </Section>
  );
};
