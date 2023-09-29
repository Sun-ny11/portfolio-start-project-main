import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";



export const MobileMenu =(props:{menuItems:Array<string>}) => {
   return (
      <StyledMobileMenu>
         <BurgerButton isOpen={false}>
            <span></span>
         </BurgerButton>

         <MobileMenuPopup isOpen={false}>
            <ul>
               {props.menuItems.map((item, index) => {
                  return <ListItem key={index}>
                           <Link href="">
                           {item}
                           <Mask>
                              <span>{item}</span>
                           </Mask>
                           <Mask>
                              <span>{item}</span>
                           </Mask>
                           </Link>
                        </ListItem>
                        
               })}
               
               
            </ul>
         </MobileMenuPopup>
            
         </StyledMobileMenu>
   );
};

const StyledMobileMenu = styled.nav`
   display: none;

   @media ${theme.media.tablet} {
      display: block;
   }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 9999;
   background-color: rgba(31, 31, 32, 0.90);
   display: none;

   ${props => props.isOpen && css<{isOpen: boolean}>`
      display: flex;
      justify-content: center;
      align-items: center;
   `}
   ul {
      display: flex; 
      gap: 30px;
      justify-content: center;
      flex-direction: column;
      align-items: center;
   }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
   position: fixed;
   top: -100px;
   right: -100px;
   width: 200px;
   height: 200px;
   z-index: 9999999;

   span {
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      left: 40px;
      bottom: 58px;

      ${props => props.isOpen && css<{isOpen: boolean}>`
         background-color: rgba(255, 255, 255, 0)
      `};

      &::before {
         content: "";
         display: block;
         width: 36px;
         height: 2px;
         background-color: ${theme.colors.font};
         position: absolute;
         transform: translateY(-10px);

         ${props => props.isOpen && css<{isOpen: boolean}>`
         transform: rotate(-45deg) translateY(0px);
         `};
      };
      &::after {
         content: "";
         display: block;
         width: 24px;
         height: 2px;
         background-color: ${theme.colors.font};
         position: absolute;
         transform: translateY(10px);

         ${props => props.isOpen && css<{isOpen: boolean}>`
         transform: rotate(45deg) translateY(0px);
         width: 36px;
         `};
      };
      
   }
`

const Link = styled.a`
   color: #7572D5;
   text-align: center;
   font-family: "Josefin Sans", sans-serif;
   font-size: 30px;
   font-weight: 400;
   color: transparent;

`
const Mask = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   display: inline-block;
   height: 50%;
   overflow-y: hidden;
   /* outline: 1px solid red; */
   color: ${theme.colors.accent};

   & + & {
      top: 50%;
      span {
         display: inline-block;
         transform: translateY(-50%);
      }
   }
`
const ListItem = styled.li`
   position: relative;
   &::before {
      content: "";
      height: 3px;
      background-color:${theme.colors.accent};
      display: none;
      position: absolute;
      top: 50%;
      left: -10px;
      right: -10px;
      z-index: 1;

   }
   &:hover {
      &::before {
         display:inline-block;
      }
      ${Mask} {
         transform: scale(1);
         transform: skewX(11deg) translateX(5px);
         color: ${theme.colors.font};
         & + ${Mask} {
            transform: skewX(11deg) translateX(-5px);
         }
      }
      
   }
`