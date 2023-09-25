import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
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

            <TabMenu itemsMenu={itemsWorks} />

            <FlexWrapper justify="space-between" align="flex-start">
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
   

`
