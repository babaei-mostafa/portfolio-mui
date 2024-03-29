import { Skill } from "./Skill";
import { devSkills }from "../../constants/skills"
import { useEffect, useState } from "react";

export const Skills = () => {
      const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
        devSkills;
    
    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setJavascript((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 65);
          });

          setHtml((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 95);
          });

          setCss((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 73);
          });

          setReactJs((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 80);
          });

          setNodeJs((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 45);
          });

          setGit((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 50);
          });
        }, 200);

        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
      <>
        <Skill
          name={htmlSkill.name}
          icon={htmlSkill.icon}
          color={htmlSkill.color}
          value={html}
        />
        <Skill
          name={cssSkill.name}
          icon={cssSkill.icon}
          color={cssSkill.color}
          value={css}
        />
        <Skill
          name={jsSkill.name}
          icon={jsSkill.icon}
          color={jsSkill.color}
          value={javascript}
        />
        <Skill
          name={reactSkill.name}
          icon={reactSkill.icon}
          color={reactSkill.color}
          value={reactJs}
        />
        <Skill
          name={nodeSkill.name}
          icon={nodeSkill.icon}
          color={nodeSkill.color}
          value={nodeJs}
        />
        <Skill
          name={gitSkill.name}
          icon={gitSkill.icon}
          color={gitSkill.color}
          value={git}
        />
      </>
    );
}