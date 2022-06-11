import '../App.css';
import React from 'react';
import {Button,
  Toolbar,
  AppBar, 
  Grid,
  Typography} from '@material-ui/core';
import {Brush, Code, LinkedIn, MailOutline} from '@material-ui/icons';
import MenuDrawer from './menu';
import '../asset/styles.css';


import avatar from "../element/avatar.png";
import cat from "../element/cat.jpg";
import header from "../element/header.png";
import j1 from "../element/j1.png";
import p1 from "../element/p1.png";
import trs1 from "../element/trs1.png";


function Mobile(props) {
  const {classes, handleClose, handleOpen, scroll, open, modal, openModal} = props
  
  const workList = [
    {
      date: "Apr 2021",
      title: "PixiPixi",
      img: (<img className={classes.img} src={p1}/>),
      desc: "A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia.",
      moreDesc: "",
    },
    {
      date: "Apr 2021",
      title: "Jamit!",
      img: (<img className={classes.img} src={j1}/>),
      desc: "A card-based web platform for the creative industry for education and entertainment purposes.",
      moreDesc: "",
    },
    {
      date: "Jul 2019",
      title: "Traffic Reporting System",
      img: (<img className={classes.img} src={trs1}/>),
      desc: "A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia.",
      moreDesc: "",
    }
  ]
  
  const getWorkPost = () => {
    return workList.map(a => {
      return (
      <Grid item xs={12} style={{marginBottom:"1rem"}}>
        <div className={classes.work} onClick={()=>handleOpen(0)}>
          <Grid container justify="center" alignItems="center" style={{background:"#FAFAFA", border:"0.5px solid #BBBBBB", borderRadius:"5px", marginBottom:"10px"}}>
            <Grid item xs={4} style={{borderRight:"0.5px solid #BBBBBB"}}>
              <Typography className={classes.postTime}>
                {a.date}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.postTitle}>
                {a.title}
              </Typography>
            </Grid>
          </Grid>
          {a.img}
          <div className={classes.workContent} style={{height:"auto"}}>
            <Typography className={classes.fontBodyH3}>
              Description
            </Typography>
            <Typography className={classes.fontBody} >
              {a.desc}
            </Typography>
            <Typography className={classes.fontSmall} >
              Show more.
            </Typography>
          </div>
        </div>
      </Grid>
    )})
  }

  return (
    <div className={classes.root}>
      <AppBar id="about" position="sticky" className={classes.topBar}>
        <Toolbar variant="dense">
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={6}>
              <div style={{float:"left", background:"linear-gradient(to bottom right, #99A5D8, #FFE8EC)", height:"28px", width:"28px", margin:"5px 10px 0 0"}}>
                <Typography className={classes.fontTopPanel} style={{lineHeight:"28px", textAlign:"center"}}>
                  LN
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
                <MenuDrawer 
                scroll={scroll}
                classes={classes}/> 
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" alignItems={"flex-start"} style={{margin:"auto", position:"relative", zIndex:"2"}}>
        <Grid container xs={12} alignItems={"center"} style={{position:"relative", height:"100px"}}>
          <img style={{width:"100%", height:"100px", position:"absolute", zIndex:"1"}} src={header}/>
          <Typography className={classes.fontBodyHeader} style={{width: "100%", textAlign:"center", zIndex:"2"}}>
            <span style={{background:"#EA7779", color:"white", padding:"0 10px"}}>
              Hi, I am Lis Nadya.
            </span>
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems={"flex-start"} style={{position:"relative", padding:"20px", background:"white", borderBottom:"0.5px solid #C2C2C2"}}>
          <Grid container style={{margin:"auto", maxWidth:"420px", position:"relative"}}>
            <Grid item xs={8}>
              <Typography className={classes.fontBody} style={{textAlign:"left"}}>
                A front-end developer with over 2 years of working experience, which includes developing and maintaining web applications.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <div style={{padding:"5px", borderRadius: "100px", background:"white", position:"absolute", marginTop:"-60px", overflow:"hidden", right:"0", zIndex:"2"}}>
                  <img style={{width:"80px", height:"80px", borderRadius: "100px"}} src={cat}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      {/* Skills */}
      <Grid id="skills" container className={classes.skills} justify="center" alignItems="center">
        <Grid item xs={12} style={{marginBottom:"20px"}}>
          <Typography className={classes.fontBodyHeader} style={{textAlign:"left"}}>
            skills
          </Typography>
        </Grid>
        <Grid container xs={12} justify="flex-start" alignItems="center" style={{padding:"10px",marginBottom:"10px",background:"#B8C5EF", borderRadius:"5px"}}>
          <div style={{width:"80px"}}>
            <div style={{background:"#99A5D8", padding:"10px 10px 6px 10px", width:"fit-content", borderRadius:"10px", margin:"auto"}}>
                <Brush className={classes.icon}/>
            </div>
          </div>
          <div style={{width:"calc(100% - 80px)"}}>
            <Typography className={classes.fontBody} style={{textAlign:"left"}}>
              <b>I enjoy designing</b><br/>
              UX, UI, Web, Mobile<br/>

              <b>Design tools I use</b><br/>
              Photoshop, Figma
            </Typography>
          </div>
        </Grid>
        <Grid container xs={12} justify="flex-start" alignItems="center" style={{padding:"10px", background:"#FFE8EC", borderRadius:"5px"}}>
          <div style={{width:"80px"}}>
            <div style={{background:"#DAA2AC", padding:"10px 10px 6px 10px", width:"fit-content", borderRadius:"10px", margin:"auto"}}>
                <Code className={classes.icon}/>
            </div>
          </div>
          <div style={{width:"calc(100% - 80px)"}}>
            <Typography className={classes.fontBody} style={{textAlign:"left"}}>
              <b>Languages I speak</b><br/>
              HTML5, CSS, Javascript /Typescript, Python, PHP, SQL<br/>

              <b>Frameworks I use</b><br/>
              Angular, React JS, Bootstrap, JQuery
            </Typography>
          </div>
        </Grid>
      </Grid>


      {/* My Recent Work */}
      <Grid id="work" container style={{margin:"0 auto", padding:"20px", maxWidth:"460px",}} justify="center" alignItems="center">
        <Grid item xs={12} style={{marginBottom:"20px"}}>
          <Typography className={classes.fontBodyHeader} style={{textAlign:"left"}}>
            recent work
          </Typography>
        </Grid>
         {/* List of Works */}
        <Grid container justify="center" alignItems="center">
         {getWorkPost()}
        </Grid>
      </Grid>

      {/* Contact */}
      <div id="contact"className={classes.footer}>
        <div className={classes.footerContent}>
          <Typography className={classes.fontBodyHeader} style={{textAlign:"center"}}>
            contact me
          </Typography>
          <Typography className={classes.fontBody} style={{color:"#9D9D9D", textAlign:"center"}}>
            If you want to get in touch, talk to me about a project collaboration or just say hi,
            do send me an email or a message via
          </Typography>
          <Grid container justify="center" alignItems="center" style={{marginTop:"1rem"}}>
            <Grid item>
              <Button onClick={()=>{window.open('mailto:lisnadyaz@gmail.com', '_blank')}} startIcon={<MailOutline />} style={{border:"0.5px solid #9D9D9D", borderRadius:"10px", marginRight:"10px", padding:"5px 10px", fontSize:"10px", color:"#9D9D9D"}}>
                Email
              </Button>
              <Button onClick={()=>{window.open('https://www.linkedin.com/in/lisnadya/', '_blank')}} startIcon={<LinkedIn />} style={{border:"0.5px solid #9D9D9D", borderRadius:"10px", padding:"5px 10px", fontSize:"10px", color:"#9D9D9D"}}>
                LinkedIn
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
