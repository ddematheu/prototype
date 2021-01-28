import React, { Component } from "react"
import {miniGalleryMobileTotal, miniGalleryTitle, miniGalleryTotal,miniGalleryImage, miniGalleryColumn1, miniGalleryColumn2, miniGallerySubText, miniGalleryMobile, miniGalleryImageMobile, miniGallerySubTextMobile} from './styles/miniGallery.styles';
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"
import { LayoutTypes } from "./layout";

export interface MiniGalleryProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
    data: any;
    width: number;
    language: string;
}

export default function MiniGallery (props: MiniGalleryProps): JSX.Element{

    function imageOnClick(option){
        window.scrollTo(0, 0)
        props.selectProject(option);
        return props.changeLayout(LayoutTypes.Selected);
      }

    const slice = props.width > 700 ? 2 : 1

    const styleColumn = props.width > 700 ? miniGalleryColumn1 : miniGalleryMobile

    var projectsToChooseFrom = props.data.allContentfulProject.edges.filter((edges) => edges.node.node_locale === props.language)
    console.log(projectsToChooseFrom)

    function imageGalleryGenerator () {
        const imageGallery = projectsToChooseFrom.slice(0,slice).map( (value: any, index: number ) => (
                <div key={value.node.id} style={index == 0 ? styleColumn: miniGalleryColumn2} onClick={(e) => imageOnClick(value.node.contentful_id)}>
                    <Img fixed={value.node.thumbnail.fixed} style={props.width > 700 ? miniGalleryImage : miniGalleryImageMobile}/>
                    <div style={props.width > 700 ? miniGallerySubText : miniGallerySubTextMobile}>
                        {value.node.name}
                        <br/><span onClick={(e) => imageOnClick(value.node.contentful_id)}><u>Leer Mas</u>&nbsp;&nbsp;&nbsp;&nbsp;&#8594;</span>
                    </div>
                </div>
            )
        );
        return imageGallery
    }

    return (
    <div style={props.width > 700 ? miniGalleryTotal : miniGalleryMobileTotal}>
        {props.width < 700 && <div style={miniGalleryTitle}>
            Proyectos Destacados
        </div>}
        {imageGalleryGenerator()}
    </div>
    )
}