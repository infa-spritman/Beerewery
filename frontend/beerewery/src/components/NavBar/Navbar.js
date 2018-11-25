import React from 'react'

export default class Navbar extends React.Component{

    render(){
        return (
            <nav className="navbar navbar-expand navbar-dark sticky-top bg-dark">
                <ul className="navbar-nav w-100">
                    <li className="nav-item nav-link col-md-4">
                    </li>
                    <li className="nav-item nav-link col-4 text-center">
                        <a className="navbar-brand" href="#">
                            Beerewery
                        </a>
                    </li>
                    <li className="nav-item nav-link col-md-4 col-8 text-right">
                        <button type="button" className="btn btn-secondary mr-2">Login</button>
                        <button type="button" className="btn btn-secondary">Register</button>
                    </li>
                </ul>
            </nav>
        );
    }
}