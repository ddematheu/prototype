import CSS from 'csstype';

export const mobileMenuStyle: CSS.Properties = {
    position: 'absolute',
    width:'100%',
    height: '100vh',
    zIndex: 9,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    overflow: 'hidden',
}

export const mobileMenusToggleStyle: CSS.Properties = {
    zIndex: 11,
}

export const mobileMenuContentStyle: CSS.Properties = {
    zIndex: 11,
    position: 'relative',
    top: '30.28vh'
}

export const line1StyleClose: CSS.Properties = {
    position: 'absolute',
    width: '41.86px',
    top: '5.14vh',
    left: '86.48vw',
    height: '0px',
    border: '1px solid #000000',
    transform: 'rotate(45deg)',
    zIndex: 11,
}

export const line2StyleClose: CSS.Properties = {
    position: 'absolute',
    width: '41.86px',
    top: '5.14vh',
    left: '86.48vw',
    height: '0px',
    border: '1px solid #000000',
    transform: 'rotate(-45deg)',
    zIndex: 11,
}

export const line1StyleOpen: CSS.Properties = {
    position: 'absolute',
    width: '21.21px',
    top: '5.14vh',
    left: '86.48vw',
    height: '0px',
    border: '1px solid #000000',
    transform: 'rotate(45deg)',
    zIndex: 11,
}

export const line2StyleOpen: CSS.Properties = {
    position: 'absolute',
    width: '21.21px',
    top: '5.14vh',
    left: '90vw',
    height: '0px',
    border: '1px solid #000000',
    transform: 'rotate(-45deg)',
    zIndex: 11,
}

export const projectStyleMobile: CSS.Properties = {
    position: 'relative',
    paddingLeft: 'max(3.4vw, 26px)',
    color: '#8B8B8B',
    width: '180px',
    height: '45px',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '28px',
    lineHeight: '34px',
    zIndex: 11,
}

export const aboutStyleMobile: CSS.Properties = {
    position: 'relative',
    paddingLeft: 'max(3.4vw, 26px)',
    color: '#8B8B8B',
    width: '180px',
    height: '45px',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '28px',
    lineHeight: '34px',
    zIndex: 11,
}

export const contactStyleMobile: CSS.Properties = {
    position: 'relative',
    paddingLeft: 'max(3.4vw, 26px)',
    color: '#8B8B8B',
    width: '180px',
    height: '45px',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '28px',
    lineHeight: '34px',
    zIndex: 11,
}


export const languageStyleMobile: CSS.Properties = {
    position: 'relative',
    paddingLeft: 'max(3.4vw, 26px)',
    color: '#8B8B8B',
    width: '250px',
    paddingTop: '28.89vh',
    height: '35.14vh',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '28px',
    lineHeight: '34px',
    zIndex: 11,
}

export const mobileMenuFooter: CSS.Properties = {
    position: 'relative',
    width: '21.21px',
    height: '22px',
    paddingLeft: 'max(3.4vw, 26px)',
    paddingTop: '11.12vh',
    zIndex: 11,
}