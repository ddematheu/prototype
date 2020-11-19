import "../css/typography.css";

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Content from './content';
import Header from "./header"
import './styles/layout.css'
import About from "./about";
import Contact from "./contact";
import ProjectPage from "./project-page";
import Projects from "./projects";

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
      <Header 
      layoutState = {layoutState}
      changeLayout = {setLayoutState}
      siteTitle = {data.site.siteMetadata.title}
      />
      {
        layoutState === LayoutTypes.Home &&
        <Content 
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
    </>
  )
}