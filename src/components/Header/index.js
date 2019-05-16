import React, { Component } from 'react';
import './style.css';

class Header extends React.Component() {
    render (){
    return (
        <div className="main">
            <div className="row">
                <div className="col s12 m9">
                    <div className="row">
                        <div className="col s12">
                            <div className="card-panel">
                                <div className="introText">
                                    <h2 className="headerText">Nick Yopko <br /> Web Developer, Editor, Digital Marketer</h2>
                                    <button id="introButton" type="button" className="btn btn-light">See my work!</button>
                                </div>
                                    <a href="#introText"><h3 id="test">Text</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Header;