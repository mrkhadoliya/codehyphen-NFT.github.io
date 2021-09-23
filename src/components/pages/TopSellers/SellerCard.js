import React from 'react'
import { Card, Box, CardContent, Typography, CardMedia, Avatar, } from '@mui/material'
import SellersData from './SellersData'

export const SellerCard = (props) => {
    return ( 
            <Card className="sellercardbg" sx={{ display: 'flex', padding: '8px' }}>
                <Box display="grid" justifyContent="center" alignItems="center" height="100" marginRight="10px">
                    <Typography variant="h6" textAlign="start" color="white" component="div">
                        {props.numbercount}
                    </Typography> 
                </Box>
                <Avatar to={props.links}
                    sx={{ width: 50, height:50 }}
                    src={props.avtrsrc}
                    alt="Monica Lucas"
                />
                <i color="primary" className={props.checkicon}></i>
                <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                    <CardContent className="topbox" sx={{ flex: '1 0 auto',}}>
                        <Typography textAlign="start" component="div" color="white" variant="h6">
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" textAlign="start" color="white" component="div">
                            {props.token}
                        </Typography>
                    </CardContent> 
                </Box>
            </Card> 
    )
}
