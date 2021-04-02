import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflowY:"auto",
        background:"#F5F5F3",
        overflowX:"hidden",
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    topBar:{
        background:"#E8DDD6",
        boxShadow:"none",
        padding:"0.5rem",
    },

    link:{
        marginLeft: theme.spacing(6),
        fontSize:"1rem",
        color:"#282A33",
        transition:"0.5s",
        cursor:"pointer"
    },

    fontTopPanel:{
        fontFamily:"Quicksand, sans-serif",
        fontSize:"1rem",
        fontWeight:"bold",
        color:"#282A33",
    },

    fontBody:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:"1rem",
        color:"#282A33",
    },

    fontBodyH2:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:"2rem",
        color:"#282A33",
        fontWeight:"bold",
        textAlign:"center", 
    },

    fontBodyH3:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:"1.25rem",
        marginBottom:"1rem",
        color:"#282A33",
        fontWeight:"bold",
    },

    fontBodyH4:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:"1.1rem",
        marginBottom:"1rem",
        color:"#282A33",
        fontWeight:"600",
    },

    fontModalFooter:{
        fontFamily:"Open Sans, sans-serif",
        fontSize:"0.8rem",
        marginBottom:"1rem",
        color:"#C4C4C4",
    },

    fontBodyHeader:{
        fontFamily:"Open Sans, sans-serif",
        fontWeight:"bold", 
        fontSize:"64px",
        color:"#282A33",
    },

    about:{
        width: "100vW",
        height: "calc(100vH + 2rem)",
        background: "#E8DDD6",
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
        borderRadius:"1rem",
        background:"white",
        border:"1px solid #D2D2D2",
    },
    line:{
        margin:"2rem auto", 
        width:"4rem", 
        height:"5px", 
        background:"#7CBBB0", 
        borderRadius:"1rem"
    },

    icon:{
        fontSize:"50px", 
        color:"#7CBBB0"
    },

    h4:{
        color:"#E86C45"
    },

    work:{
        position:"relative",
        width:"calc(100% - 6rem)",
        padding:"3rem",
        overflow:"hidden",
        background:"white",
        borderRadius:"1rem",
        border:"1px solid #D2D2D2",
        transition:"0.5s",
        cursor:"pointer",
        '&:hover':{
            boxShadow:"0 0 4px #c4c4c4",
            transform:"scale(0.95)"
        }
    },

    img:{
        width:"100%",
        maxHeight:"200px",
        marginBottom:"1rem"
    },

    workContent:{
        height:"130px"
    },

    footer:{
        background:"#282A33",
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
        margin:"1rem",
        background:"282A33",
        transition:"0.5s",
        '&:hover':{
            background:"white"
        },
        '&:hover $buttonIcon':{
            color:"#282A33"
        }
    },

    buttonIcon:{
        fontSize:"18px", 
        color:"white",
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
        marginTop:"-140px", 
        width: "150px",
        height: "150px",
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
        background: "#FFF",
        borderRadius:"1rem",
        maxWidth:"600px",
        maxHeight:"95vH",
        outline:"none",
    },

    paperSmall: {
        position:"relative",
        background: "#FFF",
        borderRadius:"1rem",
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
        marginBottom:"1rem"
    },

    modalSection:{
        padding:"1rem 2rem",
    
    }
}));

export {useStyles} 