import React from 'react';
import {List,ListItem,ListItemIcon,ListItemText,Slider} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

const GlobalSettingsView = ({start,onchangegravity,onchangetimeinterval,gravity,timeinterval}) =>{

    const isStarted = useSelector(state=>state.settingsReducer.isStarted)

    function valuetext(value) {
        return `${value}`;
      }

    return(
        <List> 
            <ListItem> 
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText>Global Settings</ListItemText>
            </ListItem>     
            <ListItem>  
                <ListItemText>Gravity</ListItemText>
            </ListItem> 
            <ListItem>
                <Slider id="gravity" onChange={onchangegravity}  defaultValue={gravity.current} getAriaValueText={valuetext} aria-labelledby="continuous-slider" valueLabelDisplay="auto" step={gravity.step} min={gravity.min} max={gravity.max}/>
            </ListItem>
            <ListItem>  
                <ListItemText>Time Interval</ListItemText>
            </ListItem> 
            <ListItem>
                <Slider id="time-interval" onChange={onchangetimeinterval}  defaultValue={timeinterval.current} getAriaValueText={valuetext} aria-labelledby="continuous-slider" valueLabelDisplay="auto" step={timeinterval.step} min={timeinterval.min} max={timeinterval.max}/>
            </ListItem>
            <ListItem>  
                <ListItemText>Visualización</ListItemText>
            </ListItem> 
            <ListItem>
                <FormControlLabel
                    label=""
                    control={<IOSSwitch checked={isStarted} onChange={start} name="checkedB" />}                
                />
            </ListItem>
        </List>
    );
}

GlobalSettingsView.propTypes = {
    start: PropTypes.func.isRequired,
    onchangegravity: PropTypes.func.isRequired,
    onchangetimeinterval: PropTypes.func.isRequired,
    gravity: PropTypes.object.isRequired,
    timeinterval: PropTypes.object.isRequired,
}

export default GlobalSettingsView;