import React from "react";
import photo from "../../../assets/images/photo.webp"
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main =() => {
   return (
      <StyledMain>
         <Container>
            <FlexWrapper align={"center"} justify={"space-around"}>
               <div>
                  <span>Hi There</span>
                  <Name>I am Stanislav Petrov</Name>
                  <MainTitle>A Web Developer. </MainTitle>
               </div>

               <Photo src={photo} alt="Всегда что-то есть" />
            </FlexWrapper>
         </Container>
         
         
      </StyledMain>

   );
};
const StyledMain = styled.section`
   min-height: 100vh;
   background-color: #86bff8;
`
const Photo = styled.img`
   width:350px;
   height: 430px;
   object-fit: cover;
`
const MainTitle = styled.h1`
   
`

const Name = styled.h2`
   
`