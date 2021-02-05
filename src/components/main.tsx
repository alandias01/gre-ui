import { Switch, Route, useLocation } from 'react-router-dom';
import { ShowWords } from './ShowWords';
import { ShowLists } from './ShowLists';
import { Login } from './login'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function Main() {
    let query = useQuery();
    return (
        <Switch>
            <Route path='/login' >
                <Login />
            </Route>
            <Route path='/dashboard' >
                dashboard
            </Route>
            <Route path='/showwords' >
                <ShowWords listName={query.get("listname")!} />
            </Route>
            <Route path='/showlists' >
                <ShowLists />
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
    )
}