//import React from 'react';
import './countries.css'
const Countries = ({country}) => {
    console.log(country);
    const {name,flags} = country;
    
    return (
        <div className='country'>
            <img src={flags.png}></img>
            <h5>name : {name?.common}</h5>
            
        </div>
    );
};

export default Countries;