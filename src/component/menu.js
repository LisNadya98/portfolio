import React from 'react';
import clsx from 'clsx';
import {Divider, List, ListItem, ListItemText, IconButton, Drawer} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import $ from 'jquery';



export default function MenuDrawer(props) {
  const {classes, scroll} = props;
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
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
        <ListItem button onClick={()=>scroll("#skills")}>
            <ListItemText className={classes.listText} primary={"Skills"} />
        </ListItem>
        <Divider/>
        <ListItem button onClick={()=>scroll("#work")}>
            <ListItemText className={classes.listText} primary={"Work"} />
        </ListItem>
        <Divider/>
        <ListItem button onClick={()=>scroll("#contact")}>
            <ListItemText className={classes.listText} primary={"Contact"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <IconButton style={{padding:"0.5rem", float:"right"}} onClick={toggleDrawer("top", true)}>
          <Menu className={classes.menuIcon}/>
        </IconButton>
        <Drawer anchor="top" open={state["top"]} onClose={toggleDrawer("top", false)}>
        {list("top")}
        </Drawer>
    </div>
  );
}