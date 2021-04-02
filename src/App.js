import './App.css';
import React, {useState, useEffect} from 'react';
import {IconButton, 
  Toolbar,
  AppBar, 
  Grid,
  Link,
  Select,
  MenuItem,
  Typography,
  Fade,
  Backdrop,
  Modal,
  InputAdornment} from '@material-ui/core';
import {Brush, Code, LinkedIn, MailOutline, RemoveCircleOutline} from '@material-ui/icons';
import MenuDrawer from './component/menu';
import {useStyles} from './asset/styles';
import './asset/styles.css';

import $ from 'jquery';

import avatar from "./element/avatar.png";
import avatarBg from "./element/avatarBg.png";
import work1 from "./element/work1.png";
import work2 from "./element/work2.png";
import work3 from "./element/work3.png";
import trs1 from "./element/trs1.png";
import j1 from "./element/j1.png";
import p1 from "./element/p1.png";
import leaf1 from "./element/leaf1.png";
import leaf2 from "./element/leaf2.png";

function App(props) {
  const classes = useStyles(props);
  const [openModal, setOpenModal] = useState(0);
  const [isSmall, setIsSmall] = useState( window.matchMedia("(max-width: 700px)").matches );
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const workContent = [
    {
      img: (<img className={classes.modalImg} src={trs1}/>),
      title: "Traffic Reporting System",
      description: "A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia. The product was developed for 2 potential users: police officers and motor vehicle drivers. The purpose of this development is to reduce the time taken of filing a traffic accident report, allow drivers to have online access to the final report’s documentation, receive police summons and pay them online, and provide a platform to improve managing submitted reports as opposed to the manual procedure. I achieved an A for this course.",
      role: (<ul>
        <li>Designed the system's architecture and optimal userflows based on the requirements found from the background study research</li> 
        <li>Developed the product from end to end using XAMPP, PHP, Javascript, HTML5, CSS, JQuery and MySQL</li> 
        </ul>),
      date: "July 2019"
    },
    {
      img: (<img className={classes.modalImg} src={j1}/>),
      title: "Jamit!",
      description: "A card-based web platform for the creative industry for education and entertainment purposes under Shared Experience Art Machine. I was involved at the early stages of this product.",
      role: (<ul>
        <li>Designs optimal userflows using Figma based on the stakeholder's requirements</li> 
        <li>Develops the product's front end using React JS, Node JS, Javascript, HTML5, CSS and MongoDB for an in-house software</li> 
        <li>Writes down functional test cases for development and design to refer to</li> 
        </ul>),
      date: "Ongoing"
    },
    {
      img: (<img className={classes.modalImg} src={p1}/>),
      title: "PixiPixi",
      description: "A proof of concept marketplace using NFT (Non-fungible Token) and Blockchain technology. Started getting involved at the beginning.",
      role: (<ul>
        <li>Designs optimal userflows using Figma based on the client's requirements</li> 
        <li>Develops the product's front end using React TS, Node JS, Typescript, Javascript, HTML5, CSS and MongoDB for an in-house software</li> 
        </ul>),
      date: "Ongoing"
    }
  ]

  const handleOpen = (i) => {
    setOpen(true);
    setOpenModal(i);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scroll = (div) =>{
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 1000);
  }

  const modal = (i) =>{
    return (
        <div className={isSmall ? classes.paperSmall : classes.paper}>
          <div className={classes.modalSection} style={{padding:isSmall ? "0.2rem 1rem" : "1rem 2rem",borderBottom:"1px solid #C4C4C4"}}>
            <Typography className={classes.fontBodyH3} style={{fontSize:isSmall ? "0.8rem":"1.25rem", textAlign:"left", margin:"0"}}>
              {workContent[i].title}
            </Typography>
          </div>
          <div className={isSmall ? classes.paperContentSmall : classes.paperContent} >
            <div style={{textAlign:'center'}}>
              {workContent[i].img}
            </div>
            <Typography className={classes.fontBodyH4}>
              Project Description
            </Typography>
            <Typography className={classes.fontBody} style={{marginBottom:"1rem"}}>
              {workContent[i].description}
            </Typography>
            <Typography className={classes.fontBodyH4}>
              My Role
            </Typography>
            <Typography className={classes.fontBody} style={{marginBottom:"1rem"}}>
              {workContent[i].role}
            </Typography>
          </div>
          <div className={classes.modalSection} style={{borderTop:"1px solid #c0c0c0"}}>
            <Typography className={classes.fontModalFooter} style={{textAlign:"left", margin:"0"}}>
            {workContent[i].date}
            </Typography>
          </div>
        </div>
    )
  }

  useEffect(() => {
    window.matchMedia("(max-width: 700px)").addListener(
      e=>{
        if (e.matches) { 
          console.log("small")
          setIsSmall(true)
        } else {
          setIsSmall(false)
        }
      }
    )
  });

  return (
    <div className={classes.root}>
      <AppBar id="about" position="static" className={classes.topBar} style={{position:"relative", zIndex:"2"}}>
        <Toolbar variant="dense">
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={6}>
              <div style={{float:"left", border:"2px solid #282A33", height:"28px", width:"28px", cursor:"pointer", marginRight:"10px"}}>
                <Typography className={classes.fontTopPanel} style={{lineHeight:"28px", textAlign:"center"}}>
                  LN
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              {
                isSmall ? 
                <MenuDrawer/> 
                :
                <Typography style={{textAlign:"right", lineHeight:"28px"}} className={classes.fontTopPanel}>
                  <Link onClick={()=>scroll("#about")} className={classes.link} underline="none">
                    ABOUT
                  </Link>
                  <Link onClick={()=>scroll("#skills")} className={classes.link} underline="none">
                    SKILL
                  </Link>
                  <Link onClick={()=>scroll("#work")} className={classes.link} underline="none">
                    WORK
                  </Link>
                  <Link onClick={()=>scroll("#contact")} className={classes.link} underline="none">
                    CONTACT
                  </Link>
                </Typography>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div className={classes.about} style={isSmall ? {background:"#E8DDD6", minHeight:"450px"} : {background:"#E8DDD6"}} >
        <div style={{position:"absolute", zIndex:"1", top:"4rem", right:"0"}}>
          <img style={isSmall ? {width:"50px"} : {width:"200px"}} src={leaf1}/>
        </div>
        <div style={{position:"absolute", zIndex:"1", bottom:"0", left:"0"}}>
          <img style={isSmall ? {width:"50px"} : {width:"200px"}} src={leaf2}/>
        </div>
        <Grid container justify="center" alignItems="center" style={{width:"100vW", padding:"2rem", height: "calc(100vH - 2rem)", maxWidth:"1100px", margin:"auto", position:"relative", zIndex:"2"}}>
          <Grid item xs={isSmall ? 12 : 6}>
            <Typography className={classes.fontBodyHeader} style={isSmall ? {fontSize:"2rem"} : null}>
              Hi, I am<br/>
              <span style={{color:"#7CBBB0"}}>Lis Nadya</span>
            </Typography>
            <Typography className={classes.fontBody} style={{marginTop:"20px"}}>
              I am a front-end developer with one year of working experience. I graduated with First Class Honours in Bachelor of Computer Science (Hons.).
            </Typography>
          </Grid>
          
          <Grid item xs={isSmall ? 12 : 6} style={{position:"relative"}}>
            <div style={{position:"absolute", width:"100%", marginTop:isSmall?"-70px":"0"}}>
              <div id={isSmall ? "avatarImgSmall" : "avatarImg"}>
                <img style={isSmall ? {width:"150px"} : {width:"500px"}} src={avatar}/>
              </div>
            </div>
            <div id={isSmall ? "avatarSmall" : "avatar"}></div>
            <div className={isSmall ? classes.avatarBgSmall : classes.avatarBg}>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.aboutSlant}>
      </div>

      {/* Skills */}
      <div id="skills"style={{marginTop:isSmall?"-15rem":"-10rem", marginBottom:"3rem", padding:"2rem 0"}}>
        <Grid container className={classes.skills} justify="center" alignItems="center">
          <Grid item xs={isSmall ? 12 : 6} style={isSmall?{padding:"1rem"}:{padding:"6rem"}}>
            <Typography className={classes.fontBody} style={{textAlign:"center"}}>
              <Brush className={classes.icon} style={{marginTop:"10px", marginBottom:"-10px"}}/>
            </Typography>
            <div className={classes.line}></div>
            <Typography className={classes.fontBody} style={{fontSize:"24px", fontWeight:"bold",textAlign:"center"}}>
              Designer
            </Typography>

            <Typography className={classes.fontBody} style={{textAlign:"center"}}>
              <br/>
              <span className={classes.h4}>What I enjoy designing:</span><br/>
              UX, UI, Web, Mobile<br/><br/><br/>

              <span className={classes.h4}>Design tools I use:</span><br/>
              Photoshop, Figma
            </Typography>
          </Grid>
          <Grid item xs={isSmall ? 12 : 6} style={isSmall?{padding:"1rem",borderTop:"1px solid #D2D2D2"}:{padding:"6rem",borderLeft:"1px solid #D2D2D2"}}>
            <div style={{border:"5px solid #7CBBB0", borderRadius:"10px", margin:"auto", width:"4rem", height:"3rem"}}>
              <Typography className={classes.fontBody} style={{textAlign:"center"}}>
                <Code className={classes.icon}/>
              </Typography>
            </div>
            <div className={classes.line}></div>

            <Typography className={classes.fontBody} style={{fontSize:"24px", fontWeight:"bold", textAlign:"center"}}>
              Front-end Developer
            </Typography>

            <Typography className={classes.fontBody} style={{textAlign:"center"}}>
              <br/>
              <span className={classes.h4}>Languages I speak:</span><br/>
              HTML5, CSS, Javascript, Java, Typescript, Python, PHP, C/C++, SQL<br/><br/>

              <span className={classes.h4}>Frameworks I use:</span><br/>
              React JS, Node JS, Bootstrap, JQuery
            </Typography>
          </Grid>
        </Grid>
      </div>


      {/* My Recent Work */}
      <Grid id="work"container style={{maxWidth:"1200px", margin:"auto", marginBottom:"6rem"}} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography className={classes.fontBodyH2} style={{color:"#7CBBB0"}}>
            My Recent Work
          </Typography>
          <Typography className={classes.fontBody} style={{textAlign:"center"}}>
            Projects I’ve worked on recently. The projects I have worked on are either disclosed or are still under development.
          </Typography>
        </Grid>
         {/* List of Works */}
         
        <Grid container spacing={3} justify="center" alignItems="center" style={{maxWidth:"100%", margin:"3rem 0"}}>
          <Grid item xs={isSmall ? 12 : 4}>
            <div className={classes.work} onClick={()=>handleOpen(0)}>
              <img className={classes.img} src={work1}/>
              <div className={classes.workContent} style={isSmall ? {height:"auto", minHeight:"130px"} : null}>
                <Typography className={classes.fontBodyH3}>
                  Traffic Reporting System
                </Typography>
                <Typography className={classes.fontBody} >
                  A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={isSmall ? 12 : 4}>
            <div className={classes.work} onClick={()=>handleOpen(1)}>
              <img className={classes.img} src={work2}/>
              <div className={classes.workContent}  style={isSmall ? {height:"auto", minHeight:"130px"} : null}>
                <Typography className={classes.fontBodyH3}>
                  Jamit!
                </Typography>
                <Typography className={classes.fontBody}>
                  A card-based web platform for the creative industry for education and entertainment purposes.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={isSmall ? 12 : 4}>
            <div className={classes.work} onClick={()=>handleOpen(2)}>
              <img className={classes.img} src={work3}/>
              <div className={classes.workContent}  style={isSmall ? {height:"auto",minHeight:"130px"} : null}>
                <Typography className={classes.fontBodyH3}>
                  PixiPixi
                </Typography>
                <Typography className={classes.fontBody}>
                  A proof of concept marketplace using NFT (Non-fungible Token) and Blockchain technology 
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div id="contact"className={classes.footer}>
        <div className={classes.footerContent}>
          <Typography className={classes.fontBodyH2} style={{color:"white"}}>
            Contact Me
          </Typography>
          <Typography className={classes.fontBody} style={{textAlign:"center", color:"white"}}>
            If you wanna get in touch, talk to me about a project collaboration or just say hi,<br/>
            do send me an email or a message via
          </Typography>
          <Grid container justify="center" alignItems="center" style={{marginTop:"1rem"}}>
            <Grid item spacing={2}>
              <IconButton 
                onClick={()=>{window.open(
                                        'mailto:lisnadyaz@gmail.com',
                                        '_blank' 
                                        )}} 
                className={classes.button}
              >
                <MailOutline className={classes.buttonIcon}/>
              </IconButton>
              <IconButton 
                className={classes.button}
                onClick={()=>{window.open(
                  'https://www.linkedin.com/in/lisnadya/',
                  '_blank' 
                  )}} 
              >
                <LinkedIn className={classes.buttonIcon}/>
              </IconButton>
            </Grid>
          </Grid>
          
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        style={{alignItems:isSmall?"flex-start":"center"}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {modal(openModal)}
        </Fade>
      </Modal>
    </div>
  );
}

export default App;
