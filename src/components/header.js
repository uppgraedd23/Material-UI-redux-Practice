import React, {Fragment, useState} from 'react'
import { withRouter } from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import {cyan300, indigo700, lightGreenA700} from "material-ui/styles/colors";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';

import {blue500, green500, pink500, red500, yellow500, lime50} from "material-ui/styles/colors";
import {NavLink} from "react-router-dom";

export default withRouter(({history}) => {
    const [isDrawer, setIsDrawer] = useState(false);

    const RightMenu = () => (
        <IconMenu style={{color: lime50}}
        iconButtonElement={
            <IconButton >
                <MoreVertIcon color={lime50} />
            </IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem onClick={()=> {localStorage.setItem('isLogin', ''); history.push('/login')}} primaryText="logout"/>
        </IconMenu>
    );

    return (<Fragment>
        <AppBar
            title=""
            style={{background: cyan300}}
            iconElementRight={<RightMenu />}
            onLeftIconButtonClick={() => setIsDrawer(true)}
        />

        <Drawer open={isDrawer} docked={false} onRequestChange={() => setIsDrawer(false)}>
            <MenuItem rightIcon={<FontIcon className="material-icons" color={green500} hoverColor={red500} >format_align_justify</FontIcon>}><NavLink to="/">Главная</NavLink></MenuItem>
            <MenuItem rightIcon={<FontIcon className="material-icons" color={green500} hoverColor={red500} >format_align_justify</FontIcon>}><NavLink to="/price">Цены</NavLink></MenuItem>
        </Drawer>
    </Fragment>)
})
