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

export interface LayoutProps{

}

export enum LayoutTypes {
  Home = "Home",
  Projects = "Projects",
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

  const [width, setWidth] = useState(700)
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
      <div style={layoutContentStyle}>
        {
          (layoutState === LayoutTypes.Home || layoutState === LayoutTypes.Projects) &&
          <div>
          <Home 
          width = {width}
          layoutState = {layoutState}
          changeLayout = {setLayoutState}
          projectSelect = {projectSelect}
          selectProject = {setProject}
          data = {data}
          language = {language}
          />
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
        }  
        {
          layoutState === LayoutTypes.About &&
          <About  
          width = {width}
          language = {language}/>
        }
        {
          layoutState === LayoutTypes.Contact &&
          <Contact 
          width = {width}
          language = {language} />
        }
        {
          layoutState === LayoutTypes.Selected &&
          <ProjectPage 
          projectName = {projectSelect}
          data = {data}
          width = {width}
          language = {language}
          />
        }
      </div>
      {width > 700 && <Footer />}
    </div>
    </>
  )
}