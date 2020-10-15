import React from 'react';
import {Divider} from '@material-ui/core';
import GlobalSettings from '../Containers/Sidebar/GlobalSettings'
import AddParticle from '../Containers/Sidebar/AddParticle'

export default function Settings(props) {
    return(
            <div>
                <Divider />
                <GlobalSettings/>
                <Divider />
                <AddParticle/>
            </div>
        );
}