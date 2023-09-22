import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Slogan =() => {
   return (
      <StyledSlogan>
         <Container>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
               <Button>Hire me</Button>
         </Container>
         
      </StyledSlogan>
   
   );
};


const StyledSlogan = styled.section`
   background-color: #70b4b5;
   min-height: 30vh;
`