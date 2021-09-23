import { Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles' 
import React from 'react'
import { HotBidCard } from './HotBidCard'
import { HotBidCarousel } from './HotBidCarousel'

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
}));

export const HotBidIndex = () => {
    
    const classes = useStyles (); 

    return (
         <main className="Hot_bids">
            <Container>
                <Grid spacing={2} container>
                    <Grid item xs={12} md={12}>
                        <div className={classes.paper}>
                            <Typography variant="h4" textAlign="start" component="h2" className="textwhite" gutterBottom>
                                <span className="discover">Hot bids </span>
                            </Typography>
                            <Typography textAlign="start" component="h2" className="textwhite" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography> 
                        </div>
                    </Grid> 
                </Grid>
             </Container>
            <Container maxWidth="xl">   
                <HotBidCarousel/> 
             </Container>
         </main>
    )
}
