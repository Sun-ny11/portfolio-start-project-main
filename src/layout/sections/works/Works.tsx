import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/meny/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj1.webp"
import timerlImg from "../../../assets/images/proj2.webp"
import { Container } from "../../../components/Container";

const itemsWorks = ["All", "landing page", "React", "spa"]

export const Works =() => {
   return (
      <StyledWorks>
         <Container>
            <SectionTitle>My Works</SectionTitle>

            <Menu itemsMenu={itemsWorks} />

            <FlexWrapper justify="space-around">
               <Work title={"Social Network"} 
                     text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                     src={socialImg}/>
               <Work title={"Timer"}
                     text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                     src={timerlImg}/>
            </FlexWrapper>
         </Container>
         
      </StyledWorks>
      
   );
};

const StyledWorks = styled.section`
   min-height: 100vh;
   background-color: #75f1ab;
`