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
    console.log("menu click");
    console.log(props.menuState);
    return props.toggleMenu(!props.menuState);
  }
  function logoOnClickHandle(){
    console.log("menu click");
  }
  return(
    <header
      style={{
        background: `lightblue`,
        zIndex:1
      }}
      >
      <div>
        <Menu 
        menuOnClick={menuOnClickHandle}/>
      </div>
      <div>
        <Logo siteTitle={props.siteTitle} logoOnClick={logoOnClickHandle}/>
      </div>
    </header>
  );
}