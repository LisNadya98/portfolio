import { makeStyles } from '@material-ui/core/styles';
const fontFamily = "Nunito Sans, sans-serif";
const fontBody = "16px";
const fontSmall = "12px";
const fontH4 = "18px";
const fontH3 = "20px";
const fontH2 = "24px";
const black = "#3E3E3E";
const darkPurple = "#0F143E";
const darkerPurple = "#070B30";
const grey = "#9D9D9D";
const grey2 = "#EAEAEA";
const white = "#FFF";
const greyBg = "#C2C2C2";
const pink = "#FF7EAD";
const purple = "#E071FF";

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
        color:"#FF83D5"
    },

    numberHighlight: {
        color: purple
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
        color:white,
    },

    fontBodyH2:{
        fontFamily: fontFamily,
        fontSize:fontH2,
        color:white,
        fontWeight:"bold",
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
        color:pink,
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
        fontWeight:"bold", 
        lineHeight:"80%",
        fontSize:"60px",
        color:white,
    },

    listText: {
        color: white,
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
        color: grey2,
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
        color: "#7446DC"
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
        background:darkPurple,
        borderRadius:"5px",
        transition:"0.5s",
        // '&:hover':{
        //     boxShadow:"0 0 4px #c4c4c4",
        //     transform:"scale(0.95)"
        // }
    },

    img:{
        width:"100%",
        transition:"0.5s",
        opacity: "1",
        '&:hover':{
            opacity: "0.8"
        }
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
        borderRadius:"20px", 
        padding:"10px 20px", 
        fontSize: fontBody, 
        color:white,
        width: "100%",
        marginBottom: "10px",
        background: "linear-gradient(to bottom right, #22226C, #472361)",
        textTransform:"none",
        letterSpacing: "0",
        transition:"0.5s",
        '&:hover':{
            letterSpacing: "2px"
        }
    },

    footerDesc: {
        paddingRight: "20px",
        borderRight: "2px solid #22226C"
    }
}));

export {useStyles} 