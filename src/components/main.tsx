import { Container } from '@material-ui/core';
import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TopBar } from './TopBar'



export function Main() {
    return (
        <div>
            <BrowserRouter>
                <TopBar />
                <Container>
                    <Switch>
                        <Route path='/dashboard' >
                            Hello
                        </Route>
                        <Route path='/showallwords' >
                            Hello
                        </Route>
                        <Route path='/showlists' >
                            Hello
                        </Route>
                        <Route path='/createlist' >
                            Hello
                        </Route>
                        <Route path='/addwordtolist' >
                            Hello
                        </Route>
                        <Route path='/settings' >
                            Hello
                        </Route>
                        <Route path='/account' >
                            Hello
                        </Route>
                        <Route path='/' >
                            <Redirect to="/dashboard" />
                        </Route>
                    </Switch>
                </Container>
            </BrowserRouter>
        </div>
    )
}
