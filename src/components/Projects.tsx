import { Section } from "./Section";
import { projects, type Project } from "../data";
import Image from "next/image";
import React from "react";
import { LinkIcon } from "@/icon/LinkIcon";
import { useTranslation } from "next-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = React.useState(0);
  const project: Project = projects[currentImage];
  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = projects.reduce((acc: any, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = projects.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  return (
    <Section id="projects" color="black" className="py-[80px]">
      <h2
        data-aos="fade-right"
        className="text-2xl lg:text-5xl font-bold mb-6 lg:mb-12"
      >
        {t`projects.title`}
      </h2>
      <div className="flex items-center justify-between gap-4 lg:gap-8 lg:flex-row flex-col-reverse w-full">
        <a
          className="flex-1 carousel"
          href={project.link}
          target="_blank"
          rel="noreferrer"
          data-aos="fade-right"
        >
          {projects.map((project, index) => {
            return (
              <div
                className="w-full flex-shrink-0"
                key={index.toString()}
                ref={refs[index]}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  placeholder="blur"
                  className={
                    "w-full object-contain transition-all ease-in-out duration-1000 transform slide aspect-[2/1]"
                  }
                  id={index.toString()}
                />
              </div>
            );
          })}
        </a>

        <div
          data-aos="fade-left"
          className="flex flex-col justify-between gap-12 items-end lg:w-[400px] lg:h-[500px]"
        >
          <div className="flex justify-end mt-12 lg:mt-0">
            <h3 className="absolute z-[0] mt-[-120px] ml-[-160px] text-[250px] text-secondary font-bold drop-shadow-[0_0px_1.5px_rgba(255,255,255,1)]">
              0{currentImage + 1}
            </h3>
            <h3 className="relative text-[80px] z-[2] font-bold lg:text-end leading-[90px] h-[200px] lg:h-fit">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-col relative z-[2] max-w-[400px] text-center lg:text-end lg:mt-0 gap-4">
            <p className="text-grey">{t(project.description)}</p>
            <a
              href={project.link}
              rel="noreferrer"
              target="_blank"
              className="font-bold flex self-center lg:self-end gap-2"
            >
              <LinkIcon className="h-6 w-6" /> <p>{t`projects.see`}</p>
            </a>
          </div>

          <div className="flex gap-8 mb-8 lg:mb-0 w-full lg:w-fit justify-between">
            <button
              onClick={previousImage}
              className="bg-primary text-secondary font-bold p-2 px-4"
            >
              ← {t`projects.previous`}
            </button>
            <button
              onClick={nextImage}
              className="bg-primary text-secondary font-bold p-2 px-6"
            >
              {t`projects.next`} →
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
