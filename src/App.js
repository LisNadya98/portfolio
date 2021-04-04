import './App.css';
import React, {useState, useEffect, Suspense } from 'react';
import {IconButton, 
  Grid,
  Typography} from '@material-ui/core';
import {CloseRounded} from '@material-ui/icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {useStyles} from './asset/styles';
import './asset/styles.css';

import $ from 'jquery';

import trs1 from "./element/trs1.png";
import j1 from "./element/j1.png";
import p1 from "./element/p1.png";

const Mobile = React.lazy(() => import('./component/mobile'));
const Web = React.lazy(() => import('./component/web'));

function App(props) {
  const classes = useStyles(props);
  const [openModal, setOpenModal] = useState(0);
  const [isSmall, setIsSmall] = useState( window.matchMedia("(max-width: 790px)").matches );
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);
  
  const workContent = [
    {
      img: (<img className={classes.modalImg} src={trs1}/>),
      title: "Traffic Reporting System",
      description: (<>A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia. The product was developed for 2 potential users: police officers and motor vehicle drivers. <br/><br/>
                      The purpose of this development is to reduce the time taken of filing a traffic accident report, allow drivers to have online access to the final report’s documentation, receive police summons and pay them online, and provide a platform to improve managing submitted reports as opposed to the manual procedure. I achieved an A for this course.<br/><br/>
                      For the purpose of FYP demo, integration with Google Maps and third party sms API to achieve platform's design and to allow users to save time reporting.
                    </>),
      role: (<ul>
        <li>Designed the system's architecture and optimal userflows based on the requirements found from the background study research</li> 
        <li>Developed the platform end  to end using WAMP stack (Windows, Apache, MySQL and PHP) with Javascript, JQuery, HTML5 and CSS</li> 
        </ul>),
      date: "July 2019"
    },
    {
      img: (<img className={classes.modalImg} src={j1}/>),
      title: "Jamit!",
      description: (<>Currently involved in the early stages of the product for a card-based in-house web platform related to the creative industry for story-writing, education and entertainment purposes under Shared Experience Art Machine.</>),
      role: (<ul>
        <li>Perform 3 job responsibilities, which are design, development and testing.</li>
        <li>Design more than 30 user interfaces with UX input using Figma based on the stakeholder's requirements</li> 
        <li>Develop the product's front-end where the platform uses MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS)</li> 
        <li>Write down functional test cases for development and design to refer to</li> 
        </ul>),
      date: "Ongoing"
    },
    {
      img: (<img className={classes.modalImg} src={p1}/>),
      title: "PixiPixi",
      description: (<>A proof of concept marketplace using NFT (Non-fungible Token) and Blockchain technology. Currently involved since the early stages of the product.</>),
      role: (<ul>
        <li>Perform 2 job responsibilities, which are design and development.</li>
        <li>Design more than 5 user interfaces with UX input using Figma based on the client's requirements</li> 
        <li>Develop the product's front end that uses a MERN-typescript stack (MongoDB, Express TS, React TS and Node JS) with solidity to handle the blockchain functionality of the platform for an in-house software</li> 
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
  };


  const modal = (i) =>{
    return (
        <div className={isSmall ? classes.paperSmall : classes.paper}>
          <Grid container justify="center" alignItems="center" className={classes.modalSection} style={{borderBottom:"1px solid #C4C4C4"}}>
            <Grid item xs={8}>
              <Typography className={classes.fontBodyH3} style={{textAlign:"left", margin:"0"}}>
                {workContent[i].title}
              </Typography>

            </Grid>
            <Grid item xs={4}>
              <IconButton  style={{padding:"0.5rem", float:"right"}} onClick={()=>handleClose()}>
                <CloseRounded/>
              </IconButton>
            </Grid>
          </Grid>
          <div className={isSmall ? classes.paperContentSmall : classes.paperContent} >
            <div style={{textAlign:'center', marginBottom:"1rem"}}>
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
  };

  useEffect(() => {
    window.matchMedia("(max-width: 790px)").addListener(
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
    <div>
      <Suspense fallback={
        <div class="loadingScreen">
          <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <span>Loading</span>
          </div>
        </div>}
      >
      {isSmall ? 
        
        <Mobile 
          workContent={workContent}
          scroll = {scroll}
          handleClose={handleClose}
          handleOpen={handleOpen}
          classes={classes}
          open={open}
          modal={modal}
          openModal={openModal}
        />
        :
        <Web
          workContent={workContent}
          scroll = {scroll}
          handleClose={handleClose}
          handleOpen={handleOpen}
          classes={classes}
          open={open}
          modal={modal}
          openModal={openModal}
        />}
      </Suspense> 
    </div>
  );
}

export default App;
