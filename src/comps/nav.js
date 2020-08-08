import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useRef } from 'react';


function Navbar() {
    let history = useHistory();
    let myInput = useRef(null);
    const search = () => {
        if (myInput.current.value === "") return alert("must enter value")
        if (myInput.current.value.length <= 3) {
            history.push(`/code/${myInput.current.value}`)
        }
        else {
            history.push(`/country/${myInput.current.value}`)
        }
    }
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand text-primary">Countries Encyclopedia</Link>

                <div className="collapse navbar-collapse bg-light" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/code/isr">Israel</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/code/usa">USA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/code/th">Thailand</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/code/fr">France</Link>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" ref={myInput} />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={search}>Search</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;