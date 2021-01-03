import { Grid, makeStyles } from '@material-ui/core'
import { WordCard } from './wordCard'

const useStylesGridComponent = makeStyles({
    root: {
        paddingLeft: '20px',
        paddingRight: '20px',
        alignContent: "flex-start"
    }
});

export function Body() {
    const classes = useStylesGridComponent();

    return (
        <div>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12} sm={'auto'} >
                    <WordCard word="Card 1" definition="Card definition 1" />
                </Grid>

                <Grid item xs={12} sm={'auto'} >
                    <WordCard word="Card 2" definition="Card definition 2" />
                </Grid>

                <Grid item xs={12} sm={'auto'} >
                    <WordCard word="Card 3" definition="Card definition 3" />
                </Grid>
            </Grid>
        </div>
    )
}