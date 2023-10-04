import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

const socialItemData = [
   {
      iconId: "insta"
   },
   {
      iconId: "telegram"
   },
   {
      iconId: "vk"
   },
   {
      iconId: "linkedin"
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
                        <S.SocialLink>
                           <Icon iconId={s.iconId} width={"21"} height={"21"} viewBox={"0 0 21px 21px"}></Icon>
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

