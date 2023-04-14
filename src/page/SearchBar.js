import React from "react";
import {Grid} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <Grid container display="flex" justifyContent="flex-end" alignItems="center">
            <Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center" sx={{mb:"50px", mr:"20px"}}>
                <input type="text" placeholder="Search" className="search-input"/>
                <button className="search-button">
                    <SearchIcon />
                </button>
            </Grid>
        </Grid>
    )
}