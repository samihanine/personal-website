import { Section } from "./Section";
import { Link } from "react-scroll";

type LinkData = {
  name: string;
  id: string;
};

const NavLink = ({ link }: { link: LinkData }) => {
  const { name, id } = link;
  return (
    <li className="text-grey hover:text-inherit hover:underline lg:text-xl underline-offset-8 cursor-pointer">
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
  const links: LinkData[] = [
    {
      name: "Home",
      id: "landing",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Quote",
      id: "quote",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <>
      <div id="home" className="h-[92px]"></div>
      <div className="fixed w-full z-50">
        <Section id="header" color="black" className="py-4">
          <nav>
            <ul className="flex justify-between lg:justify-start gap-2 flex-row lg:gap-10 px-0 p-4">
              {links.map((link) => (
                <NavLink key={link.id} link={link} />
              ))}
            </ul>
          </nav>
        </Section>
      </div>
    </>
  );
};
