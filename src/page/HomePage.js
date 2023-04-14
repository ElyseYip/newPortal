import React, {useEffect, useState} from "react";
import {Container, Grid, Paper, Typography} from "@mui/material";
import NavBar from "./NavBar";
import DisplayNews from "./DisplayNews";
import {API_KEY, BUSINESS_NEWS, GENERAL_NEWS, SPORTS_NEWS, TECHNOLOGY_NEWS} from "../Apis";
import axios from "axios";
import SearchBar from "./SearchBar";

export default function HomePage() {
    const [generalNews, setGeneralNews] = useState([]);
    const [businessNews, setBusinessNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);
    const [sportNews,setSportNews] = useState([]);
    const [tab, setTab] = useState("general")
    // const [content, setContent] = useState("all")
    // const tabs = document.querySelectorAll(".tab_btn");
    //
    // tabs.forEach((tab, index) => {
    //     tab.addEventListener('click', (e) => {
    //         let line = document.querySelector(".line");
    //         line.style.width = e.target.offsetWidth + "px";
    //         line.style.left = e.target.offsetLeft + "px";
    //     })
    //
    // })

    useEffect(() =>{
        axios.get(GENERAL_NEWS + API_KEY)
            .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        setGeneralNews(response.data?.articles)
                    }
                }
            ).catch(
            console.log("error")
        )
    }, [])

    useEffect(() =>{
        axios.get(BUSINESS_NEWS + API_KEY)
            .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        setBusinessNews(response.data?.articles)
                    }
                }
            ).catch(
            console.log("error")
        )
    }, [])

    useEffect(() =>{
        axios.get(TECHNOLOGY_NEWS + API_KEY)
            .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        setTechnologyNews(response.data?.articles)
                    }
                }
            ).catch(
            console.log("error")
        )
    }, [])

    useEffect(() =>{
        axios.get(SPORTS_NEWS+ API_KEY)
            .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        setSportNews(response.data?.articles)
                    }
                }
            ).catch(
            console.log("error")
        )
    }, [])



    const newsCategories = (tab) =>{
        const newsCategory = {
            "general": generalNews,
            "business": businessNews,
            "technology": technologyNews,
            "sports": sportNews
        }
        return newsCategory[tab]
    }

    let newsFeeds = [];
    const newsCategory = newsCategories(tab)
    newsCategory.map((item) =>{
        newsFeeds.push(<DisplayNews title={item.title} content={item.description} time={item.publishedAt} image={item.urlToImage}/>)
    })


    return (
        <Grid container display="flex" flexDirection="column">
            <Grid>
                <Paper>
                    <Grid className="banner">
                        <Typography className="page-title">
                            News Portal
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>

            <Grid>
                <NavBar setTab={setTab} tab={tab}/>
            </Grid>


            <Container className="newsFeeds">
                <Grid>
                    <SearchBar/>
                </Grid>

                <Grid container display="flex" flexDirection="row">
                    {
                        newsFeeds.map((item, index) => {
                            return <Grid item xs={4} display="flex" justifyContent="center" sx={{mb: "40px"}}>
                                {item}
                            </Grid>
                        })
                    }

                </Grid>
            </Container>

        </Grid>
    )
}