import './App.css';
import React, {useState, useEffect, Suspense } from 'react';
import {IconButton, Grid, Typography, StylesProvider} from '@material-ui/core';
import {CloseRounded} from '@material-ui/icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {useStyles} from './asset/styles';
import './asset/styles.css';

import $ from 'jquery';

import trs1 from "./element/trs1.png";
import j1 from "./element/j1.png";
import p1 from "./element/p1.png";

// const Mobile = React.lazy(() => {return Promise.all([import("./component/mobile"),
//                                   new Promise(resolve => setTimeout(resolve, 1000))
//                                 ]).then(([moduleExports]) => moduleExports);});
const Web = React.lazy(() =>  {return Promise.all([import("./component/web"),
                                new Promise(resolve => setTimeout(resolve, 1000))
                              ]).then(([moduleExports]) => moduleExports);});

function App(props) {
  const classes = useStyles(props);

  const scroll = (div) =>{
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 1000);
  };

  return (
    <StylesProvider injectFirst>
      <div>
        <Suspense fallback={
          <div className="loadingScreen">
            <div className="wrapper">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <span style={{color:"#fff"}}>loading</span>
            </div>
          </div>}
        >
        
        <Web
          scroll = {scroll}
          classes={classes}
        />
        </Suspense> 
      </div>
    </StylesProvider>
  );
}

export default App;
