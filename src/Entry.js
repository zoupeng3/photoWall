
import React from 'react';
import Header from './components/Header';
import ScrollList from './components/ScrollList';
import Loading from './components/Loading';
import Footer from './components/Footer';
import './static/styles.css';
import * as API from './API';

window.isPC = document.body.clientWidth > document.body.clientHeight;
console.log('isPC', window.isPC)

let PAGE_SIZE = 5;
if(window.isPC){
    PAGE_SIZE = 9;
}

class App extends React.Component{
    constructor(){
        super();
        // 控制请求的开关
        this.isLoading = false;
        this.state = {
            // 列表数据
            data: [],
            // 页面加载
            isPageLoading: false,
            // 正在加载下一页
            isLoadingNext: false,
            // 页面出错
            isPageError: false,
            // 加载下一页出错
            isLoadNextError: false,
            // 页码
            pageNo: 0,
        }
    }
    componentDidMount(){
        this.init()
    }
    init = () => {
        this.setState({
            isPageLoading: true,
        })
        API.getList({
            pageNo: 1,
            pageSize: PAGE_SIZE
        }).then((res)=>{
            this.setState({
                data: res.data,
                isPageLoading: false,
                pageNo: 1
            })
            console.log('第一页数据', res.data)
        }, ()=>{
            console.log('页面加载失败')
        })
    }
    onEndReached = () => {
        if(!this.isLoading){
            this.loadNext()
        }
    }
    loadNext = () => {
        const targetNo = this.state.pageNo + 1;
        this.isLoading = true;
        this.setState({
            isLoadingNext: true,
        })
        API.getList({
            pageNo: targetNo,
            pageSize: PAGE_SIZE
        }).then((res)=>{
            this.isLoading = false;
            console.log(`第${this.state.pageNo+1}页数据`, res.data)
            this.setState({
                data: this.state.data.concat(res.data),
                isLoadingNext: false,
                pageNo: targetNo
            })
        }, ()=>{
            this.isLoading = false;
            console.log('页面加载失败')
        })
    }
    renderContent(){
        if(this.state.isPageError){
            return <div>页面加载失败请刷新</div>
        } else if(this.state.isPageLoading){
            return <Loading />
        } else {
            return (
                <React.Fragment>
                    <ScrollList 
                        data={this.state.data}
                        onEndReached={this.onEndReached}
                    />
                    {this.renderListFooter()}
                </React.Fragment>
            )
        }
    }
    renderListFooter(){
        if(this.state.isLoadNextError){
            return <div>加载下一页失败</div>
        } else if(this.state.isLoadingNext){
            return <Loading />
        } else {
            return null;
        }
    }
    render = () => {
        let className = 'App';
        if(window.isPC){
            className='App PC'
        }
        return (
            <div className={className}>
                <Header />
                {this.renderContent()}
                <Footer />
            </div>
        );
    }
}

export default App;
