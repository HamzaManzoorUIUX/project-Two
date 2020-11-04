import React, { useEffect, useState } from 'react';

function InfoTiles(props) {
    const information=useState({})
    useEffect(()=>{
        getMyData()
       async function getMyData(){
        const response=await fetch("https://rapidapi.p.rapidapi.com/totals", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "008e546fa2msh8fb244dc4dc123ep10bd52jsn5656e1b6379c",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
            }
        })
let data=await response.json()
information[1](data[0])
console.log(information[0]);
       } 
    },[])
    return (
        <div>
            {information[0]>0?Object.keys(information[0]).map(i=>{
                return i
            }):<div> Nodata</div>}
        </div>
    );
}

export default InfoTiles;