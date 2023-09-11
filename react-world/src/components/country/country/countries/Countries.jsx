//import React from 'react';
import { useState } from 'react';
import './countries.css'
const Countries = ({country,handleVisited,plagVisited}) => {
   // console.log(country);
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited]  =  useState(false);
    const handle =  () => {
        //setVisited(true)
        setVisited(!visited)
    }
    const params =  () => {
        //setVisited(true)
        handleVisited(country)
    }


    return (
        <div className={`country ${visited ? "vist" :"non-visit"} `}>
            <h5 style={{color : visited ? "red" : "black"}}>name : {name?.common}</h5>
            <img src={flags.png} className='img'></img>
            <p>population: {population}</p>
            <p>{area}</p>
            <p><small>code : {cca3}</small></p>
            <button onClick={() => plagVisited(country)}>plags</button>
            <br></br>
            <button onClick={params} style={{backgroundColor: visited ? "red" : "green"}}>Mark Visited</button>
            <br></br>
            <button onClick={handle}>{visited ?"visited":"will going"}</button>
            {
                visited ? "i have visited" : "i have no money to vist"
            }
        </div>
    );
};

export default Countries;