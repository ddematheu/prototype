import React, { MutableRefObject, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"
import { projectsStyle, projectsDescriptionStyle, galleryStyleMobile, nameOverlayStyle, projectNameMobileStyle, imageMobile, projectsDescriptionMobileStyle, galleryStyle, projectImages, image } from "./styles/projects.styles"
import { LayoutTypes } from "./layout"
import './styles/projects.css'

export interface ProjectsPageProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
    data: any;
    width:number;
}

export default function Projects (props:ProjectsPageProps){

  function imageOnClick(option){
    window.scrollTo(0, 0)
    props.selectProject(option);
    return props.changeLayout(LayoutTypes.Selected);
  }

  function imageGalleryGenerator () {
    const imageGallery = props.data.allContentfulProject.edges.map( (value: any, index: number ) => (
            <div className = 'imageContainer' key={value.node.id} style={props.width >  700 ? image : imageMobile} onClick={(e) => imageOnClick(value.node.id)}>
                <Img style={projectImages} fixed={value.node.thumbnail.fixed} />
                {props.width < 700 ? <div style = {projectNameMobileStyle}>
                  {value.node.name}
                  </div> : <div className = 'overlay' style = {nameOverlayStyle}>
                    {value.node.name}
                    </div>
                }
            </div>
        )
    );
    return imageGallery
  }
  
  return (
    <>
    <div id="projects" style={projectsStyle}>
      <div style={props.width > 700 ? projectsDescriptionStyle: projectsDescriptionMobileStyle }>
        <u>Projects</u><br/><br/>
        Musa Arquitectos es un taller de arquitectura basada en los principios básicos del diseño puro y funcional. La oficina se enfoca en buscar soluciones elegantes, creativas.
      </div>
      <div style={props.width > 700 ? galleryStyle : galleryStyleMobile}>
        {imageGalleryGenerator()}
      </div>
    </div>
    </>
  )
}
