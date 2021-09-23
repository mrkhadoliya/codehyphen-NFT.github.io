import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import '../HotCollection/HotCollections.css' 
import { HotCarousel } from './HotCarousel' 

const useStyles = makeStyles ((theme) => ({
    gridline: {
        width: '100%',
        gridRow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.white, 
    }, 
}))
  
export const HotCollections = () => {

    const classes = useStyles ();
 

    return (
        <main className="hotcollectionbg">
            <Container>
                <Grid spacing={2} container className={classes.gridline}>
                    <Grid item xs={12} md={12}>
                        <div className={classes.paper}>
                            <Typography textAlign="start" variant="h4" component="h2" className="textwhite" gutterBottom>
                                <span className="discover">Hot Collections</span>
                            </Typography>
                            <Typography textAlign="start" component="h2" className="textwhite" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography> 
                        </div>
                    </Grid> 
                </Grid>
            </Container>
            <Container maxWidth="lg">
                <Grid spacing={2} container className={classes.Hot}> 
                    <Grid item xs={12} md={12}>
                        <HotCarousel />
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}
