import React from "react"
import Menu from './menu';
import Logo from './logo';
import { checkPropTypes } from "prop-types";

export interface HeaderProps{
  siteTitle: string;
  menuState: boolean;
  toggleMenu: any;
}

export default function Header (props : HeaderProps) {
  function menuOnClickHandle(){
    return props.toggleMenu(!props.menuState);
  }

  return(
    <header
      style={{
        background: `white`,
        zIndex:1,
        borderBottom: '3px solid black'
      }}
      >
        <Menu 
        menuOnClick={menuOnClickHandle}/>
        <Logo />
    </header>
  );
}