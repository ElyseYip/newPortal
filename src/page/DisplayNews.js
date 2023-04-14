import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

export default function DisplayNews(props){
    const {
        title,
        content,
        time,
        image
    }=props

    const date = time.split("T")
    return(
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                sx={{ height: 200 }}
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {date[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Read More</Button>
            </CardActions>

        </Card>


    )
}