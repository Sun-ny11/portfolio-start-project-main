import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";



export const MobileMenu: React.FC =() => {
   const[menuIsOpen, setmenuIsOpen] = useState(false);
   const onBurgerButtonClick = () => { setmenuIsOpen(!menuIsOpen)};
   return (
      <S.MobileMenu>
         <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerButtonClick}>
            <span></span>
         </S.BurgerButton>

         <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
            <Menu />
         </S.MobileMenuPopup>
            
         </S.MobileMenu>
   );
};
