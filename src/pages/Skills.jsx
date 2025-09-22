import LogoLoop from "../components/logosLoop/LogoLoop";
import SpotlightCard from "../components/skillsCard/SpotlightCard";

import { TypingText, SkillsContainer } from "./styles";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiCssmodules,
  SiGit,
  SiGithub,
  SiJira,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiSupabase,
  SiReactquery,
  SiReactrouter,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiRedux />,
    title: "Redux",
    href: "https://redux.js.org/",
  },
  {
    node: <SiCssmodules />,
    title: "CSS Modules",
    href: "https://css-tricks.com/css-modules-part-1-need/",
  },
  {
    node: <SiGit />,
    title: "Git",
    href: "https://git-scm.com/",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com/",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com/",
  },
  {
    node: <SiSupabase />,
    title: "Supabase",
    href: "https://supabase.com/",
  },
  {
    node: <SiJira />,
    title: "Jira",
    href: "https://www.atlassian.com/software/jira?campaign=18442480203&adgroup=140479881486&targetid=kwd-855725830&matchtype=e&network=g&device=c&device_model=&creative=687972959756&keyword=jira&placement=&target=&ds_eid=700000001558501&ds_e1=GOOGLE&gad_source=1&gad_campaignid=18442480203&gbraid=0AAAAAD_uzhDZci3a7spAMKbqOKWEd2KOu&gclid=Cj0KCQjw_rPGBhCbARIsABjq9cdJACQZ7hAHbyicMsdki4qWwJysiAViFhXbWQjZqrJIcDLhkU4JVo8aAn_3EALw_wcB",
  },
  {
    node: <SiReactquery />,
    title: "React Query",
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  {
    node: <SiReactrouter />,
    title: "React Router",
    href: "https://reactrouter.com/",
  },
];

function Skills() {
  return (
    <SkillsContainer>
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="var(--slate-600)"
      >
        <TypingText
          text={[
            "As a Frontend Developer with hands-on experience in building responsive and scalable web applications",
            "I specialize in React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Redux and React Query",
            "I am passionate about creating clean, maintainable code and delivering modern, user-friendly interfaces that enhance user experience",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          textColors="var(--indigo-50)"
          cursorCharacter="|"
        />
        <div>
          <div
            style={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={100}
              gap={40}
              pauseOnHover
              fadeOut
              scaleOnHover
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </SpotlightCard>
    </SkillsContainer>
  );
}

export default Skills;
