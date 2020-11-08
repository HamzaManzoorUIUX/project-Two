import React, { useEffect, useState } from 'react';
import CountrySelector from './CountrySelector'

function QueryGenerater(props) {
    const byCountryName=useState("Country Name");
    // const CountryName=useState("Country Code");
    const AllCountryName=useState({});
    useEffect(() => {
        async function getData() {
          const response = await fetch("https://api.covid19api.com/countries")
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