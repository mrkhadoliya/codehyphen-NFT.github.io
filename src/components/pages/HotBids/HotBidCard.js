import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import {Card,CardHeader,Stack, CardMedia, CardContent,Avatar,IconButton,Typography, Menu, MenuItem } from '@mui/material';   
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container, Grid, Button } from '@material-ui/core'; 
import '../HotBids/HotBids.css'
import HotBid from './HotBid'; 

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const useStyles = makeStyles ((theme) => ({
    gridline: {
        width: '100%',
        gridRow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.white, 
    }, 
}));
  
export const HotBidCard = (props) => {
    const classes = useStyles (); 
 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    // Timer
    
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('October 1, 2021 00:00:00').getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime(); 
            const distance = countDownDate - now;
 
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <0) {
                //stop Timer
                clearInterval(interval.current);
            }else {
                //Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

  return ( 
        <Grid container spacing={1} className={classes.paper}> 
            <Grid item xs={12} md={12}>
                <Card className="sellercardbg" sx={{padding:'5px'}}>
                    <CardHeader sx={{padding:'5px'}}
                        avatar={
                        <Avatar alt="Travis Howard" src={props.imgtravis} /> 
                        }
                        action={
                        <IconButton aria-label="settings"
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                        } 
                    />
                     <Menu className="menubg" anchorEl={anchorEl}
                        open={open} onClose={handleClose} onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                        <MenuItem>
                            {props.shareitems}
                        </MenuItem>
                        <MenuItem>
                            {props.reportitems}
                        </MenuItem>   
                    </Menu>
                    <CardMedia sx={{borderRadius:'5px'}}
                        component="img"
                        height="160"
                        image={props.nftimgsrc}
                        alt="Paella dish"
                    />
                    <> 
                        <HotBid
                            timerDays={timerDays}
                            timerHours={timerHours}
                            timerMinutes={timerMinutes}
                            timerSeconds={timerSeconds}
                        />
                    </>
                    <CardContent sx={{padding: '0px 10px 0px 10px'}}>
                        
                        <Grid spacing={1} container display="flex" justifyContent="space-between">
                            <Grid item sx={6}>
                                <Typography alignItems="center" justifyContent="start" display="flex" height="100%" style={{padding:'0px'}} variant="subtitle1" gutterBottom component="div">
                                    <span className="discover">{props.nfttitle}</span>
                                </Typography> 
                            </Grid>
                            <Grid item sx={6}>
                                <Stack>
                                    <Button variant="text">{props.ethprice}</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid spacing={1} container justifyContent="space-between">
                            <Grid item sx={6}>
                                <Typography alignItems="center" justifyContent="start" display="flex" height="100%" style={{padding:'0px'}} size="small" gutterBottom >
                                    {props.highestbid} &nbsp; <span>{props.bidsitems}</span>
                                </Typography>
                            </Grid>
                            <Grid item sx={6}>
                                <Stack display="row">
                                    <IconButton style={{padding:'0px'}} size="small" color="secondary" aria-label="add an favorite">
                                        <FavoriteBorderIcon />&nbsp; <span>1</span>
                                    </IconButton> 
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent> 
                </Card>
            </Grid>
        </Grid> 
  );
}
