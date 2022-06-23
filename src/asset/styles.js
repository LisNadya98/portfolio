import { makeStyles } from '@material-ui/core/styles';
const fontFamily = "Epilogue, sans-serif";
const fontBody = "16px";
const fontSmall = "12px";
const fontH4 = "18px";
const fontH3 = "20px";
const fontH2 = "16px";
const black = "#3E3E3E";
const darkPurple = "#171717";
const darkerPurple = "#0D0D0D";
const grey = "#9D9D9D";
const grey2 = "#EAEAEA";
const white = "#FFF";
const greyBg = "#C2C2C2";
const red = "#EE684B";

const useStyles = makeStyles((theme) => ({
    root: {
        background: darkerPurple
    },

    
    menuButton: {
        marginRight: theme.spacing(2),
    },

    menuIcon:{
        color: greyBg,
    },

    highlight: {
        color: red
    },

    grey: {
        color: grey
    },

    numberHighlight: {
        color: red
    },

    topBar:{
        background: darkPurple,
        boxShadow:`0 0 0 transparent`,
        position:"sticky",
        width:"100%",
        height:"50px",
        zIndex:"10"
    },

    link:{
        fontSize:fontBody,
        color:red,
        transition:"0.5s",
        cursor:"pointer"
    },

    fontTopPanel:{
        fontFamily: fontFamily,
        fontSize:fontBody,
        fontWeight:"bold",
        color:white,
    },

    fontBodySmall:{
        fontFamily: fontFamily,
        fontSize:fontSmall,
        color:grey,
    },

    fontBody:{
        fontFamily: fontFamily,
        fontSize:fontBody,
        color:grey,
    },

    fontBodyH2:{
        fontFamily: fontFamily,
        fontSize:fontH2,
        color:white,
        fontWeight:"400",
        textTransform: "Uppercase",
        textAlign:"center", 
    },

    fontBodyH3:{
        fontFamily: fontFamily,
        fontSize:fontH3,
        margin:"10px 0 0 0",
        color: white,
        fontWeight:"bold"
    },

    fontBodyH4:{
        fontFamily: fontFamily,
        fontSize:fontH4,
        color:red,
        fontStyle:"italic"
    },

    // fontModalFooter:{
    //     fontFamily: fontFamily,
    //     fontSize:fontSmall,
    //     marginBottom:fontBody,
    //     color:"#FDF9F9",
    //     borderTop:"0.5px solid #C2C2C2"
    // },

    fontBodyHeader:{
        fontFamily: fontFamily,
        fontWeight:"400", 
        lineHeight:"98%",
        fontSize:"40px",
        color:white,
    },

    listText: {
        fontFamily: fontFamily,
        color: grey,
    },

    header: {
        marginBottom:"20px"
    },

    fontSmall: {
        fontFamily: fontFamily,
        fontSize: fontBody,
        color:grey,
        marginTop:"10px",
        marginBottom:"0",
        transition:"0.5s"
    },

    postTime: {
        fontFamily: fontFamily,
        fontSize:fontSmall,
        color: grey,
    },

    postTitle: {
        fontFamily: fontFamily,
        fontWeight:"bold",
        fontSize: fontBody,
        color:"#757575",
        padding:"10px"
    },


    // about:{
    //     position:"relative",
    //     width: "100vW",
    //     height: "800px",
    //     background: darkBg,
    //     flexGrow: 1,
    //     overflow:"visible"
    // },

    // aboutSmall:{
    //     width: "100vW",
    //     height: "800px",
    //     background: darkBg,
    //     flexGrow: 1,
    //     overflow:"visible"
    // },

    // aboutSlant:{
    //     width: "0",
    //     borderTop:"11rem solid #E8DDD6",
    //     borderLeft: "100vW solid transparent",
    // },

    tabsList: {
        color:"white", 
        fontSize:"12px", 
        minWidth: "50px", 
        minHeight:"0", 
        marginBottom:"10px", 
        marginRight:"20px"
    },

    skills:{
        width:"100%",
        padding:"50px 0",
        position:"relative",
        display:"block",
        background:darkerPurple
    },

    skillList: {
        width:"calc(100% - 20px)",
        position: "relative",
        padding:"30px 30px 25px 30px", 
        borderRadius:"5px",
        background:darkPurple,
        transition: "1s", 
        zIndex: "1",
        '&:hover':{
            zIndex: "3",
            transform: "scale(1.1)"
        }
    },
    
    skillListIconBg: {
        background: "linear-gradient(to bottom right, #5A4BE5, #DD34BD)",
        padding:"10px 10px 6px 10px", 
        width:"fit-content", 
        borderRadius:"10px", 
        margin:"0 auto 20px 0"
    },
    // line:{
    //     margin:"2rem auto", 
    //     width:"4rem", 
    //     height:"5px", 
    //     background:green, 
    //     borderRadius:fontBody
    // },

    icon:{
        fontSize:"30px", 
        color: "#EE684B"
    },

    smallIcon:{
        margin: "0 10px -2px 0",
        fontSize: fontBody,
        color: grey
    },

    // h4:{
    //     color:red
    // },

    work:{
        position:"relative",
        overflow:"hidden",
        transition:"0.5s",
        '&:hover $postDescBg':{
            opacity: "90%",
        },
        '&:hover $postDesc':{
            opacity: "100%",
        }
    },

    imgSmall: {
        height: "210px",
    }, 

    img:{
        width:"100%"
    },

    postDesc: {
        color: white,
        fontSize: fontBody,
        opacity: "0",
        height:"fit-content",
        padding: "10px",
        transition: "0.5s",
    },

    postDescBgSmall: {
        width:"calc(100% - 20px)"
    },

    postDescBg: {
        background:"black", 
        position:"absolute",
        height: "100%",
        opacity: "0",
        transition: "0.5s",
    },

    postHeader: {
        fontFamily: "Epilogue, sans-serif",
        fontSize:"18px",
        margin: "10px 0",
        fontWeight: "200",
        color: red
    },
    // imgMedium:{
    //     width:"100%",
    //     minHeight:"120px",
    //     marginBottom:fontBody
    // },

    // workContent:{
    //     height:"130px"
    // },

    // workContentMedium:{
    //     height:"280px"
    // },

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

    // avatar:{
    //     display: "block",
    //     width: "400px",
    //     height: "400px",
    //     backgroundColor: "red",
    //     borderRadius: "50% 40% 20% 80% / 70% 10% 50% 20%",
    // },

    // button:{
    //     border:"2px solid white", 
    //     margin: "0.8rem",
    //     background:"282A33",
    //     transition:"0.5s",
    //     '&:hover':{
    //         background:white
    //     },
    //     '&:hover $buttonIcon':{
    //         color:black
    //     }
    // },


    headerBtn: {
        borderRadius:"5px", 
        padding:"5px 10px", 
        fontSize: fontBody, 
        color: white, 
        float:"right",
        letterSpacing: "0",
        transition:"0.5s",
        '&:hover':{
            background: "#A9AEB9",
            letterSpacing: "2px"
        }
    },

    footerBtn:{
        borderRadius:"5px", 
        padding:"5px 10px", 
        fontSize: fontBody, 
        color:white,
        width: "100%",
        textAlign:"left",
        marginBottom: "10px",
        background: red,
        textTransform:"none",
        opacity: "1",
        transition:"0.5s",
        '&:hover':{
            opacity: "80%",
            background: red,
        }
    },

    footerDesc: {
        paddingRight: "20px",
        borderRight: "2px solid #414141"
    },

    menuButton: {
        borderRadius: "0",
        color: white,
        fontSize: fontSmall,
        margin: "0 10px"
    }
}));

export {useStyles} 