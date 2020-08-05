import React, { Component } from "react"

import Logo from './logo';
import {imageGalleryStyle, imageStyle} from './styles/imageGallery.styles';
import Email from './email';

import Gallery from 'react-grid-gallery';

import { contentStyle, contentTextStyle } from './styles/content.styles';

export interface ProjectsProps{
    
}

export default function Projects (props: ProjectsProps){
    const images = [
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg"
    ]

    function imageGalleryGenerator () {
        const imageGallery = images.map( (value: string, index: number ) => (
                <img style={imageStyle} src={value}/>
            )
        );
        return imageGallery
    }
 
    return(
    <>
        <div style={imageGalleryStyle}>
            {imageGalleryGenerator()}
        </div>
    </>
    );
}