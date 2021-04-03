import { makeStyles } from '@material-ui/core/styles';
const fontSmall = "0.8rem";
const fontBody = "1rem";
const fontH4 = "1.1rem";
const fontH3 = "1.25rem";
const fontH2 = "2rem";
const fontH1 = "1.75rem";
const black = "#282A33";
const darkBg = "#E8DDD6";
const brightBg = "#F5F5F3";
const green = "#7CBBB0";
const red ="#E86C45";
const white = "#FFF";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflowY:"auto",
        background:brightBg,
        overflowX:"hidden",
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    topBar:{
        background:darkBg,
        boxShadow:"none",
        padding:"0.5rem",
    },

    link:{
        marginLeft: theme.spacing(6),
        fontSize:fontBody,
        color:black,
        transition:"0.5s",
        cursor:"pointer"
    },

    fontTopPanel:{
        fontFamily:"Quicksand, sans-serif",
        fontSize:fontBody,
        fontWeight:"bold",
        color:black,
    },

    fontBody:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:fontBody,
        color:black,
    },

    fontBodyH2:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:fontH2,
        color:black,
        fontWeight:"bold",
        textAlign:"center", 
    },

    fontBodyH3:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:fontH3,
        marginBottom:fontBody,
        color:black,
        fontWeight:"bold",
    },

    fontBodyH4:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:fontH4,
        marginBottom:fontBody,
        color:black,
        fontWeight:"600",
    },

    fontModalFooter:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:fontSmall,
        marginBottom:fontBody,
        color:"#C4C4C4",
    },

    fontBodyHeader:{
        fontFamily:"Open Sans, sans-serif",
        fontWeight:"bold", 
        fontSize:"64px",
        color:black,
    },

    about:{
        position:"relative",
        width: "100vW",
        height: "800px",
        background: darkBg,
        flexGrow: 1,
        overflow:"visible"
    },

    aboutSmall:{
        width: "100vW",
        height: "800px",
        background: darkBg,
        flexGrow: 1,
        overflow:"visible"
    },

    aboutSlant:{
        width: "0",
        borderTop:"11rem solid #E8DDD6",
        borderLeft: "100vW solid transparent",
    },

    skills:{
        maxWidth:"1200px",
        margin:"auto",
        marginBottom:"3rem",
        borderRadius:fontBody,
        background:white,
        border:"1px solid #D2D2D2",
    },
    line:{
        margin:"2rem auto", 
        width:"4rem", 
        height:"5px", 
        background:green, 
        borderRadius:fontBody
    },

    icon:{
        fontSize:"50px", 
        color:green
    },

    h4:{
        color:red
    },

    work:{
        position:"relative",
        width:"calc(100% - 6rem)",
        padding:"3rem",
        overflow:"hidden",
        background:white,
        borderRadius:fontBody,
        border:"1px solid #c4c4c4",
        transition:"0.5s",
        cursor:"pointer",
        '&:hover':{
            boxShadow:"0 0 4px #c4c4c4",
            transform:"scale(0.95)"
        }
    },

    img:{
        width:"100%",
        minHeight:"200px",
        marginBottom:fontBody
    },

    imgMedium:{
        width:"100%",
        minHeight:"120px",
        marginBottom:fontBody
    },

    workContent:{
        height:"130px"
    },

    workContentMedium:{
        height:"280px"
    },

    footer:{
        background:black,
        padding:"3rem 0",
    },

    footerContent:{
        maxWidth:"1200px",
        margin:"auto",
        padding:"0 1rem"
    },

    avatar:{
        display: "block",
        width: "400px",
        height: "400px",
        backgroundColor: "red",
        borderRadius: "50% 40% 20% 80% / 70% 10% 50% 20%",
    },

    button:{
        border:"2px solid white", 
        margin: "0.8rem",
        background:"282A33",
        transition:"0.5s",
        '&:hover':{
            background:white
        },
        '&:hover $buttonIcon':{
            color:black
        }
    },

    buttonIcon:{
        fontSize:"18px", 
        color:white,
        transition:"0.5s",
    },

    avatarBg:{
        position:"absolute",
        display: "block",
        margin:"auto",
        top:"-180px",
        right:"50px",
        marginTop:"0px", 
        width: "350px",
        height: "350px",
        zIndex:"1",
        background: "#97908B",
        borderRadius: "70% 85% 75% 95% / 70% 80% 90% 85%"
    },

    avatarBgSmall:{
        position:"relative",
        display: "block",
        margin:"auto",
        marginTop:"-200px", 
        width: "220px",
        height: "220px",
        zIndex:"1",
        background: "#97908B",
        borderRadius: "70% 85% 75% 95% / 70% 80% 90% 85%"
    },

    modal: {
        width:"100vW",
        height:"100vH",
        overflowY:"auto",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapper:{
        width:"100vW",
        height:"100vH",
        overflowY:"auto",
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    
    paper: {
        position:"relative",
        background: white,
        borderRadius:fontBody,
        maxWidth:"600px",
        maxHeight:"95vH",
        overflowY:"auto",
        outline:"none",
    },

    paperSmall: {
        position:"relative",
        background: white,
        margin:"1rem",
        borderRadius:fontBody,
        maxWidth:"600px",
        top:"0",
        outline:"none",
    },

    paperContent:{
        maxWidth:"calc(600px - 4rem)",
        maxHeight:"calc(95vH - 16rem)",
        padding:"1rem 2rem",
        overflow:"auto",
    },

    paperContentSmall:{
        maxWidth:"calc(600px - 4rem)",
        padding:"1rem 2rem",
        overflow:"visible",
    },

    modalImg:{
        width:"100%",
        marginBottom:fontBody
    },

    modalSection:{
        padding:"1rem 2rem",
    
    }
}));

export {useStyles} 