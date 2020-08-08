import React, { useState, useEffect } from 'react';
import { getApi } from '../services/apiService';
import { Link } from 'react-router-dom'
function CountryUrl(props) {

    let [ country, setCountry ] = useState(null);
    let [ notFound, setNotFound ] = useState(false);

    useEffect(() => {

        if (props.match.url.includes("country")) {
            let currentC = props.match.url.split('/');
            console.log(currentC[ 2 ]);

            let url = `https://restcountries.eu/rest/v2/name/${currentC[ 2 ]}?fullText=true`
            getApi(url)
                .then(data => {
                    if (data.status === 404) return setNotFound(true);
                    getApi('https://restcountries.eu/rest/v2/all').then(all => {
                        let borders = all.filter(item => data[ 0 ].borders.includes(item.alpha3Code));
                        borders.map(item => {
                            let index = data[ 0 ].borders.indexOf(item.alpha3Code);
                            data[ 0 ].borders[ index ] = item.name;
                        })
                        setCountry(data[ 0 ])
                    })
                })
        }
        if (props.match.url.includes("code")) {
            let currentC = props.match.url.split('/');

            let url = `https://restcountries.eu/rest/v2/alpha/${currentC[ 2 ]}`
            getApi(url)
                .then(data => {
                    if (data.status === 404) return setNotFound(true);
                    getApi('https://restcountries.eu/rest/v2/all').then(all => {
                        let borders = all.filter(item => data.borders.includes(item.alpha3Code));
                        borders.map(item => {
                            let index = data.borders.indexOf(item.alpha3Code);
                            data.borders[ index ] = item.name;
                        })
                        setCountry(data)
                    })
                })
        }

    }, [ props.match.url ])

    return (
        <div className="text-center mt-5">
            {notFound ?

                <h1>error</h1> : country ?
                    <div>
                        <div>
                            <img src={country.flag} className="w-25" />
                        </div>
                        <h4 className='display-4'>{country.name}</h4>
                        <div>Continent - {country.region}</div>
                        Borders:<span> </span>
                        {country.borders.map((item, i) => <Link to={`/country/${item}`} key={i}>{item}, </Link>)}
                        <div>Capital - {country.capital}</div>
                        <div>Coin Currency - {country.currencies[ 0 ].name}{country.currencies[ 0 ].symbol}</div>

                    </div>
                    :
                    <h1>loading</h1>

            }
        </div>
    );
}

export default CountryUrl;