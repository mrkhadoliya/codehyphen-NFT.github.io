import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { makeStyles} from '@material-ui/core/styles'
import SellersData from './SellersData' 
import { SellerCard } from './SellerCard'

const useStyles = makeStyles((theme) => ({
    gridtopsell: {
        width: '100%',  
    },
    paper: { 
        textAlign: 'center',
        color: theme.palette.text.white, 
    }
}))



export const TopSeller = (props) => {
    const classes = useStyles();
    return (
        <main className="mintsbgcolor">
           <Container>
               <Grid container spacing={2} className={classes.gridtopsell}>
                    <Grid item xs={12} md={12}>
                        <div className={classes.paper}>
                            <Typography textAlign="start" variant="h4" component="h2" className="textwhite" gutterBottom>
                                <span className="discover">Top Collections in 7 days</span>
                            </Typography> 
                            <Typography textAlign="start" component="h2" className="textwhite" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className={classes.paper}>
                            <SellerCard
                                numbercount={SellersData[0].numbercount}
                                avtrsrc={SellersData[0].avtrsrc}
                                title={SellersData[0].title}
                                token={SellersData[0].token}
                                checkicon={SellersData[0].checkicon}
                            /> 
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className={classes.paper}>
                            <SellerCard
                                numbercount={SellersData[1].numbercount}
                                avtrsrc={SellersData[1].avtrsrc}
                                title={SellersData[1].title}
                                token={SellersData[1].token}
                                checkicon={SellersData[1].checkicon}
                            /> 
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className={classes.paper}>
                            <SellerCard
                                numbercount={SellersData[2].numbercount}
                                avtrsrc={SellersData[2].avtrsrc}
                                title={SellersData[2].title}
                                token={SellersData[2].token}
                                checkicon={SellersData[2].checkicon}
                            /> 
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className={classes.paper}>
                            <SellerCard
                                numbercount={SellersData[3].numbercount}
                                avtrsrc={SellersData[3].avtrsrc}
                                title={SellersData[3].title}
                                token={SellersData[3].token}
                                checkicon={SellersData[3].checkicon}
                            /> 
                        </div>
                    </Grid> 
               </Grid>
           </Container>
        </main>
    )
}
