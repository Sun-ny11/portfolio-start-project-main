import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
   background-color: rgba(31, 31, 32, 0.9);
   padding: 20px 0;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 9999;

   @media ${theme.media.mobile} {
      padding: 14px 0;
   }
`
export const S = {
   Header,
}
