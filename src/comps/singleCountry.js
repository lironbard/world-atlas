import React, { useState, useEffect } from 'react';
import { getApi } from '../services/apiService';
import { Map, TileLayer } from "react-leaflet";
import { Link } from 'react-router-dom';



function SingleCountry() {
    let [ countries_ar, setAr ] = useState([]);
    useEffect(() => {
        let url = "https://restcountries.eu/rest/v2/all";
        getApi(url)
            .then(data => {

                let initContry = data.filter((item) => {
                    return (item.name) == "France" || (item.name) == "United States of America" || (item.name) == "Thailand" || (item.name) == "Israel";
                })
                setAr(initContry);
                console.log(initContry);
            })
    }, []);




    return (
        <div className="App">
            {countries_ar.map(item => {
                return (
                    <div key={item.name} className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mt-3 ">
                                <h2 className="display-4">{item.name}</h2>
                                <div>Capital: {item.capital}</div>
                                <div>Citizens: {item.population}</div>
                                <div>language: {item.languages[ 0 ].name}</div>
                                <img src={item.flag} className="w-50" />
                            </div>
                            <div className="col-lg-6 mt-5 ">
                                <Map center={[ item.latlng[ 0 ], item.latlng[ 1 ] ]} zoom={10}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                </Map>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default SingleCountry;