import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import $ from 'jquery';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  listText:{
    fontFamily:"Quicksand, sans-serif",
    fontSize:"1rem",
    color:"#282A33"
  }
});


const scroll = (div) =>{
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 1000);
  }


export default function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={()=>scroll("#about")}>
            <ListItemText className={classes.listText} primary={"ABOUT"} />
        </ListItem>
        <ListItem button onClick={()=>scroll("#skills")}>
            <ListItemText className={classes.listText} primary={"SKILLS"} />
        </ListItem>
        <ListItem button onClick={()=>scroll("#work")}>
            <ListItemText className={classes.listText} primary={"WORK"} />
        </ListItem>
        <ListItem button onClick={()=>scroll("#contact")}>
            <ListItemText className={classes.listText} primary={"CONTACT"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <IconButton style={{padding:"0.5rem", float:"right"}} onClick={toggleDrawer("left", true)}><MenuIcon/></IconButton>
        <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
        {list("left")}
        </Drawer>
    </div>
  );
}