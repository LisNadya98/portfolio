import '../App.css';
import React, {useState, useEffect} from 'react';
import {IconButton, 
  Toolbar,
  AppBar, 
  Grid,
  Typography,
  Fade,
  Backdrop,
  Modal} from '@material-ui/core';
import {Brush, Code, LinkedIn, MailOutline, CloseRounded} from '@material-ui/icons';
import MenuDrawer from './menu';
import {useStyles} from '../asset/styles';
import '../asset/styles.css';

import $ from 'jquery';

import avatar from "../element/avatar.png";
import work1 from "../element/work1.png";
import work2 from "../element/work2.png";
import work3 from "../element/work3.png";
import leaf1 from "../element/leaf1.png";
import leaf2 from "../element/leaf2.png";

function Mobile(props) {
  const {classes, workContent, handleClose, handleOpen, scroll, open, modal, openModal} = props
  
  return (
    <div className={classes.root}>
      <AppBar id="about" position="static" className={classes.topBar} style={{position:"relative", zIndex:"2"}}>
        <Toolbar variant="dense">
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={6}>
              <div style={{float:"left", border:"2px solid #282A33", height:"28px", width:"28px", marginRight:"10px"}}>
                <Typography className={classes.fontTopPanel} style={{lineHeight:"28px", textAlign:"center"}}>
                  LN
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
                <MenuDrawer/> 
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div className={classes.aboutSmall} style={{minHeight:"450px"}} >
        <div style={{position:"absolute", zIndex:"1", top:"4rem", right:"0"}}>
          <img style={{width:"100px"}} src={leaf1}/>
        </div>
        <div style={{position:"absolute", zIndex:"1", top:"500px", left:"0"}}>
          <img style={{width:"100px"}} src={leaf2}/>
        </div>
        <Grid container justify="center" alignItems={"flex-start"} style={{width:"100vW", padding:"1rem", height: "480px", margin:"auto", position:"relative", zIndex:"2"}}>
          
          <Grid item xs={12} style={{position:"relative", height:"250px"}}>
            <div style={{marginTop:"2rem", marginBottom:"-2rem"}}>
              <div style={{position:"absolute", width:"100%"}}>
                <div id={"avatarImgSmall"}>
                  <img style={{width:"220px"}} src={avatar}/>
                </div>
              </div>
              <div id={"avatarSmall"}></div>
              <div className={classes.avatarBgSmall}>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} style={{marginTop:"2rem"}}>
            <Typography className={classes.fontBodyHeader} style={{fontSize:"2rem"}}>
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
          
          
        </Grid>
      </div>
      <div className={classes.aboutSlant}>
      </div>

      {/* Skills */}
      <div id="skills" style={{margin:"-15rem 1rem 3rem 1rem",padding:"2rem 0"}}>
        <Grid container className={classes.skills} justify="center" alignItems="center">
          <Grid item xs={12} style={{padding:"3rem"}}>
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
          <Grid item xs={12} style={{padding:"3rem",borderTop:"1px solid #D2D2D2"}}>
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
      <Grid id="work" container style={{margin:"0 0 6rem 0"}} justify="center" alignItems="center">
        <Grid item xs={12} style={{padding:"0 1rem"}}>
          <Typography className={classes.fontBodyH2} style={{color:"#7CBBB0"}}>
            My Recent Work
          </Typography>
          <Typography className={classes.fontBody} style={{textAlign:"center"}}>
            The projects I have worked on are either disclosed or are still under development.
          </Typography>
        </Grid>
         {/* List of Works */}
         
        <Grid container justify="center" alignItems="center" style={{maxWidth:"calc(100% - 2rem)", margin:"3rem 0"}}>
          <Grid item xs={12} style={{marginBottom:"1rem"}}>
            <div className={classes.work} onClick={()=>handleOpen(0)}>
              <img className={classes.img} src={work1}/>
              <div className={classes.workContent} style={{height:"auto", minHeight:"130px"}}>
                <Typography className={classes.fontBodyH3}>
                  Traffic Reporting System
                </Typography>
                <Typography className={classes.fontBody} >
                  A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}  style={{marginBottom:"1rem"}}>
            <div className={classes.work} onClick={()=>handleOpen(1)}>
              <img className={classes.img} src={work2}/>
              <div className={classes.workContent}  style={{height:"auto", minHeight:"130px"}}>
                <Typography className={classes.fontBodyH3}>
                  Jamit!
                </Typography>
                <Typography className={classes.fontBody}>
                  A card-based web platform for the creative industry for education and entertainment purposes.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}  style={{marginBottom:"1rem"}}>
            <div className={classes.work} onClick={()=>handleOpen(2)}>
              <img className={classes.img} src={work3}/>
              <div className={classes.workContent}  style={{height:"auto",minHeight:"130px"}}>
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

export default Mobile;
