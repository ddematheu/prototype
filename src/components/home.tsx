import React, { Component } from "react"
import MiniGallery from './miniGallery'
import { contentStyle } from "./styles/content.styles";


export interface HomeProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
    data: any;
    width: number;
    language:string;
}

export default function Home (props: HomeProps){
    return(
    <div style={contentStyle}>
            <MiniGallery
            width = {props.width}
            layoutState = {props.layoutState}
            changeLayout = {props.changeLayout}
            projectSelect = {props.projectSelect}
            selectProject = {props.selectProject}
            data = {props.data}
            language = {props.language}
            />
    </div>
    );
}