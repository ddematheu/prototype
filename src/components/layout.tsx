import "../css/typography.css";

import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Home from './home';
import Header from "./header"
import './styles/layout.css'
import About from "./about";
import ReactDOM from "react-dom";
import Contact from "./contact";
import ProjectPage from "./project-page";
import Projects from "./projects";
import Footer from "./footer";
import { layoutStyle,layoutContentStyle } from "./styles/layout.styles";
import {TransitionGroup, Transition, CSSTransition } from "react-transition-group"
import {useTransition, animated} from "react-spring"

export interface LayoutProps{

}

export enum LayoutTypes {
  Home = "Home",
  Projects = "Projects",
  ProjectsMobile = "ProjectsMobile",
  About = "About",
  Contact = "Contact",
  Selected = "Selected"
}

export default function Layout (props:LayoutProps){

  const data = useStaticQuery(
  graphql`{
    allContentfulProject (sort: {order: ASC, fields: order}) {
      edges {
        node {
          contentful_id
          node_locale
          id
          name
          ano
          location
          uso
          topImage {
            fixed(width: 2388) {
              src
              height
            }
          }
          thumbnail {
            fixed(width: 768) {
              ... GatsbyContentfulFixed
            }
          }
          image1 {
            fixed(width: 1169) {
              src
              height
            }
          }
          image2 {
            fixed(width: 1169) {
              src
              height
            }
          }
          childContentfulProjectDescriptionTextNode {
            internal {
              content
            }
          }
          childContentfulProjectEquipoRichTextNode {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }`)

  const [layoutState, setLayoutState] = useState(LayoutTypes.Home);
  const [projectSelect, setProject] = useState(null);

  const [width, setWidth] = useState(701)
  const [language, setLanguage] = useState("es")

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if(layoutState === LayoutTypes.Projects)
    {
      let pageHeight = window.innerHeight;
      window.scrollBy({left: 0, top: pageHeight, behavior : "smooth"});
    }
  }, [layoutState])

  function headerOnClick(option){
    setLayoutState(option)
    if(option === LayoutTypes.Projects)
    {
      let pageHeight = window.innerHeight;
      window.scrollBy({left: 0, top: pageHeight, behavior : "smooth"});
    }
    return 1;
  }

  const duration = 1000;

  const inHome = layoutState === LayoutTypes.Home || layoutState === LayoutTypes.Projects
  const inAbout = layoutState === LayoutTypes.About
  const inContact = layoutState === LayoutTypes.Contact
  const inProjectPage = layoutState === LayoutTypes.Selected
  const inProjectMobile = layoutState === LayoutTypes.ProjectsMobile && width < 700

  return (
    <>
    <div style={layoutStyle}>
      <Header 
      layoutState = {layoutState}
      changeLayout = {setLayoutState}
      headerOnClick = {headerOnClick}
      width = {width}
      language = {language}
      setLanguage = {setLanguage}
      />
      <TransitionGroup>
        <div style={layoutContentStyle}>
          {
            (inHome) &&
            <CSSTransition in={inHome} timeout={duration} classNames="layout" >         
                <div >
                  <Home 
                  width = {width}
                  layoutState = {layoutState}
                  changeLayout = {setLayoutState}
                  projectSelect = {projectSelect}
                  selectProject = {setProject}
                  data = {data}
                  language = {language}
                  />
                  {width > 700 && <Projects 
                  data = {data}
                  layoutState = {layoutState}
                  changeLayout = {setLayoutState}
                  projectSelect = {projectSelect}
                  selectProject = {setProject}
                  width = {width}
                  language = {language}
                  />}
                </div>
            </CSSTransition>
          }  
          {
            inProjectMobile &&
            <CSSTransition in={inProjectMobile} timeout={duration} classNames="layout">          
                <div>
                  <Projects  
                  data = {data}
                  layoutState = {layoutState}
                  changeLayout = {setLayoutState}
                  projectSelect = {projectSelect}
                  selectProject = {setProject}
                  width = {width}
                  language = {language}
                  />
                </div>
            </CSSTransition>
          }
          {
            inAbout &&
            <CSSTransition in={inAbout} timeout={duration} classNames="layout">           
                <div >
                  <About  
                  width = {width}
                  language = {language}/>
                </div>
            </CSSTransition>
          }
          {
            inContact &&
            <CSSTransition in={inContact} timeout={duration} classNames="layout">            
                <div >
                  <Contact 
                  width = {width}
                  language = {language} />
                </div>
            </CSSTransition>
          }
          {
            inProjectPage &&
            <CSSTransition in={inProjectPage} timeout={duration} classNames="layout">     
                <div>
                  <ProjectPage 
                  projectName = {projectSelect}
                  data = {data}
                  width = {width}
                  language = {language}
                  />
                </div>
            </CSSTransition>
          }
        </div>
      </TransitionGroup>
      {width > 700 && <Footer width = {width}/>}
    </div>
    </>
  )
}