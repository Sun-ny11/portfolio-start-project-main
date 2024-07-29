import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

const socialItemData = [
   {
      iconId: "insta",
      href:"https://www.instagram.com/sun_ny11_?igsh=MTVoZWZhOXNpeTdvcQ%3D%3D&utm_source=qr"
   },
   {
      iconId: "telegram",
      href:"https://t.me/sun_ny11"
   },
   {
      iconId: "vk",
      href:"https://vk.com/sun_ny11"
   },
   {
      iconId: "linkedin",
   },
]

export const Footer: React.FC =() => {
   return (
      <S.Footer>
         <Container>
            <FlexWrapper direction={"column"} align={"center"}>
            <S.Name>Stanislav</S.Name>
            <S.SocialList>
               {socialItemData.map((s, index) => {
                  return (
                     <S.SocialItem key={index}> 
                        <S.SocialLink href={s.href}> 
                           <Icon iconId={s.iconId} width={"21"} height={"21"} viewBox={"0 0 21 21"}></Icon>
                        </S.SocialLink>
                     </S.SocialItem>
                  )
               })}
            </S.SocialList>
            <S.Copyright>© 2023 Stanislav Petrov, All Rights Reserved.</S.Copyright>
         </FlexWrapper>
         </Container>

         
      </S.Footer>
   );
};

