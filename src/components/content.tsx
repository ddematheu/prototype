import React, { Component } from "react"
import MiniGallery from './miniGallery'
import {miniGallery} from './styles/miniGallery.styles';


export interface ContentProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
}

export default function Content (props: ContentProps){
    return(
        <div style={miniGallery}>
            <MiniGallery
            layoutState = {props.layoutState}
            changeLayout = {props.changeLayout}
            projectSelect = {props.projectSelect}
            selectProject = {props.selectProject}
            />
        </div>
    );
}