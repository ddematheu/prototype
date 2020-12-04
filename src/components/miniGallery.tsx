import React, { Component } from "react"
import {miniGalleryTitle, miniGalleryTotal,miniGalleryImage, miniGalleryColumn1, miniGalleryColumn2, miniGallerySubText} from './styles/miniGallery.styles';
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"
import { LayoutTypes } from "./layout";

export interface MiniGalleryProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
    data: any;
}

export default function MiniGallery (props: MiniGalleryProps): JSX.Element{

    function imageOnClick(option){
        window.scrollTo(0, 0)
        props.selectProject(option);
        return props.changeLayout(LayoutTypes.Selected);
      }

    function imageGalleryGenerator () {
        const imageGallery = props.data.allContentfulProject.edges.slice(0,2).map( (value: any, index: number ) => (
                <div key={value.node.id} style={index == 0 ? miniGalleryColumn1: miniGalleryColumn2} onClick={(e) => imageOnClick(value.node.id)}>
                    <Img fixed={value.node.thumbnail.fixed} style={miniGalleryImage}/>
                    <div style={miniGallerySubText}>
                        {value.node.name}
                    </div>
                </div>
            )
        );
        return imageGallery
    }

    return (
    <div style={miniGalleryTotal}>
       {/* <div style={miniGalleryTitle}>
            Proyectos Destacados
        </div> */}
        {imageGalleryGenerator()}
    </div>
    )
}