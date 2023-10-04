import React from "react";
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";


export const Main: React.FC =() => {
   return (
      <S.Main>
         <Container>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
               <div>
                  <S.SmaleText>Hi There</S.SmaleText>
                  <S.Name>I am <span>Stanislav Petrov</span></S.Name>
                  <S.MainTitle>A Web Developer. </S.MainTitle>
               </div>
               <S.PhotoWrapper>
                  <S.Photo src={photo} alt="Всегда что-то есть" />
               </S.PhotoWrapper>
            </FlexWrapper>
         </Container>
         
         
      </S.Main>

   );
};
