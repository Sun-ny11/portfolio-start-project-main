import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusTupe } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj1.webp"
import planer from "../../../assets/images/Planer.webp"
import landing from "../../../assets/images/Landing.webp"
import converter from "../../../assets/images/Converter.webp"
import cards from "../../../assets/images/Cards.webp"
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";
import {AnimatePresence, motion } from "framer-motion"


const tabsItems: Array<{status: TabsStatusTupe, title: string}> = [
   {
      title: "All",
      status: "all",
   },
   {
      title: "landing page",
      status: "landing",
   },
   {
      title: "React",
      status: "react",
   },
   {
      title: "spa",
      status: "spa",
   },
]

const worksData = [
   {
      title: "Social Network",
      src: socialImg,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "spa",
      id: 1,
      code:"https://github.com/Sun-ny11/samurai-way-main",
      demo:""
   },

   {
      title: "landing Game",
      src: landing,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "landing",
      id: 2,
      code:"https://github.com/Sun-ny11/landing-game",
      demo:"https://sun-ny11.github.io/landing-game/"
   },
   {
      title: "Currency Converter",
      src: converter,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "react",
      id: 3,
      code:"https://github.com/Sun-ny11/currency-converter",
      demo:"https://sun-ny11.github.io/currency-converter/"
   },
   {
      title: "Tasks Planner",
      src: planer,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "react",
      id: 4,
      code:"https://github.com/Sun-ny11/tasksPlanner",
      demo:"https://sun-ny11.github.io/tasksPlanner"
   },
   {
      title: "Flash Cards",
      src: cards,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "spa",
      id: 5,
      code:"https://github.com/Sun-ny11/flash-cards",
      demo:"https://flash-cards-mauve.vercel.app"
   },

]

export const Works: React.FC =() => {

   const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
   let filteredWorks = worksData

   if(currentFilterStatus === "landing") {
      filteredWorks = worksData.filter(work => work.type === "landing")
   }
   if(currentFilterStatus === "react") {
      filteredWorks = worksData.filter(work => work.type === "react")
   }
   if(currentFilterStatus === "spa") {
      filteredWorks = worksData.filter(work => work.type === "spa")
   }

   function changeFilterStatus (value: TabsStatusTupe) {
      setCurrentFilterStatus(value)
   }
   return (
      <S.Works id={"works"}>
         <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
            <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
               <AnimatePresence>

                  {filteredWorks.map((w)=>{
                     return(
                        <motion.div style={{  width: "400px", flexGrow: 1, maxWidth: "540px",}}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={w.id}
                        >
                           <Work title={w.title} key={w.id}
                                    src={w.src}
                                    text={w.text}
                                    demo={w.demo}
                                    code={w.code}
                                 />
                           
                        </motion.div>
                        
                     ) 
                  })}  
               </AnimatePresence>
            </FlexWrapper>
         </Container>
         
      </S.Works>
      
   );
};