import React, { Component } from "react"
import {miniGalleryTitle, miniGalleryTotal,miniGalleryImage, miniGalleryColumn1, miniGalleryColumn2, miniGallerySubText} from './styles/miniGallery.styles';
import {imageGalleryStyle, imageStyle} from './styles/imageGallery.styles';
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"
import { LayoutTypes } from "./layout";

export interface MiniGalleryProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
}

export default function MiniGallery (props: MiniGalleryProps): JSX.Element{

    function imageOnClick(option){
        props.selectProject(option);
        return props.changeLayout(LayoutTypes.Selected);
      }

    const data = useStaticQuery(
        graphql`
            query {
            image1: file(relativePath: { eq: "building1.png" }) {
                childImageSharp {
                fixed(width: 891, height: 498) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
            image2: file(relativePath: { eq: "building2.png" }) {
                childImageSharp {
                fixed(width: 654, height: 498) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
            }
        `)
        
    const images = [
        data.image1.childImageSharp.fixed,
        data.image2.childImageSharp.fixed,
    ]

    function imageGalleryGenerator () {
        const imageGallery = images.map( (value: FixedObject, index: number ) => (
                <div key={index} style={index == 0 ? miniGalleryColumn1: miniGalleryColumn2} onClick={(e) => imageOnClick('Project Name')}>
                    <Img fixed={value} style={miniGalleryImage}/>
                    <div style={miniGallerySubText}>
                        {index == 0 ? "SF76": "BBM"}
                    </div>
                    <div style={miniGallerySubText}>
                        Leer Mas
                    </div>
                </div>
            )
        );
        return imageGallery
    }

    return (
    <div style={miniGalleryTotal}>
        <div style={miniGalleryTitle}>
            Proyectos Destacados
        </div>
        {imageGalleryGenerator()}
    </div>
    )
}