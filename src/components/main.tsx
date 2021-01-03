import React, { useState } from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles";
import { PersistentDrawerLeft } from './persistentDrawerLeft'
const theme = createMuiTheme({
    palette: {
        type: "dark"
    },
});


export function Main() {
    return (
        <ThemeProvider theme={theme}>

        </ThemeProvider>
    )
}
