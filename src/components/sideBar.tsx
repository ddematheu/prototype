import React, { Component } from "react"
import Image from "./image"

import {sideBarStyle, sideBarTitleStyle, sideBarOptionsStyle} from './styles/sideBar.styles';
import { LayoutTypes } from "./layout";
import { checkPropTypes } from "prop-types";

export interface ContentProps{
    layoutState: LayoutTypes;
    toggleLayout: any;
    menuState: boolean;
    toggleMenu: any;
}

function toggleHome(layoutState: string, setLayout: (layout: string) => void) {
    return layoutState != LayoutTypes.Home ? setLayout(LayoutTypes.Home) : setLayout(LayoutTypes.Home);
}

function toggleProjects(layoutState: string, setLayout: (pane: string) => void) {
    return layoutState != LayoutTypes.Projects ? setLayout(LayoutTypes.Projects) : setLayout(LayoutTypes.Projects);
}

export default function Content (props: ContentProps){

    function menuToggle(){
        return props.toggleMenu(!props.menuState);
      }

    return(
    <>
        <div style = {sideBarStyle} >
            <h1 style={sideBarTitleStyle }>Menu </h1>
            <h3 
            style={sideBarOptionsStyle} 
            onClick={() => {
                toggleHome(props.layoutState, props.toggleLayout);
                menuToggle();
                }
            } >
                Home
            </h3>
            <h3 
            style={sideBarOptionsStyle}
            onClick={() => {
                toggleProjects(props.layoutState, props.toggleLayout);
                menuToggle();
                }
            } >
                Projects
            </h3>
            <h3 style={sideBarOptionsStyle}>Option 3</h3>
        </div>
    </>
    );
}