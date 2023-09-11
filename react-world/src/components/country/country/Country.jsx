import { useEffect } from "react";
import { useState } from "react";
import Countries from "./countries/Countries";
import '../country/countries/countries.css';

const Country = () => {
    const [country,setCountry] = useState([]);
    const [visitedCountry,setVisitedCountry] = useState([]);
    const [plagCountry,setPlagCountry] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    } ,[])
    const handleVisited = (country)=>{
       const newArray =[...visitedCountry,country]
setVisitedCountry(newArray);
    }
    const plagVisited = (country)=>{
       const newArray =[...plagCountry,country]
setPlagCountry(newArray);
    }
    return (
        <div >
            <h3>country : {country.length}</h3>
            <div>
                <h4>visited countries : {visitedCountry.length} </h4>
                <ul>
               {
        visitedCountry.map((country,cca3) => <li key={cca3}>{country.name?.common}</li>)
            }
                </ul>
            </div>
            <div>
                <h4>plag countries : {plagCountry.length} </h4>
                <ul>
               {
        plagCountry.map((country,idx) => <img className="img" key={idx} src={country.flags.png}></img>)
            }
                </ul>
            </div>
           <div className="country-container">
            {
            country.map((countries)=> {
                return(
            <Countries country={countries} plagVisited={plagVisited} handleVisited={handleVisited}  key={countries.cca3}></Countries>)})
        }
            </div> 
        </div>
         
    );
};

export default Country;