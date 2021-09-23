import React from 'react'
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import { Stack, Avatar } from '@mui/material';
import '../HotCollection/HotCollections.css'
import { CollectionData } from './CollectionData'



export const CardCarousel = (props) => {
    return (
        <>
           <Card className="card">
                <CardMedia component="img" height="120"
                    image={props.imgsrc}
                    alt="green iguana"
                />
                <CardContent sx={{paddingBottom: '0px'}}>
                    <Stack alignItems="center" className="avterimg" spacing={2}> 
                        <Avatar className="avterborder"
                            alt="Remy Sharp"
                            src={props.avtrsrc}
                            sx={{ width: 55, height: 55, }}
                        />
                        <i className={props.checkicon}></i>
                    </Stack>
                    <Typography textAlign="center" color="white" gutterBottom variant="h5" component="div">
                        <span className="discover">{props.title}</span>
                    </Typography>  
                    <Typography textAlign="center" color="white" variant="body2" gutterBottom>
                        {props.collectionprice}
                    </Typography>  
                </CardContent> 
            </Card>
        </>
    )
}
