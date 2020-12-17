import React, { Component, useState } from "react"
import {projectStyle, aboutStyle, contactStyle, menuStyle} from './styles/menu.styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LayoutTypes } from "./layout";
import { line1Style, line2Style } from "./styles/mobileMenu.styles";

export interface MobileMenuProps{
    menuOnClick(option): any;
}

export default function MobileMenu (props: MobileMenuProps): JSX.Element{

    const [extended, setExtended] = useState(false);

    return (
    <div>
        <div>
            <div style={line1Style}></div>
            <div style={line2Style}></div>
        </div>
    </div>
    )
}