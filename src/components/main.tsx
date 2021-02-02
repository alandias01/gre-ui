import { Switch, Route, useLocation } from 'react-router-dom';
import { ShowWords } from './ShowWords';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function Main() {
    let query = useQuery();
    return (
        <Switch>
            <Route path='/dashboard' >
                dashboard
            </Route>
            <Route path='/showwords' >
                <ShowWords Email={query.get("email")!} />
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
    )
}