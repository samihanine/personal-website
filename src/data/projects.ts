import aled from "../../public/images/aled.png";
import cabinetlatif from "../../public/images/cabinetlatif.png";
import tutoriel from "../../public/images/tutoriel.png";
import practice from "../../public/images/practice.png";
import docshare from "../../public/images/docshare.png";
import printer from "../../public/images/printer.png";
import reddimension from "../../public/images/reddimension.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  date: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "ALED",
    description:
      "ALED is a platform for students. It allows the users to exchange documents and ask questions in a forum. It also gives the possibility to consult one's timetable, one's grades and to discuss with other students.",
    image: aled,
    date: "2021-03-01",
    link: "https://www.youtube.com/watch?v=4WxEdc81LhU",
  },
  {
    title: "Cabinet Latif",
    description:
      "This is a showcase site that I created for an accounting firm based in Nantes, Cabinet Latif. I created the visuals and the code based on the client's feedback.",
    image: cabinetlatif,
    date: "2021-03-01",
    link: "https://cabinetlatif.fr/",
  },
  {
    title: "Tutoriels",
    description:
      "I created these tutorials with the aim of helping fellow students learn Javascript. Recently, I also wrote a tutorial on React.js. In the future, I plan to cover PHP and SQL.",
    image: tutoriel,
    date: "2021-03-01",
    link: "https://samihanine.github.io/tuto/",
  },
  {
    title: "Practice",
    description:
      "I designed this site as part of a tender for a human resources company: Practice. The challenge was to meet the specifications in terms of visuals. ",
    image: practice,
    date: "2021-03-01",
    link: "https://samihanine.github.io/practices/",
  },
  {
    title: "Doc Share",
    description:
      "I developed a document sharing application for the consulting firm Emergence Entreprise. It allows customers to consult, download and send documents. The challenge of this application was related to data security.",
    image: docshare,
    date: "2021-03-01",
    link: "https://www.emergenceentreprise.com/",
  },
  {
    title: "Senzu Printer",
    description:
      "Senzu Printer is a web application that allows printing of shipping labels for connected products. It is created using Electron and React, and is designed for use by printing partners of the company.",
    image: printer,
    date: "2021-03-01",
    link: "https://welcome.senzu.app/fr_fr/",
  },
  {
    title: "Jeu Web",
    description:
      "I've made more than a dozen video games directly integrated in the browser. Red Dimension is my biggest javascript game project to date. I loved the creative process that came out of this project",
    image: reddimension,
    date: "2021-03-01",
    link: "https://samihanine.github.io/red-dimension/",
  },
];
