import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStylesWordCard = makeStyles({
    root: {
        minWidth: 300,
        maxWidth: 300,
        height: 200,
        borderRadius: 0,
        borderTopStyle: "solid",
        borderTopColor: "orange"
    }
});

interface IWordCardProps {
    heading?: string,
    word: string,
    definition: string,
    type?: string
}

export function WordCard(props: IWordCardProps) {
    const classes = useStylesWordCard();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {props.heading}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.word}
                </Typography>
                <Typography color="textSecondary">
                    {props.type}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.definition}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}