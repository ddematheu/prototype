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
      />
      <div style={layoutContentStyle}>
        {
          (layoutState === LayoutTypes.Home || layoutState === LayoutTypes.Projects) &&
          <div>
          <Home 
          layoutState = {layoutState}
          changeLayout = {setLayoutState}
          projectSelect = {projectSelect}
          selectProject = {setProject}
          data = {data}
          />
          <Projects 
          data = {data}
          layoutState = {layoutState}
          changeLayout = {setLayoutState}
          projectSelect = {projectSelect}
          selectProject = {setProject}
          />
          </div>
        }  
        {
          layoutState === LayoutTypes.About &&
          <About />
        }
        {
          layoutState === LayoutTypes.Contact &&
          <Contact />
        }
        {
          layoutState === LayoutTypes.Selected &&
          <ProjectPage 
          projectName = {projectSelect}
          data = {data}
          />
        }
      </div>
      <Footer />
    </div>
    </>
  )
}