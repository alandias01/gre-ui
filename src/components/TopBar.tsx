import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Theme, Drawer, List, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
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
    },
    accountDrawer: { width: 200 },
    accountDrawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}));

export function TopBar() {
    const classes = useStylesTopBar();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawerOpen = () => setIsDrawerOpen(!isDrawerOpen);

    const [isAccountDrawerOpen, setIsAccountDrawerOpen] = useState(false);
    const toggleAccountDrawerOpen = () => setIsAccountDrawerOpen(!isAccountDrawerOpen);
    const handleDrawerClose = () => {
        isDrawerOpen && setIsDrawerOpen(false);
        isAccountDrawerOpen && setIsAccountDrawerOpen(false);
    }

    return (
        <div onClick={handleDrawerClose}>
            <AppBar position="static" className={classes.bgColor}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        GRE Tool
                    </Typography>
                    <IconButton onClick={toggleAccountDrawerOpen}>
                        <AccountIcon />
                    </IconButton>
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
            <Drawer classes={{ paper: classes.accountDrawer }} className={classes.accountDrawer} anchor={"right"} open={isAccountDrawerOpen}  >
                <div className={classes.accountDrawerHeader}>
                    <IconButton onClick={toggleAccountDrawerOpen}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItemLink to="/settings" primary="Settings" icon={<SettingsIcon />} />
                    <ListItemLink to="/account" primary="Account" icon={<LockIcon />} />
                </List>
            </Drawer>
        </div>
    );
}