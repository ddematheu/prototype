import React from "react"
import {copyrightStyle, facebookStyle, footerStyle, instagramStyle, socialStyle, twitterStyle, footerStyleMobile} from './styles/footer.styles';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"

export interface FooterProps{
    width: number;
}

export default function Footer (props : FooterProps) {

    const data = useStaticQuery(
        graphql`
            query {
                facebook: file(relativePath: { eq: "facebook.png" }) {
                    childImageSharp {
                    fixed(width: 15, height: 22) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                twitter: file(relativePath: { eq: "twitter.png" }) {
                    childImageSharp {
                    fixed(width: 19, height: 17) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                instagram: file(relativePath: { eq: "instagram.jpg" }) {
                    childImageSharp {
                    fixed(width: 22, height: 22) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                allContentfulSocial(limit: 1) {
                    nodes {
                      instagram
                      twitter
                      facebook
                    }
                }
            }
        `)

  return(
    <footer style={props.width > 700 ? footerStyle : footerStyleMobile}>
        <div style={socialStyle}>
            <a href={data.allContentfulSocial.nodes[0].instagram}><Img fixed={data.instagram.childImageSharp.fixed} style={instagramStyle} /></a>
        </div>
        <div style={copyrightStyle}>
            Copyright 2020. All rights reserved.
        </div>
    </footer>
  );
}