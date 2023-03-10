import { Section } from "./Section";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Section id="footer" color="black">
      <footer>{t`footer.right`}</footer>
    </Section>
  );
};
