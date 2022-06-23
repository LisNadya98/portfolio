import '../App.css';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import MenuDrawer from './menu';
import {Button, 
  Toolbar,
  AppBar, 
  Grid,
  Typography,
  Tabs, 
  Tab,
  Box, 
  Link
} from '@material-ui/core';
import {Brush, Code, LinkedIn, MailOutline, Chat, Computer} from '@material-ui/icons';
import '../asset/styles.css';

import me from "../element/me.png";
import j1 from "../element/j1.png";
import p1 from "../element/p1.png";
import trs1 from "../element/trs1.png";
import favicon from "../element/favicon.png";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div style={{marginTop: "-5px"}}>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Web(props) {
  const {classes, scroll} = props
  const [isSmall, setIsSmall] = useState( window.matchMedia("(max-width: 790px)").matches );
  const [value, setValue] = React.useState(0);
  const [menuValue, setMenuValue] = React.useState(0);

  const menuList = [
    {id: 0, label: "Introduction", link: "about"},
    {id: 1, label: "Skills", link: "skills"},
    {id: 2, label: "Work Experience", link: "experience"},
    {id: 3, label: "Projects", link: "projects"},
    {id: 4, label: "Contact", link: "contact"}
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuChange = (event, newValue) => {
    setMenuValue(newValue);
  };
  
  const workList = [
    {
      id: 1, 
      date: "Apr 2021",
      title: "PixiPixi",
      role: "Design & Development",
      tech: "Typescript, React JS, Node JS, MongoDB",
      img: (<img className={`${classes.img} ${!isSmall && classes.imgSmall}`} src={p1} alt="PixiPixi"/>),
      desc: "A proof of concept marketplace using NFT (Non-fungible Token) and Blockchain technology.",
      moreDesc: (<ul>
        <li>Performed 2 job responsibilities, which are design and development.</li>
        <li>Designed more than 5 user interfaces with UX input using Figma based on the client's requirements</li> 
        <li>Developed the product's front end that uses a MERN-typescript stack (MongoDB, Express TS, React TS and Node JS) with solidity to handle the blockchain functionality of the platform for an in-house software</li> 
        </ul>),
      showMore: false
    },
    {
      id: 2, 
      date: "Apr 2021",
      title: "Jamit!",
      role: "Design & Development",
      tech: "Javascript, React JS, Node JS, MongoDB",
      img: (<img className={`${classes.img} ${!isSmall && classes.imgSmall}`} src={j1} alt="Jamit"/>),
      desc: "A card-based web platform for the creative industry for education and entertainment purposes.",
      moreDesc: (<ul>
        <li>Performed 3 job responsibilities, which are design, development and testing.</li>
        <li>Designed more than 30 user interfaces with UX input using Figma based on the stakeholder's requirements</li> 
        <li>Developed the product's front-end where the platform uses MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS)</li> 
        <li>Wrote down functional test cases for development and design to refer to</li> 
        </ul>),
      showMore: false
    },
    {
      id: 3, 
      date: "Jul 2019",
      title: "Traffic Reporting System",
      role: "Design & Development",
      tech: "WAMP, Javascript, JQuery, HTML5/CSS",
      img: (<img className={`${classes.img} ${!isSmall && classes.imgSmall}`} src={trs1} alt="Traffic Reporting System"/>),
      desc: "A proof of concept product built for my Final Year Project to digitalize the process of reporting traffic accidents in Malaysia.",
      moreDesc: (<ul>
        <li>Designed the system's architecture and optimal userflows based on the requirements found from the background study research</li> 
        <li>Developed the platform end  to end using WAMP stack (Windows, Apache, MySQL and PHP) with Javascript, JQuery, HTML5 and CSS</li> 
        </ul>),
      showMore: false
    }
  ];

  const expList = [
    {
      id: 0,
      company: "Avanade",
      role: "Analyst, Front End Developer", 
      period: "May 2021 - Ongoing",
      desc: (
        <ul>
          <li>Involved in Accenture NewsPage distribution management system that serves over 3 large clients</li>
          <li>Maintained and enhanced more than 20 modules on the front end application using Angular framework</li>
          <li>Developed more than 5 modules based on the requirements given by the clients</li>
          <li>Responsible in debugging more than 50 issues raised by QA testers and UAT</li>
        </ul>
      )
    },
    {
      id: 1,
      company: "SEAM LLC",
      role: "Front End / UX Developer", 
      period: "March 2020 - April 2021",
      desc: (
        <ul>
          <li>Involved with an in-house software development by designing more than 30 user interfaces with UX input using
          Figma based on stakeholder's requirements and implemented them using React JS framework
          </li>
          <li>Wrote down more than 30 functional test cases for development and design to refer to using Excel</li>
        </ul>
      )
    },
    {
      id: 2,
      company: "Juris Technologies",
      role: "Intern, Software Engineer", 
      period: "April 2019 - June 2019",
      desc: (
        <ul>
          <li>Involved in a project team that serves one of the largest banking groups in Malaysia</li>
          <li>Maintained 2 technical documents for the team to refer to</li>
          <li>Performed troubleshooting and maintainence using PHP and DB2 SQL for an in-house fintech software project</li>
          <li>Managed the product’s version control in Mercurial</li>
        </ul>
      )
    }
  ]

  const skill = {
    title: "Skills",
    skillList: [
      {
        id: 1, 
        icon: (<Brush className={classes.icon}/>),
        desc: [
        {
          id: 1, 
          title: "I enjoy designing",
          desc: "UI/UX, Web, Mobile" },
        {
          id: 2, 
          title: "Design tools I use",
          desc: "Photoshop, Figma"
        }]
      },
      {
        id: 2, 
        icon: (<Code className={classes.icon}/>),
        desc: [
        {
          id: 1, 
          title: "Languages I speak",
          desc: "Javascript/Typescript, HTML5/CSS, Python, PHP, SQL",
        },
        {
          id: 2, 
          title: "Frameworks I use",
          desc: "Angular, React JS, Bootstrap, JQuery"
        }]
      },
      {
        id: 3, 
        icon: (<Chat className={classes.icon}/>),
        desc: [
        {
          id: 1, 
          title: "I am fluent in",
          desc: "English, Malay",
        }]
      }
    ]
  }

  const footerList = [
    {id: 1, label: "Email", link: "mailto:lisnadyaz@gmail.com", icon:(<MailOutline />)}, 
    {id: 2, label: "LinkedIn", link: "https://www.linkedin.com/in/lisnadya/", icon:(<LinkedIn />)}];

    useEffect(() => {
      window.matchMedia("(max-width: 800px)").addListener(
        e=>{
          if (e.matches) { 
            setIsSmall(true)
          } else {
            setIsSmall(false)
          }
        }
      )
    });
  
  const getSkills = () => {
    return (
        <Grid container style={{margin:"auto", maxWidth:"1200px", padding:"0 20px"}}>
          <Grid container className={`${classes.header} reveal`}>
            <Typography className={classes.fontBodyH2} style={{textAlign:"left"}}>
            <span className={classes.numberHighlight}>01.</span> {skill.title}
            </Typography>
          </Grid>
          {
            skill.skillList.map(a =>{
              return (
                <Grid item xs={4} key={a.id} className={`reveal`}>
                  <Grid container  className={classes.skillList}>
                    <Grid item xs={12} style={{marginBottom: "10px"}} >
                      {a.icon}
                    </Grid>
                    <Grid item xs={12} style={{height: "200px"}}>
                      <Typography className={classes.fontBody} style={{textAlign:"left"}}>
                        {
                          a.desc.map(b =>{
                            return (
                              <span key={b.id}>
                                <b style={{color:"white"}}>{b.title}</b>
                                <br/>
                                {b.desc}
                                <br/><br/>
                              </span>
                            )
                          })
                        }
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })
          }
      </Grid>
    )
  }

  const getSmallSkills = () => {
    return (
        <>
          <Grid container className={classes.header}>
            <Typography className={`${classes.fontBodyH2} reveal`} style={{textAlign:"left"}}>
            <span className={classes.numberHighlight}>01.</span> {skill.title}
            </Typography>
          </Grid>
          {
            skill.skillList.map(a =>{
              return (
                <Grid container justify="flex-start" alignItems="center" className={`${classes.skillList} reveal`} style={{padding:"10px",marginBottom:"10px", borderRadius:"5px"}}>
                  <div style={{width:"80px"}}>
                    <div style={{padding:"10px 10px 6px 10px", width:"fit-content", borderRadius:"10px", margin:"auto"}}>
                        {a.icon}
                    </div>
                  </div>
                  <div style={{width:"calc(100% - 80px)"}}>
                  <Typography className={classes.fontBody} style={{textAlign:"left"}}>
                      {
                        a.desc.map(b =>{
                          return (
                            <span>
                              <b style={{color:"white"}}>{b.title}</b>
                              <br/>
                              {b.desc}
                              <br/>
                            </span>
                          )
                        })
                      }
                  </Typography>
                </div>
              </Grid>
              )
            })
          }
      </>
    )
  }

  const getFooterMenuList = () => {
    return <Grid container spacing={isSmall ? 1 : 0} style={{margin: isSmall ? "10px 0 0 0" : "0 0 0 10px"}} justify="flex-end">
      {footerList.map(a =>{
        return (
          <Grid item xs={isSmall ? 6 : 12} key={a.id}>
            <Button onClick={()=>{window.open(a.link, '_blank')}} startIcon={a.icon} className={classes.footerBtn} style={{marginRight: isSmall && a.label !== "linkedin" ? "10px" : "0"}}>
              {a.label}
            </Button>
          </Grid>
        )
      })}
    </Grid>
  }

  const getMenuList = () => {
    return menuList.map(a => {return (
    <>
      <Link key={a.id} onClick={()=>{scroll(`#${a.link}`)}} style={{textDecoration: "none"}} className={`${classes.menuButton} border`}> 
        {a.label} 
      </Link> 
      {a.id !== menuList.length - 1 && <span className={classes.highlight}> / </span>}
    </>) } )
  }

  const getWorkPost = () => {
    return workList.map(a => {
      return (
      <Grid key={a.id} className={`reveal`}  item xs={isSmall ? 12 : 4} style={{marginBottom:isSmall ? "1rem" : "0"}}>
        <div className={classes.work}>
          <div style={{marginRight:isSmall ? "0" : "20px"}}>
            <div style={{position:"relative"}}>
              <Grid container justify="center" alignItems="center" className={classes.postDescBg}>
                <Grid item className={`${classes.postDesc} ${!isSmall && classes.postDescBgSmall}`}>{a.desc}</Grid>
              </Grid>
              {a.img}
            </div>
            <div style={{height:"auto", marginTop: "20px"}}>
              <Typography className={classes.fontBodySmall} >
                {a.role}
              </Typography>
              <Typography className={classes.postHeader}>
                {a.title}
              </Typography>
            </div>
          </div>
        </div>
      </Grid>
    )})
  }

  const downloadResume = () => {
    const filePath = `${process.env.PUBLIC_URL}/resume.pdf`;
    var link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.topBar}>
        <Toolbar variant="dense">
          <Grid container justify="center" alignItems="center" style={{maxWidth:"1200px", margin:"auto"}}>
            <Grid item xs={3}>
              <div style={{float:"left", height:"40px", width:"40px"}}>
                <img src={favicon} style={{width:"100%"}} alt="logo"/>
              </div>
            </Grid>
            {
              isSmall ? 
              <Grid item xs={9}>
                <MenuDrawer 
                menu={menuList}
                scroll={scroll}
                classes={classes}/> 
              </Grid>
              :
              <Grid container xs={9} justify="flex-end">
                {getMenuList()}
              </Grid>
            }
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid id="about" justify="center" alignItems="center"   container style={{width:"100%", position:"relative", background:"#171717"}}>
        <Grid container justify="center" alignItems="center"  style={{maxWidth:"1200px", padding:"50px 20px"}}>
          <Grid item xs={isSmall ? 12 : 6}>
            <Typography className={`${classes.fontBodyHeader}`} style={{textAlign:"left", width:"fit-content"}}>
              Hello,<br/>I’m a <span className={`${classes.highlight} typing`}>Frontend Developer</span>
            </Typography>
            <Typography className={`${classes.fontBody} ${classes.grey}`} style={{textAlign:"left"}}>
              <br/>
              My name’s Lis Nadya and I’m based in Malaysia with over 2 years of experience in creating, optimizing and maintaining software applications. 
              I also love playing games and <Link className={classes.link} onClick={()=>{window.open("https://www.instagram.com/echoarte/", '_blank')}}>draw</Link> during my free time!
            </Typography>
            <Button onClick={()=>{downloadResume()}} className={classes.footerBtn} style={{width:"fit-content", marginTop:"20px"}}>
              Download My Resume
            </Button>
          </Grid>
          {
            !isSmall && 
            <>
              <Grid item xs={2}></Grid> 
              <Grid item xs={4}>
                <img className="headerImg" src={me} alt="Header"/>
              </Grid> 
            </>
          }
        </Grid>
      </Grid>
      
      {/* Skills */}
      {
        !isSmall ? 
        <Grid container justify="center" alignItems={"center"} id="skills" className={classes.skills}>
          {getSkills()}
        </Grid>
      :
        <Grid id="skills" container className={classes.skills} style={{maxWidth:"1200px", padding:"50px 20px"}} justify="center" alignItems="center">
          {getSmallSkills()}
        </Grid>
      }

      <Grid id="experience"  container style={{width:"100%", background:"#171717"}}>
        <Grid container style={{margin:"auto", maxWidth:"1200px", padding:"50px 20px"}} justify="center" alignItems="flex-start">
          <Grid container className={classes.header}>
            <Typography className={`${classes.fontBodyH2} reveal`} style={{textAlign:"left"}}>
            <span className={classes.numberHighlight}>02.</span> Work Experience
            </Typography>
          </Grid>
          <Grid container className="reveal" >
            <Grid item xs={isSmall ? 12 : 4}>
              <Tabs orientation={isSmall ? "horizontal" : "vertical"} style={{height: isSmall ? "0" : "224px", marginRight:isSmall ? "0" : "40px"}} variant="scrollable" value={value} TabIndicatorProps={{style: {background:'#EE684B'}}} onChange={handleChange}>
                {
                  expList.map(a => {return (<Tab style={{color:"white", fontSize:"12px", minWidth: "50px", minHeight:"0", marginBottom:"10px", marginRight:"20px"}} key={a.id} label={isSmall ? `0${a.id + 1}.`: a.company } {...a11yProps(a.id)} />)})
                }
              </Tabs>
            </Grid>
            <Grid item xs={isSmall ? 12 : 8}>
            {
              expList.map(a => {return (
                <TabPanel key={a.id} value={value} index={a.id}>
                  <Typography className={classes.fontBodyH3} style={{textAlign:"left"}}>
                    {a.role} 
                  </Typography>
                  <Typography className={classes.fontBodyH4} style={{textAlign:"left"}}>
                    {a.company} 
                  </Typography>
                  <Typography className={classes.postTime} style={{textAlign:"left"}}>
                    {a.period}
                  </Typography>
                  <Typography className={classes.fontBody} style={{color:"white", textAlign:"left"}}>
                    {a.desc}
                  </Typography>
                </TabPanel>
              )})
            } 
            </Grid>
          
          </Grid>
        </Grid>
      </Grid>
      <Grid id="projects"  container style={{width:"100%"}}>
        <Grid container style={{margin:"auto", maxWidth:"1200px", padding:"50px 20px"}} justify="center" alignItems="center">
          <Grid container className={`${classes.header} reveal`}>
            <Typography className={classes.fontBodyH2} style={{textAlign:"left"}}>
            <span className={classes.numberHighlight}>03.</span> Projects
            </Typography>
          </Grid>
          {/* List of Works */}
          <Grid container justify="center" alignItems="center">
          {getWorkPost()}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid id="contact" container style={{width: "100%", padding:"50px 0", background: "#171717"}} alignItems="center">
        <Grid container style={{maxWidth: "1200px", margin: "auto", padding: "0 20px"}}>
          <Grid container className={classes.header}>
            <Typography className={classes.fontBodyH2} style={{textAlign:"left"}}>
            <span className={classes.numberHighlight}>04.</span> Contact
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={!isSmall ? 10 : 12} className={!isSmall && classes.footerDesc}>
              <Typography className={classes.fontBody} style={{textAlign:"left"}}>
                If you want to get in touch, talk to me about a project collaboration or just say hi,
                do send me an email or a message via
              </Typography>
            </Grid>
            <Grid item xs={!isSmall ? 2 : 12} style={{maxWidth:isSmall && "calc(100% - 10px)"}}>
              {getFooterMenuList()}
            </Grid>
          </Grid>
        </Grid>
        </Grid>
    </div>
  );
}

export default Web;
