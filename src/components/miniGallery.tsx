import React, { Component } from "react"
import {miniGalleryTitle, miniGalleryTotal,miniGalleryImage, miniGalleryColumn1, miniGalleryColumn2, miniGallerySubText, miniGalleryMobile} from './styles/miniGallery.styles';
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"
import { LayoutTypes } from "./layout";

export interface MiniGalleryProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
    data: any;
    width: number
}

export default function MiniGallery (props: MiniGalleryProps): JSX.Element{

    function imageOnClick(option){
        window.scrollTo(0, 0)
        props.selectProject(option);
        return props.changeLayout(LayoutTypes.Selected);
      }

    const slice = props.width > 700 ? 2 : 1

    const styleColumn = props.width > 700 ? miniGalleryColumn1 : miniGalleryMobile

    function imageGalleryGenerator () {
        const imageGallery = props.data.allContentfulProject.edges.slice(0,slice).map( (value: any, index: number ) => (
                <div key={value.node.id} style={index == 0 ? styleColumn: miniGalleryColumn2} onClick={(e) => imageOnClick(value.node.id)}>
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