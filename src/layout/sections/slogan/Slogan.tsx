import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan: React.FC =() => {
   return (
      <StyledSlogan>
         <Container>
            <FlexWrapper direction="column" align="center">
               <SectionTitle>I Am Available For Work</SectionTitle>
               <Button>Hire me</Button>
            </FlexWrapper>
            
         </Container>
         
      </StyledSlogan>
   
   );
};


const StyledSlogan = styled.section`
   background-color: #70b4b5;
   min-height: 30vh;
`