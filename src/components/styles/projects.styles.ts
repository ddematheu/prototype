import CSS from 'csstype';


export const projectsStyle: CSS.Properties = {
    position:'relative',
    height: '100%',
    paddingTop: '15.07vh',
    paddingLeft: '3.4vw',
    paddingRight: '3.4vw',
    zIndex: 1,
}

export const projectsDescriptionStyle: CSS.Properties = {
    position:'relative',
    width: '27.35vw',
    minWidth: '600px',
    height: '14.7vh',
    minHeight: '145px',
    paddingBottom: '6.25vh',
    color: '#8B8B8B',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
}

export const projectsDescriptionMobileStyle: CSS.Properties = {
    position:'relative',
    width: '100%',
    height: '24.71vh',
    paddingBottom: '4.25vh',
    color: '#8B8B8B',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
}

export const galleryStyle: CSS.Properties = {
    position:'relative',
    width: '100%',
    maxHeight: '310.17vh',
    lineHeight: 0,
    WebkitColumnCount: 3,
    WebkitColumnGap: '1.96vw',
    MozColumnCount: 3,
    MozColumnGap: '1.96vw',
    columnCount: 3,
    columnGap: '1.96vw',
}

export const galleryStyleMobile: CSS.Properties = {
    position:'relative',
    width: '100%',
    lineHeight: 0,
    WebkitColumnCount: 1,
    WebkitColumnGap: '1.96vw',
    MozColumnCount: 2,
    MozColumnGap: '1.96vw',
    columnCount: 1,
    columnGap: '1.96vw',
}

export const imageMobile: CSS.Properties = {
    width: '100%',
    height: 'auto',
    maxHeight: '81.32vh',
    marginBottom: '1.67vh'
}

export const image: CSS.Properties = {
    width: '100%',
    height: 'auto',
    maxHeight: '81.32vh',
    marginBottom: '3.48vh',
    position: 'relative'
}

export const projectImages: CSS.Properties = {
    width: '100%',
    objectFit: 'fill',
    maxHeight: '81.32vh'
}

export const projectImagesMobile: CSS.Properties = {
    width: '100%',
    objectFit: 'fill',
    maxHeight: '75.32vh'
}

export const projectNameMobileStyle: CSS.Properties = {
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#8B8B8B',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
}

export const nameOverlayStyle: CSS.Properties = {
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'rgba(16, 16, 16, 0.39)',
    color: '#fff',
    visibility: 'hidden',
    opacity: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    zIndex: 1000,
}
