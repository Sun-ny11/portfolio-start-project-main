import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "../skills/Skils_Styles";

export const Testimony: React.FC =() => {
   return (
      <StyledTestimony>
         <Container>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction="column" align="center">
               <S.IconeWrapper>
                  <Icon iconId={"brackets"}/>
               </S.IconeWrapper>
               <Slider />
            </FlexWrapper>
         </Container>
         
         
      </StyledTestimony>
   );
};

const StyledTestimony = styled.section`
   ${S.IconeWrapper} {
      margin: 26px 0 72px;
   }
`