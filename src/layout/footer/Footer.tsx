import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Footer =() => {
   return (
      <StyledFooter>
         <Container>
            <FlexWrapper direction={"column"} align={"center"}>
            <Name>Stanislav</Name>
            <SocialList>
               <SocialItem>
                  <SocialLink>
                     <Icon iconId={"insta"} width={"21"} height={"21"} viewBox={"0 0 21px 21px"}></Icon>
                  </SocialLink>
               </SocialItem>

               <SocialItem>
                  <SocialLink>
                     <Icon iconId={"telegram"} width={"21"} height={"21"} viewBox={"0 0 21px 21px"}></Icon>
                  </SocialLink>
               </SocialItem>

               <SocialItem>
                  <SocialLink>
                        <Icon iconId={"vk"} width={"21"} height={"21"} viewBox={"0 0 21px 21px"}></Icon>
                     </SocialLink>
               </SocialItem>

               <SocialItem>
                  <SocialLink>
                     <Icon iconId={"linkedin"} width={"21"} height={"21"} viewBox={"0 0 21px 21px"}></Icon>
                  </SocialLink>
               </SocialItem>

            </SocialList>
            <Copyright>© 2023 Stanislav Petrov, All Rights Reserved.</Copyright>
         </FlexWrapper>
         </Container>

         
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   background-color: ${theme.colors.primaryBg};
   padding: 40px 0;
`
const Name = styled.span`
   font-family: Josefin Sans, sans-serif;
   font-size: 22px;
   font-weight: 700;
   letter-spacing: 3px;
`
const SocialList = styled.ul`
   display: flex;
   gap: 20px;
   margin: 30px 0;

`
const SocialItem = styled.li`
   
`
const SocialLink = styled.a`
   border-radius: 50%;
   background-color: rgba(255, 255, 255, 0.10);
   width: 35px;
   height: 35px;
   
   display: flex;
   justify-content: center;
   align-items: center;

   color:${theme.colors.accent};

   &:hover {
      color:${theme.colors.primaryBg};
      transform: translateY(-4px);
      background-color: ${theme.colors.accent}
   }
`
const Copyright = styled.small`
   opacity: 0.5;
   font-size: 12px;
   font-weight: 400;
   text-align: center;
`