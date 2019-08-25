import React from 'react';
import logo from '../static/images/logo.gif';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <h1 className="header">
                <p>
                    <img src={logo} alt="logo" />
                </p>
                <span>PictureFamily</span>
            </h1>
        )
    }
}