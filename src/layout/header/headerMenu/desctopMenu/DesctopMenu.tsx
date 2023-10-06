import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";



export const DesctopMenu: React.FC =() => {
   return (
      <S.DesctopMenu>
         <Menu />
         </S.DesctopMenu>
   );
};


