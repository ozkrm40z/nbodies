import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    }
  }),
);

export default function Title(props){
    const classes = useStyles();   
    
    return(
        <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: props.open,})}>
            <Toolbar>

                <Typography variant="h6" noWrap  className={classes.title}>
                    N-Body Simulation
                </Typography>
                <IconButton color="inherit" aria-label="open drawer" onClick={props.handler} edge="end" className={clsx( props.open && classes.hide)}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}