import CSS from 'csstype';

export const mobileMenuStyle: CSS.Properties = {
    position: 'fixed',
    width:'100%',
    height: '100vh',
    zIndex: 1,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    overflow: 'hidden',
    transition: '0.5s',
}

export const mobileMenusToggleStyle: CSS.Properties = {
    zIndex: 10,
}

export const mobileMenuContentStyle: CSS.Properties = {
    position: 'relative',
    top: '22.64vh'
}

export const line1StyleClose: CSS.Properties = {
    position: 'absolute',
    width: '30.86px',
    top: '5.14vh',
    left: '86.48vw',
    height: '0px',
    border: '1px solid #000000',
    transform: 'rotate(-45deg)',
    zIndex: 10,
}

export const line2StyleClose: CSS.Properties = {
    position: 'absolute',
    width: '30.86px',
    top: '5.14vh',
    left: '86.48vw',
    height: '0px',
    border: '1px solid #000000',
    transform: 'rotate(45deg)',
    zIndex: 10,
}

export const line1StyleOpen: CSS.Properties = {
    position: 'absolute',
    width: '21.21px',
    top: '5.14vh',
    left: '90vw',
    height: '0px',
    border: '1px solid #000000',
    transform: 'rotate(-45deg)',
    zIndex: 10,
}

export const line2StyleOpen: CSS.Properties = {
    position: 'absolute',
    width: '21.21px',
    top: '5.14vh',
    left: '86.48vw',
    height: '0px',
    border: '1px solid #000000',
    transform: 'rotate(45deg)',
    zIndex: 10,
}

export const projectStyleMobile: CSS.Properties = {
    position: 'relative',
    padding: `0 14px 0 14px`,
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
    padding: `0 14px 0 14px`,
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
    padding: `0 14px 0 14px`,
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