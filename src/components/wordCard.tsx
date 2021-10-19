import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStylesWordCard = makeStyles({
    root: {
        minWidth: 300,
        "@media (min-width: 600px)": { maxWidth: 300 },
        height: 200,
        borderRadius: 0,
        borderTopStyle: "solid",
        borderTopColor: "orange"
    }
});

export interface IWordCardProps {
    heading?: string,
    word: string,
    definition: string,
    type?: string,
    clickContent?: (e: IWordCardProps) => void
}

export function WordCard(props: IWordCardProps) {
    const classes = useStylesWordCard();
    const [toggleClick, setToggleClick] = useState(false);
    const showDefinition = () => props.clickContent || toggleClick;

    const handleClick = () => {
        if (props.clickContent) {
            props.clickContent({ word: props.word, definition: props.definition });
        }
        else {
            setToggleClick(x => !x);
        }
    }
    return (
        <Card className={classes.root} >
            <CardActionArea onClick={handleClick} style={{ height: 'inherit' }}>
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
                        {showDefinition() && props.definition}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}