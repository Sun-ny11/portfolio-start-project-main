import React from "react";
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC =() => {
   return (
      <S.Main id={"home"}>
         <Container>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} customWrap={"nowrap"}>
               <div>
                  <S.SmaleText>Hi There</S.SmaleText>
                  <S.Name>I am <span>Stanislav Petrov</span></S.Name>
                  {/* <S.MainTitle> </S.MainTitle> */}
                  <S.MainTitle>
                     <p>A Web Developer.</p>
                  <Typewriter
                     options={{
                        strings: ["A Web Developer."],
                        autoStart: true,
                        loop: true,
                     }}
                  />
                  </S.MainTitle>
               </div>
               <Tilt>
                  <S.PhotoWrapper>
                     <S.Photo src={photo} alt="Всегда что-то есть" />
                  </S.PhotoWrapper>
               </Tilt>
               
            </FlexWrapper>
         </Container>
         
         
      </S.Main>

   );
};
