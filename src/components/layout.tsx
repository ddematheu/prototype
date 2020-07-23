/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Content from './content';
import SideBar from './sideBar';

import Header from "./header"
import './styles/layout.css'

export interface LayoutProps{
}

export default function Layout (props:LayoutProps){
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <Header 
      menuState = {menuState}
      siteTitle = {data.site.siteMetadata.title} 
      toggleMenu = {setMenuState} />
      <div
        style={{
          margin: `0 auto`,
          height: '100%',
          width: '100%',
          backgroundImage: 'url(https://wallpaperaccess.com/full/405435.jpg)',
          backgroundSize: '100% 100%',
          position: 'fixed',
          zIndex: -1
        }}>
        <Content />
        {
          menuState &&
          <SideBar />
        }
      </div>
    </>
  )
}