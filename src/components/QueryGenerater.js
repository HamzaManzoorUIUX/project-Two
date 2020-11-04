import React, { useEffect, useState } from 'react';
import CountrySelector from './CountrySelector'

function QueryGenerater(props) {
    const byCountryName=useState("Country Name");
    // const CountryName=useState("Country Code");
    const AllCountryName=useState({});
    useEffect(() => {
        async function getData() {
          const response = await fetch("https://rapidapi.p.rapidapi.com/help/countries", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "008e546fa2msh8fb244dc4dc123ep10bd52jsn5656e1b6379c",
              "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
            }
          })
          let data = await response.json()
          AllCountryName[1](data)
          
        }
        getData()
      }, [])
    return (
        <div>
            <CountrySelector queryState={byCountryName} mylabel={'By_Country_Name'} CountryValue={AllCountryName[0]}/>
            {byCountryName[0]}
        </div>
    );
}

export default QueryGenerater;