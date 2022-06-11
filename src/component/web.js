import '../App.css';
import React, {useState, useEffect} from 'react';
import MenuDrawer from './menu';
import {Button, 
  Toolbar,
  AppBar, 
  Grid,
  Typography,
} from '@material-ui/core';
import {Brush, Code, LinkedIn, MailOutline, CloseRounded} from '@material-ui/icons';
import '../asset/styles.css';

import cat from "../element/cat.jpg";
import header from "../element/header.png";
import j1 from "../element/j1.png";
import p1 from "../element/p1.png";
import trs1 from "../element/trs1.png";

function Web(props) {
  const {classes, scroll} = props
  const [isSmall, setIsSmall] = useState( window.matchMedia("(max-width: 790px)").matches );
  const [workList, setworkList] = useState([
    {
      id: 1, 
      date: "Apr 2021",
      title: "PixiPixi",
      img: (<img className={classes.img} src={p1}/>),
      desc: "A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia.",
      moreDesc: (<ul>
        <li>Designed the system's architecture and optimal userflows based on the requirements found from the background study research</li> 
        <li>Developed the platform end  to end using WAMP stack (Windows, Apache, MySQL and PHP) with Javascript, JQuery, HTML5 and CSS</li> 
        </ul>),
      showMore: false
    },
    {
      id: 2, 
      date: "Apr 2021",
      title: "Jamit!",
      img: (<img className={classes.img} src={j1}/>),
      desc: "A card-based web platform for the creative industry for education and entertainment purposes.",
      moreDesc: (<ul>
        <li>Perform 3 job responsibilities, which are design, development and testing.</li>
        <li>Design more than 30 user interfaces with UX input using Figma based on the stakeholder's requirements</li> 
        <li>Develop the product's front-end where the platform uses MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS)</li> 
        <li>Write down functional test cases for development and design to refer to</li> 
        </ul>),
      showMore: false
    },
    {
      id: 3, 
      date: "Jul 2019",
      title: "Traffic Reporting System",
      img: (<img className={classes.img} src={trs1}/>),
      desc: "A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia.",
      moreDesc: (<ul>
        <li>Perform 2 job responsibilities, which are design and development.</li>
        <li>Design more than 5 user interfaces with UX input using Figma based on the client's requirements</li> 
        <li>Develop the product's front end that uses a MERN-typescript stack (MongoDB, Express TS, React TS and Node JS) with solidity to handle the blockchain functionality of the platform for an in-house software</li> 
        </ul>),
      showMore: false
    }
  ])
  
  useEffect(() => {
    window.matchMedia("(max-width: 790px)").addListener(
      e=>{
        if (e.matches) { 
          setIsSmall(true)
        } else {
          setIsSmall(false)
        }
      }
    )
  });

  const footerList = [
    {id: 1, label: "email", link: "mailto:lisnadyaz@gmail.com", icon:(<MailOutline />)}, 
    {id: 2, label: "linkedin", link: "https://www.linkedin.com/in/lisnadya/", icon:(<LinkedIn />)}];

  const menuList = [
    {id: 1, label: "contact", id: "contact"}, 
    {id: 2, label: "recent work", id: "work"}, 
    {id: 3, label: "skills", id: "skills"}];

  

  const getFooterMenuList = () => {
    return footerList.map(a =>{
      return (
        <Button key={a.id} onClick={()=>{window.open(a.link, '_blank')}} startIcon={a.icon} className={classes.footerBtn} style={{marginRight: a.label === "linkedin" ? "0" : "10px"}}>
          {a.label}
        </Button>
      )
    })
  }

  const getMenuList = () => {
    return menuList.map(a => {
      return (
        <Button key={a.id} onClick={()=>{scroll(`#${a.id}`)}} className={classes.headerBtn} style={{marginRight: a.label === "contact" ? "0" : "10px"}}>
          {a.label}
        </Button>
      )})
  }

  const getWorkPost = () => {
    return workList.map(a => {
      return (
      <Grid key={a.id} item xs={12} style={{marginBottom:"1rem"}}>
        <div className={classes.work}>
          <Grid container justify="center" alignItems="center" style={{background:"#FAFAFA", border:"0.5px solid #BBBBBB", borderRadius:"5px", marginBottom:"10px"}}>
            <Grid item xs={3} style={{borderRight:"0.5px solid #BBBBBB"}}>
              <Typography className={classes.postTime}>
                {a.date}
              </Typography>
            </Grid>
            <Grid item xs={9}>
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
            <div style={{display: a.showMore ? "block" : "none"}}>
              <Typography className={classes.fontBodyH3}>
                My Role
              </Typography>
              <Typography className={classes.fontBody} >
                {a.moreDesc}
              </Typography>
            </div>
            <Typography className={classes.fontSmall} onClick={()=> handleShowMore(a.id)}>
              { a.showMore ? "Show less." : "Show more." }
            </Typography>
          </div>
        </div>
      </Grid>
    )})
  }

  const handleShowMore = (id) => {
    const list = [...workList];
    const item = list.find(a => a.id === id);    
    item.showMore = item.showMore ? false : true;
    setworkList(list);
  }

  return (
    <div className={classes.root}>
      <AppBar id="about" position="sticky" className={classes.topBar}>
        <Toolbar variant="dense">
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={6}>
              <div style={{float:"left", background: "linear-gradient(to bottom right, #99A5D8, #FFE8EC)", height:"28px", width:"28px", margin:"0"}}>
                <Typography className={classes.fontTopPanel} style={{lineHeight:"28px", textAlign:"center"}}>
                  LN
                </Typography>
              </div>
            </Grid>
            {
              isSmall ? 
              <Grid item xs={6}>
                <MenuDrawer 
                scroll={scroll}
                classes={classes}/> 
              </Grid>
              :
              <Grid item xs={6}>
                {getMenuList()}
              </Grid>
            }
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" alignItems={"flex-start"} style={{margin:"auto", position:"relative", zIndex:"2"}}>
        <Grid container alignItems={"center"} style={{position:"relative", height:"100px"}}>
          <img style={{width:"100%", height:"100px", position:"absolute", zIndex:"1"}} src={header}/>
          <Typography className={classes.fontBodyHeader} style={{width: "100%", textAlign:"center", zIndex:"2"}}>
            <span style={{background:"#EA7779", color:"white", padding:"0 10px"}}>
              Hi, I am Lis Nadya.
            </span>
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems={"flex-start"} style={{position:"relative", padding:"20px", background:"white", borderBottom:"0.5px solid #C2C2C2"}}>
          <Grid container style={{margin:"auto", maxWidth:"460px", position:"relative"}}>
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
      {
        !isSmall ? 
        <div id="skills" className={classes.skills} style={{height:"250px"}}>
        <Grid container style={{marginBottom:"20px"}}>
          <Typography className={classes.fontBodyHeader} style={{textAlign:"left"}}>
            skills
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems="flex-start" style={{padding:"30px",minHeight:"200px", marginRight:"5px",width:"calc(50% - 5px)", float:"left", background:"#B8C5EF", borderRadius:"5px"}}>
          <Grid item xs={12}>
            <div style={{background:"#99A5D8", padding:"10px 10px 6px 10px", width:"fit-content", borderRadius:"10px", margin:"auto"}}>
                <Brush className={classes.icon}/>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.fontBody} style={{textAlign:"center"}}>
              <b>I enjoy designing</b><br/>
              UX, UI, Web, Mobile<br/>

              <b>Design tools I use</b><br/>
              Photoshop, Figma
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" style={{minHeight:"200px", padding:"20px", width:"calc(50% - 5px)", marginLeft:"5px", float:"left", background:"#FFE8EC", borderRadius:"5px"}}>
          <Grid item xs={12}>
            <div style={{background:"#DAA2AC", padding:"10px 10px 6px 10px", width:"fit-content", borderRadius:"10px", margin:"auto"}}>
                <Code className={classes.icon}/>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.fontBody} style={{textAlign:"center"}}>
              <b>Languages I speak</b><br/>
              HTML5, CSS, Javascript /Typescript, Python, PHP, SQL<br/>

              <b>Frameworks I use</b><br/>
              Angular, React JS, Bootstrap, JQuery
            </Typography>
          </Grid>
        </Grid>
      </div>
      :
      <Grid id="skills" container className={classes.skills} style={{maxWidth:"500px"}} justify="center" alignItems="center">
        <Grid item xs={12} style={{marginBottom:"20px"}}>
          <Typography className={classes.fontBodyHeader} style={{textAlign:"left"}}>
            skills
          </Typography>
        </Grid>
        <Grid container justify="flex-start" alignItems="center" style={{padding:"10px",marginBottom:"10px",background:"#B8C5EF", borderRadius:"5px"}}>
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
        <Grid container justify="flex-start" alignItems="center" style={{padding:"10px", background:"#FFE8EC", borderRadius:"5px"}}>
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
      }

      {/* My Recent Work */}
      <Grid id="work" container style={{margin:"auto", maxWidth:"500px", padding:"20px"}} justify="center" alignItems="center">
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
              {getFooterMenuList()}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Web;
