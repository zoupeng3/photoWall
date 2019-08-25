import React from 'react';
import gif from '../static/images/loading.gif';

export default class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <img src={gif} alt="加载中..."/>
            </div>
        )
    }
}