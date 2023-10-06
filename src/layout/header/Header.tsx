import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { TabMenu } from "../sections/works/tabMenu/TabMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesctopMenu } from "./headerMenu/desctopMenu/DesctopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";



export const Header: React.FC =() => {
   const [width, setWidth] = useState(window.innerWidth)
   const breakpoint = 768;

   useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);

      return () => window.removeEventListener("resize", handleWindowResize)
   }, []);
   return (
      <S.Header>
         <Container>
            <FlexWrapper justify="space-between" align="center">
               <Logo />

               {width < breakpoint? <MobileMenu />
                                    :<DesctopMenu /> }
               
               
            </FlexWrapper>
            
         </Container>
         
      </S.Header>
   );
};




