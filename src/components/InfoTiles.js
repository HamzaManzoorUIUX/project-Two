import React, { useEffect, useState } from 'react';
import Tiles from "./Tiles";
import Grid from "@material-ui/core/Grid";



function InfoTiles(props) {
    const Global=useState({})
    const Countries=useState({})
    useEffect(()=>{
        getMyData()
       async function getMyData(){
        const response=await fetch("https://api.covid19api.com/summary")
let data=await response.json()
Global[1](data["Global"])
Countries[1](data["Countries"])
       } 
    },[])
    return (
        <div>
            <Grid container spacing={3} justify={'center'}>
            {Object.keys(Global[0]).map((i,index)=>{
                return <Tiles key={index} myLabel={i} data={Global[0][i]}/>
            })}
            </Grid>
        </div>
    );
}

export default InfoTiles;