import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (


        <nav className="navbar navbar-light sticky-md-top d-flex justify-content-around" style={{ backgroundColor: "#72AEF6", border: '2px', borderColor: 'black', borderStyle: 'solid' }}>
            <div>
                <div className="row d-none d-md-inline">
                    <h1 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>EasyTasking</h1>
                </div>
                <div className="row flex" >
                    <div className="col-12 col-sm-4 text-sm-center m-1 m-sm-0" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <Link className="btn btn-outline-dark" to="/">Home</Link>
                    </div>
                    <div className="col-12 col-sm-4 text-sm-center m-1 m-sm-0" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <Link className="btn btn-outline-dark" to="/tasks" state={{ CountrySelected: null }}>Tasks</Link>
                    </div>
                    <div className="col-12 col-sm-4 text-sm-center m-1 m-sm-0" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <Link className="btn btn-outline-dark" to="/students">Students</Link>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;