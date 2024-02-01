import FadeInComponent from "~/components/fadeInComponent";
import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import ProjectCard from "~/components/ProjectCard";
import SectionTitle from "~/components/sectionTitle";
import absensi from "../../assets/project-pictures/AplikasiAbsensi.png";
import Gadget4Fun from "../../assets/project-pictures/LogoGadget.png";
import kasir from "../../assets/project-pictures/kasir.png"
import shoping from "../../assets/project-pictures/ShopingNotes.png"

export const meta: MetaFunction = () => {
  return [
    { title: "Yusuf's Projects" },
    { name: "description", content: "A projects that made by Fanes Pratama" },
  ];
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  const projectList = [
    {
      year: '2023',
      projects: [
        {
          link: 'https://github.com/MYusufRahmana/Gadget4Fun_Apps',
          title: 'Gadget4Fun',
          description: 'An application inspired by the GSM Arena website, Gadget4Fun has a similar content structure to GSM Arena, providing information about various gadgets.',
          img: Gadget4Fun
        },
        {
          link: 'https://github.com/MYusufRahmana/Aplikasi_Absensi_Cv.Anugerah-Tirta-Cemerlang',
          title: 'Aplikasi Absensi CV. Anugerah Tirta Cemerlang',
          description: '"This attendance application is used to record the attendance of coaches, members, and administrators."',
          img: absensi
        },
        {
          link: 'https://figma.com/@myusufrhmn',
          title: 'Figma Design Seblak Kania Kasir',
          description: 'The design of the Seblak Kania cashier application created in Figma is intended for managing orders, inventory, and revenue history.',
          img: kasir
        },
      ]
    },
    {
      year: '2024',
      projects: [
        {
          link: 'https://aplikasibelanja.netlify.app',
          title: 'Shoping Notes',
          description: '"Shopping Notes" is an application built using the React programming language, which serves the purpose of recording all the items we intend to buy or shop for.',
          img: shoping
        },
      
      ]
    },
  ]

  return (
    <div className="mb-10">
      {projectList.map((item, index) => (
        <div className="mt-7" key={index}>
          <FadeInComponent delay={1 * index} slideIn={true}>
            <SectionTitle text={item.year} />
            <div className="flex flex-wrap gap-5">
              {item.projects.map((project, indexchild) => (
                <div className="md:w-52" key={indexchild}>
                  <ProjectCard
                    link={project.link}
                    title={project.title} description={project.description}
                    img={project.img} delay={index + 0.3 + indexchild * 0.5} />
                </div>
              ))}
            </div>
          </FadeInComponent>
        </div>
      ))}
    </div>
  )
}

export default Projects