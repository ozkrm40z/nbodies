import React from 'react';
import PropTypes from 'prop-types'
import {List,ListItem,TextField,Button,ListItemIcon,ListItemText,MenuItem} from '@material-ui/core';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import {useForm} from "react-hook-form"
import ReactHookFormSelect from "./ColorPicker";

const AddParticleView = ({onSubmit,colors}) =>{

    
    const {control, register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <List>
                <ListItem>                  
                    <ListItemIcon><BlurCircularIcon/></ListItemIcon>
                    <ListItemText>Add Particle</ListItemText>
                </ListItem>
                <ListItem>  
                    <TextField inputRef={register({ min: 1, max: 10 })} id="mass" name="mass" label="Mass" variant="outlined" defaultValue={3} type="number" min={0} max={10}
                        InputLabelProps={{
                        shrink: true,
                    }} />
                </ListItem>
                <ListItem>  
                    <TextField inputRef={register({ min: 0, max: 300 })} id="posx" name="posx" label="Position X" variant="outlined" defaultValue={150} type="number"
                        InputLabelProps={{
                        shrink: true,
                    }} />
                </ListItem>
                <ListItem>  
                    <TextField inputRef={register({ min: 0, max: 300 })} id="posy" name="posy" label="Position Y" variant="outlined" defaultValue={150}  type="number"
                        InputLabelProps={{
                        shrink: true,
                    }} />
                </ListItem>
                <ListItem>                      
                    <ReactHookFormSelect id="standard-select-currency-native" name="color" className={"outlined"} label="Color" control={control} defaultValue={"yellow"} variant="outlined" margin="normal">
                        {colors.map((option) => (
                            <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem>
                        ))}
                    </ReactHookFormSelect>
                </ListItem>
                <ListItem>  
                    <Button type="submit" variant="outlined" color="primary">Add</Button>
                </ListItem>
            </List>
        </form>
    );
}

AddParticleView.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired
}

export default AddParticleView;