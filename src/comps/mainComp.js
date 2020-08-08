import React from 'react';
import Navbar from './nav';
import SingleCountry from './singleCountry';
import { Route, Switch } from 'react-router-dom'
import CountryUrl from './countryUrl';



function MainComp() {
    return (
        <div>
            <Navbar />

            <Switch>
                <Route exact path="/" component={SingleCountry} />
                <Route exact path="/country/:country" component={CountryUrl} />
                <Route exact path="/code/:code" component={CountryUrl} />
            </Switch>

        </div>
    );
}

export default MainComp;