import React, { Component } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {logoStyle,logoStyleMobile} from './styles/logo.styles';
import { LayoutTypes } from "./layout";

export interface LogoProps{
    logoOnClick(option): any;
    width: number;
}

export default function Logo (props: LogoProps): JSX.Element{

    return (
    <div style={props.width > 700 ? logoStyle:logoStyleMobile} onClick={(e) => props.logoOnClick(LayoutTypes.Home)}>
        Musa
    </div>
    );
}