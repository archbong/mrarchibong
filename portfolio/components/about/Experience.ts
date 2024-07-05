import { AboutMeProps, ExperienceProps } from "@/typings";

export const experiences: ExperienceProps[] = [
  {
    id: 1,
    organization: "PrimeReserved",
    role: "CTO",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross- functional teams to deliver high-quality software solutions.",
    startYear: 2023,
    endYear: "Present",
  },
  {
    id: 2,
    organization: "FreeLancing",
    role: "Fullstack",
    description:
      "Developed and maintained full-stack web applications using React, Django, and Django Rest Framework. Collaborated with cross- functional teams to deliver high-quality software solutions.",
    startYear: 2020,
    endYear: "Present",
  },
  {
    id: 3,
    organization: "ZuriHNGi8",
    role: "React Developer",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross- functional teams to deliver high-quality software solutions.",
    startYear: 2020,
    endYear: 2020,
  },
  {
    id: 4,
    organization: "Living Faith Church, WorldWide",
    role: "ICT/Office Assistance",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross- functional teams to deliver high-quality software solutions.",
    startYear: 2019,
    endYear: 2019,
  },
  {
    id: 5,
    organization: "XircomICT",
    role: "ICT/Network Engineer",
    description:
      "Installed, configured and maintained network infrastructures as a Network Engineer. Collaborated with cross- functional teams to deliver high-quality IT/Network soultions.",
    startYear: 2017,
    endYear: 2019,
  },
];

export const educations: ExperienceProps[] = [
  {
    id: 1,
    organization: "Ken Saro-Wiwa Polythenic",
    role: "Business Administration and Management",
    description:
      "Graduated with a GPA of 3.8 and received the Dean's List award for academic excellence.",
    startYear: 2016,
  },
];

export const certificates: ExperienceProps[] = [
  {
    id: 1,
    organization: "ALX Afican",
    role: "Software Engineering Programme - C9",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross- functional teams to deliver high-quality software solutions.",
    startYear: 2023,
  },
  {
    id: 2,
    organization: "ALX Afican",
    role: "Ai Career Essentials - C1",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross- functional teams to deliver high-quality software solutions.",
    startYear: 2023,
  },
  {
    id: 3,
    organization: "ALX Afican",
    role: "FoundersAcademy - C1",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross- functional teams to deliver high-quality software solutions.",
    startYear: 2023,
  },
];

export const aboutMe: AboutMeProps = {
  fullname: "Samuel Archibong",
  image: "/samuel.jpg",
  organization: "ALX Afican",
  role: "Software Engineer | Both-Stack Developer",
  description: `I am Samuel Chinonso Archibong from Nigeria. With a robust background in software engineering, 
        I currently serve as the CTO of PrimeReserved, a leading tech agency. My journey in technology has been driven by a passion for creating impactful solutions and a commitment to mentoring aspiring developers.`,
  missionVision: `My mission is to build a thriving SaaS business in Nigeria while cementing my reputation as a distinguished software engineer and mentor. I aim to leave a lasting impact on the tech industry by nurturing talent and driving technological advancement.`,
  experience: 5,
  interest: `Beyond my professional endeavors, I am deeply interested in exploring the meaning of life, purpose, creation, care, and preservation of life. These interests fuel my dedication to creating meaningful and sustainable technology solutions.`,
  industry: ['Health Tech', 'EdTech', 'Saas', 'E-commerce']
};
