import React, { Component } from "react"
import Image from "./image"

import {sideBarStyle, sideBarTitleStyle, sideBarOptionsStyle} from './styles/sideBar.styles';

export interface ContentProps{
    
}

export default function Content (props: ContentProps){
    return(
    <>
        <div style = {sideBarStyle} >
            <h1 style={sideBarTitleStyle }>Menu </h1>
            <h3 style={sideBarOptionsStyle}>Option 1</h3>
            <h3 style={sideBarOptionsStyle}>Option 2</h3>
            <h3 style={sideBarOptionsStyle}>Option 3</h3>
        </div>
    </>
    );
}