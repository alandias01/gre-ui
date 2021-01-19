import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Theme, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ListItemLink } from '../utils/ListItemLink';

const useStylesTopBar = makeStyles((theme: Theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    bgColor: {
        background: 'black'
    },
    drawer: { width: 250 },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}));

export function TopBar() {
    const classes = useStylesTopBar();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawerOpen = () => setIsDrawerOpen(!isDrawerOpen);


    return (
        <div>
            <AppBar position="static" className={classes.bgColor}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        GRE Tool
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer classes={{ paper: classes.drawer }} className={classes.drawer} anchor={"left"} open={isDrawerOpen}  >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawerOpen}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItemLink to="/dashboard" primary="Dashboard" />
                    <ListItemLink to="/showallwords" primary="Show All Words" />
                    <ListItemLink to="/showlists" primary="Show Lists" />
                    <Divider />
                    <ListItemLink to="/createlist" primary="Create List" />
                    <ListItemLink to="/addwordtolist" primary="Add to List" />

                </List>
            </Drawer>
        </div>
    );
}