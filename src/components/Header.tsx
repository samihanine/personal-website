import { useTranslation } from "next-i18next";
import { Section } from "./Section";
import { Link } from "react-scroll";
import { Languages } from "./Languages";

type LinkData = {
  name: string;
  id: string;
};

const NavLink = ({ link }: { link: LinkData }) => {
  const { name, id } = link;
  return (
    <li className="text-grey hover:text-inherit hover:underline lg:text-base font-semibold underline-offset-8 cursor-pointer">
      <Link
        className="active:text-primary active:underline"
        activeClass="active"
        spy
        to={`${id}`}
      >
        {name}
      </Link>
    </li>
  );
};

export const Header = () => {
  const { t } = useTranslation("");

  const links: LinkData[] = [
    {
      name: t`header.home`,
      id: "landing",
    },
    {
      name: t`header.about`,
      id: "about",
    },
    {
      name: t`header.projects`,
      id: "projects",
    },
    {
      name: t`header.quote`,
      id: "quote",
    },
    {
      name: t`header.contact`,
      id: "contact",
    },
  ];

  return (
    <>
      <div id="home" className="h-[92px] hidden lg:flex"></div>
      <div className="fixed w-full z-50 hidden lg:flex">
        <Section id="header" color="black" className="py-4">
          <div className="flex w-full justify-between">
            <nav className="w-full">
              <ul className="flex justify-between lg:justify-start gap-2 flex-row lg:gap-10 px-0 p-4">
                {links.map((link) => (
                  <NavLink key={link.id} link={link} />
                ))}
              </ul>
            </nav>

            <div className="hidden lg:flex">
              <Languages />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
