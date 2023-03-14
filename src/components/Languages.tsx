import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const Languages = ({ border }: { border?: boolean }) => {
  const { asPath } = useRouter();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div
      className={`flex items-center text-base rounded-full border-primary w-fit py-[3px] px-4 gap-6 ${
        border ? "border-2" : "border-none"
      } `}
    >
      <NextLink href={asPath} locale="fr" lang="fr">
        <div
          className={`rounded-full flex flex-col items-center gap-[2px] ${
            lang === "fr" ? "text-primary font-bold" : "opacity-50"
          }`}
        >
          <p className="">FR</p>
        </div>
      </NextLink>
      <NextLink href={asPath} locale="en" lang="en">
        <div
          className={`rounded-full flex flex-col items-center gap-[2px] ${
            lang === "en" ? "text-primary font-bold" : "opacity-50"
          }`}
        >
          <p>EN</p>
        </div>
      </NextLink>
    </div>
  );
};
