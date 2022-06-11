import { makeStyles } from '@material-ui/core/styles';
const fontFamily = "Nunito Sans, sans-serif";
const fontSmall = "0.8rem";
const fontBody = "12px";
const fontH4 = "1.1rem";
const fontH3 = "14px";
const fontH2 = "2rem";
const fontH1 = "1.75rem";
const black = "#3E3E3E";
const darkBg = "#E8DDD6";
const brightBg = "#F5F5F3";
const green = "#7CBBB0";
const red ="#E86C45";
const white = "#FFF";
const greyBg = "#C2C2C2";
const pink = "#DAA2AC";
const blue = "#99A5D8";

const useStyles = makeStyles((theme) => ({
    root: {
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    menuIcon:{
        color: greyBg,
    },

    topBar:{
        background: white,
        boxShadow:`0 0 2px rgba(0, 0, 0, 0.5)`,
        padding:"0.2rem 0",
        position:"sticky",
        width:"100%",
        position:"0",
        zIndex:"10"
    },

    link:{
        marginLeft: theme.spacing(6),
        fontSize:fontBody,
        color:black,
        transition:"0.5s",
        cursor:"pointer"
    },

    fontTopPanel:{
        fontFamily: fontFamily,
        fontSize:fontBody,
        fontWeight:"bold",
        color:white,
    },

    fontBody:{
        fontFamily: fontFamily,
        fontSize:fontBody,
        color:black,
    },

    fontBodyH2:{
        fontFamily: fontFamily,
        fontSize:fontH2,
        color:black,
        fontWeight:"bold",
        textAlign:"center", 
    },

    fontBodyH3:{
        fontFamily: fontFamily,
        fontSize:fontH3,
        margin:"10px 0",
        color:pink,
        fontWeight:"bold",
        borderBottom:"0.5px solid #C2C2C2"
    },

    fontBodyH4:{
        fontFamily: fontFamily,
        fontSize:fontH4,
        marginBottom:fontBody,
        color:black,
        fontWeight:"600",
    },

    fontModalFooter:{
        fontFamily: fontFamily,
        fontSize:fontSmall,
        marginBottom:fontBody,
        color:"#FDF9F9",
        borderTop:"0.5px solid #C2C2C2"
    },

    fontBodyHeader:{
        fontFamily: fontFamily,
        fontWeight:"bold", 
        fontSize:"16px",
        color:black,
    },

    fontSmall: {
        fontFamily: fontFamily,
        fontStyle:"italic",
        fontSize:"12px",
        color:blue,
        marginTop:"10px",
        marginBottom:"0"
    },

    postTime: {
        fontFamily: fontFamily,
        fontSize:"10px",
        color:"#9D9D9D",
        textAlign:"center",
        padding:"10px"
    },

    postTitle: {
        fontFamily: fontFamily,
        fontWeight:"bold",
        fontSize:"12px",
        color:"#757575",
        padding:"10px"
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
        margin:"auto", 
        maxWidth:"460px",
        padding:"20px",
        position:"relative"
    },
    line:{
        margin:"2rem auto", 
        width:"4rem", 
        height:"5px", 
        background:green, 
        borderRadius:fontBody
    },

    icon:{
        fontSize:"30px", 
        color:white
    },

    h4:{
        color:red
    },

    work:{
        position:"relative",
        width:"calc(100% - 20px)",
        padding:"0.5rem",
        overflow:"hidden",
        background:white,
        borderRadius:"5px",
        border:"0.5px solid #C2C2C2",
        transition:"0.5s",
        cursor:"pointer",
        // '&:hover':{
        //     boxShadow:"0 0 4px #c4c4c4",
        //     transform:"scale(0.95)"
        // }
    },

    img:{
        width:"100%"
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
        background:"#FDF9F9",
        borderTop:"0.5px solid #C2C2C2",
        padding:"20px 0"
    },

    footerContent:{
        maxWidth:"460px",
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

    listText:{
        fontFamily: fontFamily,
        fontSize:"12px",
        color:"#282A33"
    },

    headerBtn: {
        borderRadius:"5px", 
        padding:"5px 10px", 
        fontSize:"10px", 
        background:"#BFC1C7",
        color:"#fff", 
        float:"right",
        letterSpacing: "0",
        transition:"0.5s",
        '&:hover':{
            background: "#A9AEB9",
            letterSpacing: "5px"
        }
    },

    footerBtn:{
        border:"0.5px solid #9D9D9D", 
        borderRadius:"10px", 
        padding:"5px 10px", 
        fontSize:"10px", 
        color:"#9D9D9D"
    }
}));

export {useStyles} 