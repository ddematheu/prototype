import React, { Component } from "react"

import {menuStyle} from './styles/menu.styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export interface MenuProps{
    menuOnClick(): any;
}

export default function Menu (props: MenuProps): JSX.Element{
    const data = useStaticQuery(
        graphql`
            query {
            burger: file(relativePath: { eq: "burger.png" }) {
                childImageSharp {
                fixed(width: 45, height: 45) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
            }
        `)

    return (
    <div style={menuStyle} onClick={props.menuOnClick}>
        <Img fixed={data.burger.childImageSharp.fixed} />
    </div>
    )
}