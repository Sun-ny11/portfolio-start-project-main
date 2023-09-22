import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/meny/Menu";

const items = ["Home","Skills", "Works","Testimony","Contact"]

export const Header =() => {
   return (
      <StyledHeader>
         <Logo />
         <Menu itemsMenu={items}/>
      </StyledHeader>
   );
};



const StyledHeader = styled.header`
   background-color: #6bbaf2;
   display: flex; 
   justify-content: space-between;
`
