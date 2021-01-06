import React from "react"
import Menu from './menu';
import Logo from './logo';
import { checkPropTypes } from "prop-types";
import { LayoutTypes } from "./layout";
import {headerStyle} from './styles/header.styles';
import MobileMenu from "./mobileMenu";

export interface HeaderProps{
  layoutState: string;
  changeLayout: any;
  headerOnClick: any;
  width: number;
  language: string;
  setLanguage: any;
}

export default function Header (props : HeaderProps) {

  return(
    <header style={headerStyle}>
        <Logo logoOnClick={props.headerOnClick} width={props.width}/>
        {props.width > 700 ? <Menu menuOnClick={props.headerOnClick} language = {props.language} setLanguage = {props.setLanguage} /> : <MobileMenu 
        language = {props.language}
        setLanguage = {props.setLanguage}
        menuOnClick={props.headerOnClick}/> }
    </header>
  );
}