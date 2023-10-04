import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skils_Styles";


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
   
]

export const Skills: React.FC =() => {
   return (
      <S.Skills>
         <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
               {skilData.map((s, index) => {
                  return <Skill iconId={s.iconId} key={index}
                  title={s.title} 
                  description={s.description}/>
               })};
            </FlexWrapper>
         </Container>
         
      </S.Skills>
   );
};

