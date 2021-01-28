import CSS from 'csstype';

export const logoStyle: CSS.Properties = {
    position: 'absolute',
    width: '76px',
    height: '34px',
    left: '3.4vw',
    top: '5.76vh',
    color: 'black',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '34px',
    letterSpacing: '0.05em',
    zIndex: 10,
}

export const logoStyleMobile: CSS.Properties = {
    position: 'absolute',
    width: '76px',
    height: '34px',
    left: 'max(3.4vw, 26px)',
    top: 'max(2.92vh, 21px)',
    color: 'black',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '0.05em',
    zIndex: 10,
}