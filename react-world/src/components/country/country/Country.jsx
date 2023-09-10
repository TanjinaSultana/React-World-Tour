import { useEffect } from "react";
import { useState } from "react";
import Countries from "./countries/Countries";

const Country = () => {
    const [country,setCountry] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    } ,[])
    return (
        <div>
            <h3>country : {country.length}</h3>
            
            {
            country.map((countries)=> {
                return(
            <Countries country={countries} key={countries.cca3}></Countries>)})
        }
        </div>
         
    );
};

export default Country;