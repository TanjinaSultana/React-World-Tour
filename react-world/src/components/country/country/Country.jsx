import { useEffect } from "react";
import { useState } from "react";
import Countries from "./countries/Countries";
import '../country/countries/countries.css';

const Country = () => {
    const [country,setCountry] = useState([]);
    const [visitedCountry,setVisitedCountry] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    } ,[])
    const handleVisited = (country)=>{
       const newArray =[...visitedCountry,country]
setVisitedCountry(newArray);
    }
    return (
        <div >
            <h3>country : {country.length}</h3>
            <div>
                <h4>visited countries : {visitedCountry.length} </h4>
                <ul>
               {
        visitedCountry.map((country) => <li key={country.cca3}>{country.name.common}</li>)
            }
                </ul>
            </div>
           <div className="country-container">
            {
            country.map((countries)=> {
                return(
            <Countries country={countries} handleVisited={handleVisited}  key={countries.cca3}></Countries>)})
        }
            </div> 
        </div>
         
    );
};

export default Country;