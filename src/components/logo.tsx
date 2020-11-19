import React, { Component } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {logoStyle} from './styles/logo.styles';
import { LayoutTypes } from "./layout";

export interface LogoProps{
    logoOnClick(option): any;
}

export default function Logo (props: LogoProps): JSX.Element{

    return (
    <div style={logoStyle} onClick={(e) => props.logoOnClick(LayoutTypes.Home)}>
        Musa
    </div>
    );
}