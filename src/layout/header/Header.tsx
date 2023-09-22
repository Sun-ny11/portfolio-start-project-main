import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/meny/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["Home","Skills", "Works","Testimony","Contact"]

export const Header =() => {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper justify="space-between" align="center">
               <Logo />
               <Menu itemsMenu={items}/>
            </FlexWrapper>
            
         </Container>
         
      </StyledHeader>
   );
};



const StyledHeader = styled.header`
   background-color: #6bbaf2;
`
