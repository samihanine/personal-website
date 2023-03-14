import { Languages } from "./Languages";
import { Section } from "./Section";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Section id="footer" color="black">
      <footer className="flex justify-between">
        <p>{t`footer.right`}</p>
        <div className="flex lg:hidden">
          <Languages />
        </div>
      </footer>
    </Section>
  );
};
