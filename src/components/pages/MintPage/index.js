import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Container, Grid, Paper, Typography, Button} from '@material-ui/core' 
import '../MainPage/index.css' 
import { WalletBox } from './WalletBox'
import SellNFTData from './SellNFTData'

const useStyles = makeStyles((theme) => ({
    grid: {
        width:'100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.white, 
    }
}))

export default function CenteredGrid() {  
    const classes = useStyles(); 
    return (
        <main className="mintsbgcolor">
            <Container>
                <Grid container spacing={2} className={classes.grid}> 
                    <Grid item xs={12} md={4}>
                        <WalletBox 
                         checkicon={SellNFTData[0].checkicon}
                         boxheading={SellNFTData[0].boxheading}
                         title={SellNFTData[0].title} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <WalletBox 
                         checkicon={SellNFTData[1].checkicon}
                         boxheading={SellNFTData[1].boxheading}
                         title={SellNFTData[1].title} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <WalletBox 
                         checkicon={SellNFTData[2].checkicon}
                         boxheading={SellNFTData[2].boxheading}
                         title={SellNFTData[2].title} />
                    </Grid>
                     
                </Grid>
            </Container>
        </main>
    )
}
