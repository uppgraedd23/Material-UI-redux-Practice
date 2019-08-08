import React from 'react'
import {Drawer, MenuItem, FontIcon} from "material-ui";
import {blue500, green500, pink500, red500, yellow500} from "material-ui/styles/colors";
import {NavLink} from "react-router-dom";

export default (props) => {
    return (
        <Drawer open={props.open} docked={false} onRequestChange={(open) => props.onToggle()} >
            <MenuItem
                rightIcon={<FontIcon
                className="material-icons"
                color={green500}
                hoverColor={red500}

            >format_align_justify</FontIcon>}><NavLink to="/main">Главная</NavLink></MenuItem>

            <MenuItem rightIcon={<FontIcon
                className="material-icons"
                color={green500}
                hoverColor={red500}
            >attach_money</FontIcon>}>Цены</MenuItem>



        </Drawer>
    )
}
