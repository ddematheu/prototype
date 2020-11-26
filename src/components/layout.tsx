import "../css/typography.css";

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Home from './home';
import Header from "./header"
import './styles/layout.css'
import About from "./about";
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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [layoutState, setLayoutState] = useState(LayoutTypes.Home);
  const [projectSelect, setProject] = useState(null);

  return (
    <>
    <div style={layoutStyle}>
      <Header 
      layoutState = {layoutState}
      changeLayout = {setLayoutState}
      siteTitle = {data.site.siteMetadata.title}
      />
      <div style={layoutContentStyle}>
        {
          layoutState === LayoutTypes.Home &&
          <Home 
          layoutState = {layoutState}
          changeLayout = {setLayoutState}
          projectSelect = {projectSelect}
          selectProject = {setProject}
          />
        }  
        {
          layoutState === LayoutTypes.Projects &&
          <Projects 
          layoutState = {layoutState}
          changeLayout = {setLayoutState}
          projectSelect = {projectSelect}
          selectProject = {setProject}
          />
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
          />
        }
      </div>
      <Footer />
    </div>
    </>
  )
}