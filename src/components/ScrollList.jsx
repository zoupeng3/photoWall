import React from 'react';
import ListItem from './ListItem';
import {getScrollTop, getWindowHeight, getScrollHeight} from '../utils/scroll';

export default class ScrollList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        const onEndReached = this.props.onEndReached;
        // 单位px
        const onEndReachedThreshold = this.props.onEndReachedThreshold || 20;
        //页面滚动至视口高度+页面Y轴滚动距离大于文档总高度 - onEndReachedThreshold时触发ajax事件  
        window.onscroll = function() {　　
            if (getScrollTop() + getWindowHeight() >= getScrollHeight() - onEndReachedThreshold) {　
                typeof onEndReached === 'function' && onEndReached();
            } 
        } 
    };

    render(){
        return(
           <div>
               {
                   this.props.data.map((item, index)=>{
                       return <ListItem key={index} data={item} />
                    })
                }
           </div>
        )
    }
}