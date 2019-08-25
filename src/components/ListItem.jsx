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
            <div className='list-item'>
                <img src={url} alt={title} />
                <span>{title}</span>
            </div>
        )
    }
}