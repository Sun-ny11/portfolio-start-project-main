import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skils_Styles";
import { Fade } from "react-awesome-reveal";


const skilData =[  

   {
      iconId: "codeSvg",
      title: "html5",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   }, 
   {
      iconId: "css",
      title: "css3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   },
   {
      iconId: "react",
      title: "React",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   },
   {
      iconId: "ts",
      title: "typescript",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   },
   {
      iconId: "styleComp",
      title: "styled components",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   },
   {
      iconId: "figma",
      title: "WEB DESIgN",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   },
   {
      iconId: "codeSvg",
      title: "Storybook",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   },
   {
      iconId: "codeSvg",
      title: "Redux",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   },
   {
      iconId: "codeSvg",
      title: "Git",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
   },
   
]

export const Skills: React.FC =() => {
   return (
      <S.Skills id={"skills"}>
         <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
               <Fade cascade damping={0.2}>
                  {skilData.map((s, index) => {
                     return <Skill iconId={s.iconId} key={index}
                     title={s.title} 
                     description={s.description}/>
                  })}
               </Fade>
               
            </FlexWrapper>
         </Container>
         
      </S.Skills>
   );
};

