import { Link, MetaFunction } from "@remix-run/react";
import Card from "~/components/card";
import profile from "../../assets/PasFoto.jpeg";
import SectionTitle from "~/components/sectionTitle";
import RedirectLink from "~/components/redirectLink";
import chevron_right from "../../assets/FotoProfil.png";
import logo_github from "../../assets/logos/github.svg";
import logo_linkedin from "../../assets/logos/linkedin.svg";
import logo_instagram from "../../assets/logos/instagram.svg";
import logo_email from "../../assets/logos/email.svg";
import SocialMedia from "~/components/socialMedia";
import FadeInComponent from "~/components/fadeInComponent";
import { useEffect } from "react";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  return {
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Yusuf's Portofolio" },
    {
      name: "description",
      content: "A Portofolio Website of Muhamad Yusuf Rahmana",
    },
  ];
};

export default function Index() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <FadeInComponent delay={0} slideIn={true}>
        <Card>
          <div className="md:flex gap-10 text-center w-full">
            <div className="w-fit md:ms-8 mx-auto">
              <div className="relative w-28 h-28">
                <img
                  className="rounded-full border-3 border-gray-100 shadow-sm"
                  src={profile}
                  alt="profile picture"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="font-semibold text-3xl font_sans">
                Muhamad Yusuf Rahmana
              </div>
              <div className="text-lg">Frontend Web Developer</div>
            </div>
          </div>
        </Card>
      </FadeInComponent>

      <FadeInComponent delay={0.3} slideIn={true}>
        <Card className="mb-10">
          <div className="px-2">
            <div>
              <div>
                <SectionTitle text="Description" />
              </div>
              <div className="md:text-justify">
                Hi, I'm Yusuf, a graduate of Information Systems from Multi Data
                University Palembang. Although I have completed my studies and
                finished my final thesis defense, I have not yet graduated. I am
                skilled in Flutter, Laravel, JavaScript, and Firebase, with
                experience in both independent and team-based projects.
                Adaptable and enthusiastic, I excel in presenting ideas and
                collaborating to achieve goals
              </div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Bio" />
              </div>
              <div>
                <div className="flex gap-3">
                  <div className="font-bold">2002</div>
                  <div>Born in Palembang, Indonesia</div>
                </div>

                <div className="flex gap-3">
                  <div className="font-bold">2020</div>
                  <div>
                    Graduated from{" "}
                    <RedirectLink link="https://yppproklamasi1945.wordpress.com">
                      Yayasan Pendidikan Proklamasi 1945
                    </RedirectLink>{" "}
                    in Bekasi with a major in{" "}
                    <span className="font-semibold">Natural Sciences</span>.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="font-bold whitespace-nowrap">2021 - 2025</div>
                  <div>
                    Student at{" "}
                    <RedirectLink link="https://mdp.ac.id/">
                      Multi Data Palembang University
                    </RedirectLink>{" "}
                    with a major in{" "}
                    <span className="font-semibold">Information System</span>.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="font-bold whitespace-nowrap">2023 - now</div>
                  <div>
                    Online courses at{" "}
                    <RedirectLink link="https://www.dicoding.com">
                      Dicoding
                    </RedirectLink>
                    <div>
                      <RedirectLink link="https://www.linkedin.com/in/myusufrhmn/">
                        Belajar Analisi Data Dengan Python
                      </RedirectLink>
                    </div>
                    <div>
                      <RedirectLink link="https://www.linkedin.com/in/myusufrhmn/">
                        Belajar Dasar Pemograman JavaScript
                      </RedirectLink>
                    </div>
                    <div>
                      <RedirectLink link="https://www.linkedin.com/in/myusufrhmn/">
                        Belajar Membuat Aplikasi Web Dengan React
                      </RedirectLink>
                      <span className="font-semibold"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div>
                <SectionTitle text="WORK EXPERIENCE" />
              </div>

              {/* PT Jasa Raharja */}
              <div className="flex gap-3">
                <div className="font-bold whitespace-nowrap">
                  Apr 2024 - Jul 2024
                </div>
                <div>
                  <div className="text-lg font-semibold text-primary">
                    Full-Stack Developer Intern at{" "}
                    <RedirectLink link="https://www.jasaraharja.co.id/">
                      PT Jasa Raharja Sumatera Selatan
                    </RedirectLink>
                  </div>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Developed a real-time Asset Monitoring Application using
                      Flutter and Firebase.
                    </li>
                    <li>
                      Implemented real-time notifications for tax payments,
                      service schedules, and insurance renewals using Firebase
                      Cloud Messaging (FCM).
                    </li>
                  </ul>
                </div>
              </div>

              {/* CV Anugerah Tirta Cemerlang */}
              <div className="flex gap-3 mt-4">
                <div className="font-bold whitespace-nowrap">
                  Jul 2023 - Dec 2023
                </div>
                <div>
                  <div className="text-lg font-semibold text-primary">
                    Full-Stack Developer Intern at{" "}
                    <RedirectLink link="">
                      CV. Anugerah Tirta Cemerlang
                    </RedirectLink>
                  </div>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Developed an Attendance and Payroll System to streamline
                      employee management and salary calculations.
                    </li>
                    <li>
                      Built the frontend using Laravel, ensuring a dynamic and
                      user-friendly interface.
                    </li>
                    <li>
                      Styled the application with Bootstrap, enhancing visual
                      appeal and responsiveness.
                    </li>
                    <li>
                      Designed and implemented the backend using MySQL, ensuring
                      efficient data storage and retrieval.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Programming Skills" />
              </div>
              <div>PHP,JavaScript,Python,Laravel, Bootstrap,MySQL</div>
              <Link
                preventScrollReset={true}
                to="/projects"
                className="flex gap-2 w-fit mt-3 rounded-md text-sm p-1.5 px-3 bg-green-300 bg-opacity-50 hover:bg-opacity-60 hover:duration-200 transition-colors cursor-pointer"
              >
                <div className="pb-0.5">My Projects</div>
                <div className="my-auto">
                  <img className="w-3" src={chevron_right} />
                </div>
              </Link>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Interest" />
              </div>
              <div>Game , Design Graphic , Music , Coding , Sports.</div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Social Media" />
              </div>
              <div>
                <SocialMedia
                  link="https://www.linkedin.com/in/myusufrhmn/"
                  img={logo_linkedin}
                  username="myusufrhmn"
                />
                <SocialMedia
                  link="https://www.instagram.com/myusufrhmn/"
                  img={logo_instagram}
                  username="myusufrhmn"
                />
                <SocialMedia
                  link="https://github.com/MYusufRahmana"
                  img={logo_github}
                  username="myusufrhmn"
                />
                <SocialMedia
                  img={logo_email}
                  username="yusufrahmana14@gmail.com"
                />
              </div>
            </div>
          </div>
        </Card>
      </FadeInComponent>
    </div>
  );
}
