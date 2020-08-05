import React, { Component } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {emailStyle} from './styles/email.styles';

export interface EmailProps{
}

export default function Email (props: EmailProps): JSX.Element{
    
    const data = useStaticQuery(
    graphql`
        query {
        email: file(relativePath: { eq: "musaEmail.jpg" }) {
            childImageSharp {
            fixed(width: 139, height: 25) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        }
    `)

    return (
    <div style={emailStyle}>
        <Link
        to="mailto:info@musaasvat.com"
        style={{
            color: `black`,
            textDecoration: `none`,
        }}
        >
        <Img fixed={data.email.childImageSharp.fixed} />
        </Link>
    </div>
    );
}