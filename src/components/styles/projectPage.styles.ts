import CSS from 'csstype';


export const projectPageStyle: CSS.Properties = {
    position: 'relative',
    height: '100vh',
    top: '34.17vh',
    paddingLeft: '3.4vw',
    paddingRight: '3.4vw',
}

export const projectImage: CSS.Properties = {
    width: '100%',
    height: '81.3vh',
    objectFit: 'fill',
}

export const projectColumns: CSS.Properties = {
    position: 'relative',
    paddingTop: '3.4vh',
}

export const projectColumn1: CSS.Properties = {
    float: 'left',
    width: '50%',
    backgroundColor: "red",
    height: '145vh',
}

export const projectColumn2: CSS.Properties = {
    float: 'left',
    width: '50%',
    //backgroundColor: "blue",
    height: '145vh',
    paddingLeft: '3.4vw',
}

export const projectTitle: CSS.Properties = {
    
    color: '#8B8B8B',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1.875vw',
    lineHeight: '4.02vh',
}

export const projectDescription: CSS.Properties = {
    paddingTop: '2.57vh',
    color: '#8B8B8B',
    fontFamily: 'Favorit',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1.02vw',
    lineHeight: '2.43vh',
}