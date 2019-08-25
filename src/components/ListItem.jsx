import React from 'react';

export default class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const {url, title} = this.props.data;
        return(
            <div>
                <span>{title}</span>
                <img src={url} alt={title} />
            </div>
        )
    }
}