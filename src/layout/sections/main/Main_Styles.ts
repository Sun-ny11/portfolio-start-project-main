import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"


const Main = styled.section`
   min-height: 100vh;
   display: flex;
`
const Photo = styled.img`
   width:350px;
   height: 430px;
   object-fit: cover;
   margin-right: 20px;

   @media ${theme.media.mobile} {
      width:310px;
      height: 380px;
   }
`
const MainTitle = styled.h1`
${font({weight:400, Fmax: 27, Fmin: 20})}
   font-size: 27px;
   font-weight: 400;
`

const Name = styled.h2`
   ${font({family:"Josefin Sans, sans-serif", weight:700, Fmax: 50, Fmin: 36})}
   letter-spacing: 2.5px;
   margin: 10px 0;

   span {
      position: relative;
      z-index: 0;
      white-space: nowrap;
      &::before {
         content: "";
         display: inline-block;
         width: 100%;
         height: 20px;
         background-color: ${theme.colors.accent};

         position: absolute;
         bottom: 0;
         z-index: -1;
      }
   }
   @media ${theme.media.mobile} {
      margin: 15px 0 22px;
   }

`
const SmaleText = styled.span`
   font-size: 14px;
   font-weight: 400;

`
const PhotoWrapper = styled.div`
   position: relative;
   z-index: 0;
   
   &::before {
      content: "";
      width: 360px;
      height: 470px;
      border: 5px solid ${theme.colors.accent};
      
      position: absolute;
      top: -24px;
      left: 34px;
      z-index: -1;

      @media ${theme.media.mobile} {
      width:314px;
      height: 414px;
      top: -17px;
      left: 20px;
   }
   
   }
   @media ${theme.media.mobile} {
      margin-top: 65px;
   }
`

export const S = {
   Main,
   PhotoWrapper,
   Photo,
   MainTitle,
   Name,
   SmaleText,
}