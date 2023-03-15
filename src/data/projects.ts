import aled from "../../public/images/aled.png";
import cabinetlatif from "../../public/images/cabinetlatif.png";
import tutoriel from "../../public/images/tutoriel.png";
import practice from "../../public/images/practice.png";
import docshare from "../../public/images/docshare.png";
import printer from "../../public/images/printer.png";
import reddimension from "../../public/images/reddimension.png";
import milo from "../../public/images/milo.png";
import obeo from "../../public/images/obeobiogas.png";
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
    title: "Obeo Biogas",
    description: "projects.obeo",
    image: obeo,
    date: "2021-03-01",
    link: "https://www.obeobiogas.com",
  },
  {
    title: "ALED",
    description: "projects.aled",
    image: aled,
    date: "2021-03-01",
    link: "https://www.youtube.com/watch?v=4WxEdc81LhU",
  },
  {
    title: "Cabinet Latif",
    description: "projects.cabinetlatif",
    image: cabinetlatif,
    date: "2021-03-01",
    link: "https://cabinetlatif.fr/",
  },
  {
    title: "Tutoriels",
    description: "projects.tutorials",
    image: tutoriel,
    date: "2021-03-01",
    link: "https://samihanine.github.io/tuto/",
  },
  {
    title: "Practice",
    description: "projects.practice",
    image: practice,
    date: "2021-03-01",
    link: "https://samihanine.github.io/practices/",
  },
  {
    title: "Miloguide",
    description: "projects.miloguide",
    image: milo,
    date: "2021-03-01",
    link: "https://miloguide.com/",
  },
  {
    title: "Doc Share",
    description: "projects.docshare",
    image: docshare,
    date: "2021-03-01",
    link: "https://www.emergenceentreprise.com/",
  },
  {
    title: "Senzu Printer",
    description: "projects.senzu",
    image: printer,
    date: "2021-03-01",
    link: "https://welcome.senzu.app/fr_fr/",
  },
  {
    title: "Red Dimension",
    description: "projects.game",
    image: reddimension,
    date: "2021-03-01",
    link: "https://samihanine.github.io/red-dimension/",
  },
];
