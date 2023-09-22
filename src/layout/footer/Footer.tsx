import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";

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
   background-color: #442b2b;
   min-height: 20vh;
`
const Name = styled.span`
   
`
const SocialList = styled.ul`
   display: flex;
   gap: 30px;

`
const SocialItem = styled.li`
   
`
const SocialLink = styled.a`
   
`
const Copyright = styled.small`
   
`