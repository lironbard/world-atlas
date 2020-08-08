import React, { useEffect } from 'react';
import { getApi } from './services/apiService';


function ItemCountry() {
    useEffect = () => {
        let url = "https://restcountries.eu/rest/v2/all"
        getApi(url)
            .then(item => {
                console.log("kkk");
            })

    }
    return (
        <div className="App">

        </div>
    );
}

export default ItemCountry;