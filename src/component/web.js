import '../App.css';
import React, {useState, useEffect} from 'react';
import {IconButton, 
  Toolbar,
  AppBar, 
  Grid,
  Link,
  Typography,
  Fade,
  Backdrop,
  Modal
} from '@material-ui/core';
import {Brush, Code, LinkedIn, MailOutline, CloseRounded} from '@material-ui/icons';
import '../asset/styles.css';

import avatar from "../element/avatar.png";
import work1 from "../element/work1.png";
import work2 from "../element/work2.png";
import work3 from "../element/work3.png";
import leaf1 from "../element/leaf1.png";
import leaf2 from "../element/leaf2.png";

function Web(props) {
  const {classes, workContent, handleClose, handleOpen, scroll, open, modal, openModal} = props
  const [isMedium, setIsMedium] = useState( window.matchMedia("(max-width: 1200px)").matches );

  useEffect(() => {
    window.matchMedia("(max-width: 1200px)").addListener(
      e=>{
        if (e.matches) { 
          setIsMedium(true)
        } else {
          setIsMedium(false)
        }
      }
    )
  });

  return (
    <div className={classes.root}>
      <AppBar id="about" position="static" className={classes.topBar} style={{position:"relative", zIndex:"2"}}>
        <Toolbar variant="dense">
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={2}>
              <div style={{float:"left", border:"2px solid #282A33", height:"28px", width:"28px", cursor:"pointer", marginRight:"10px"}}>
                <Typography className={classes.fontTopPanel} style={{lineHeight:"28px", textAlign:"center"}}>
                  LN
                </Typography>
              </div>
            </Grid>
            <Grid item xs={10}>
                <Typography style={{textAlign:"right", lineHeight:"28px"}} className={classes.fontTopPanel}>
                  <Link onClick={()=>scroll("#skills")} className={classes.link} underline="none">
                    SKILLS
                  </Link>
                  <Link onClick={()=>scroll("#work")} className={classes.link} underline="none">
                    WORK
                  </Link>
                  <Link onClick={()=>scroll("#contact")} className={classes.link} underline="none">
                    CONTACT
                  </Link>
                </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div className={classes.about} style={{background:"#E8DDD6"}} >
        <div style={{position:"absolute", zIndex:"1", top:"4rem", right:"0"}}>
          <img style={{width:"200px"}} src={leaf1}/>
        </div>
        <div style={{position:"absolute", zIndex:"1", bottom:"0", left:"0"}}>
          <img style={{width:"200px"}} src={leaf2}/>
        </div>
        <Grid container justify="center" alignItems={"center"} style={{width:"100vW", padding:"2rem", height: "700px", maxWidth:"1100px", margin:"auto", position:"relative", zIndex:"2"}}>
         
          <Grid item xs={6}>
            <Typography className={classes.fontBodyHeader}>
              Hi, I am<br/>
              <span style={{color:"#7CBBB0"}}>Lis Nadya</span>
            </Typography>
            <Typography className={classes.fontBody} style={{marginTop:"20px"}}>
            I am a front-end developer with one year of working experience at Shared Experience Art Machine, LLC. 
            I graduated with First Class Honors in Bachelor of Computer Science (Hons.). 
            I continuously work on improving my skills at solving one design problem at a time. 
            My passion in design and bringing them to life fuels my daily motivation to accomplish my tasks.
            </Typography>
          </Grid>
          
          <Grid item xs={6} style={{position:"relative"}}>
            <div style={{position:"absolute", width:"100%"}}>
              <div id={"avatarImg"}>
                <img style={{width: isMedium? "400px" : "500px"}} src={avatar}/>
              </div>
            </div>
            <div id={"avatar"} style={{width: isMedium? "300px" : "350px", height: isMedium? "300px" : "350px"}} ></div>
            <div className={classes.avatarBg} style={{width: isMedium? "300px" : "350px", height: isMedium? "300px" : "350px"}} ></div>
          </Grid>
          
        </Grid>
      </div>
      <div className={classes.aboutSlant}>
      </div>

      {/* Skills */}
      <div id="skills" style={{position:"relative", zIndex:"2", marginTop:"-15rem", marginBottom:"3rem", marginLeft:isMedium ? "1rem" : null, marginRight:isMedium ? "1rem" : null, padding:"2rem 0"}}>
        <Grid container className={classes.skills} justify="center" alignItems="center">
          <Grid item xs={6} style={{padding:isMedium ? "6rem 3rem":"6rem"}}>
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
          <Grid item xs={6} style={{padding:isMedium ? "6rem 3rem":"6rem",borderLeft:"1px solid #D2D2D2"}}>
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
            The projects I have worked on are either disclosed or are still under development.
          </Typography>
        </Grid>
         {/* List of Works */}
        <Grid container spacing={3} justify="center" alignItems="center" style={{maxWidth:"100%", margin:"3rem 0"}}>
          <Grid item xs={4}>
            <div className={classes.work} onClick={()=>handleOpen(0)}>
              <img className={isMedium ? classes.imgMedium : classes.img} src={work1}/>
              <div className={isMedium ? classes.workContentMedium : classes.workContent} style={null}>
                <Typography className={classes.fontBodyH3}>
                  Traffic Reporting System
                </Typography>
                <Typography className={classes.fontBody} >
                  A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.work} onClick={()=>handleOpen(1)}>
              <img className={isMedium ? classes.imgMedium : classes.img} src={work2}/>
              <div className={isMedium ? classes.workContentMedium : classes.workContent}>
                <Typography className={classes.fontBodyH3}>
                  Jamit!
                </Typography>
                <Typography className={classes.fontBody}>
                  A card-based web platform for the creative industry for education and entertainment purposes.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.work} onClick={()=>handleOpen(2)}>
              <img className={isMedium ? classes.imgMedium : classes.img} src={work3}/>
              <div className={isMedium ? classes.workContentMedium : classes.workContent}>
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
            If you wanna get in touch, talk to me about a project collaboration or just say hi,
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
        style={{alignItems:"flex-start"}}
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

export default Web;
