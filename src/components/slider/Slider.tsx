import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider =() => {
   return (
      <StyledSlider >
         <FlexWrapper>
            <Slid>
               <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
               <Name>@ivan ivanow</Name>
            </Slid>
         </FlexWrapper>
         <Pagination>
            <span></span>
            <span></span>
            <span></span>
         </Pagination>
      </StyledSlider>
   );
};

const StyledSlider = styled.div`
   border: 1px solid red;
   max-width: 500px;
   display: flex;
   flex-direction: column;
   align-items: center;
`
const Slid = styled.div`
   
   text-align: center;

`
const Text = styled.p`
   
`
const Name = styled.div`
   
`
const Pagination = styled.span`
   span {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 5px;
      background-color: mediumaquamarine;
   }
`