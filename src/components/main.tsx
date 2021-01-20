import { Container } from '@material-ui/core';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopBar } from './TopBar'
import { ShowWords } from './ShowWords';


export function Main() {
    return (
        <div>
            <BrowserRouter>
                <TopBar />
                <Container style={{ marginTop: "20px" }}>
                    <Switch>
                        <Route path='/dashboard' >
                            dashboard
                        </Route>
                        <Route path='/showallwords' >
                            <ShowWords />
                        </Route>
                        <Route path='/showlists' >
                            showlists
                        </Route>
                        <Route path='/createlist' >
                            createlist
                        </Route>
                        <Route path='/addwordtolist' >
                            addwordtolist
                        </Route>
                        <Route path='/settings' >
                            settings
                        </Route>
                        <Route path='/account' >
                            account
                        </Route>
                        <Route path='/' >
                            Main
                        </Route>
                    </Switch>
                </Container>
            </BrowserRouter>
        </div>
    )
}
