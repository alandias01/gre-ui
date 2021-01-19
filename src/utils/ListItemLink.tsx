import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface ListItemLinkProps {
    icon?: React.ReactElement;
    secondary?: string;
    primary: string;
    to: string;
}

export function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to, secondary } = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
                <RouterLink to={to} ref={ref} {...itemProps} />
            )),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
        </li>
    );
}