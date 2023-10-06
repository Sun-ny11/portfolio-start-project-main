import styled from "styled-components"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
   position: relative;
   background-color: ${theme.colors.primaryBg};
   padding: 40px 0;
`
const Name = styled.span`
   ${font({weight:700, family: "Josefin Sans, sans-serif", Fmax:22,Fmin:16})}
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

   transition: ${theme.animation.transition};

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

export const S = {
   Copyright,
   SocialLink,
   SocialItem,
   SocialList,
   Name,
   Footer,
}