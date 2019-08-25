
import React from 'react';
import Header from './components/Header';
import ScrollList from './components/ScrollList';
import Footer from './components/Footer';
import * as API from './API';

const PAGE_SIZE = 10;

class App extends React.Component{
    constructor(){
        super();
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
        }, ()=>{
            console.log('页面加载失败')
        })
    }
    onEndReached(){
        this.loadNext()
    }
    loadNext = () => {
        const targetNo = this.state.pageNo + 1;
        API.getList({
            pageNo: targetNo,
            pageSize: PAGE_SIZE
        }).then((res)=>{
            this.setState({
                data: this.state.data.concat(res.data),
                isLoadingNext: false,
                pageNo: targetNo
            })
        }, ()=>{
            console.log('页面加载失败')
        })
    }
    renderContent(){
        if(this.state.isPageError){
            return <div>页面加载失败请刷新</div>
        } else if(this.state.isPageLoading){
            return <div>页面加载中...</div>
        } else {
            return (
                <React.Fragment>
                    <ScrollList 
                        data={this.state.data}
                        onEndReached={this.onEndReached}
                    />
                    {this.renderListFooter}
                </React.Fragment>
            )
        }
    }
    renderListFooter(){
        if(this.state.isLoadNextError){
            return <div>加载下一页失败</div>
        } else if(this.state.isLoadingNext){
            return <div>加载中...</div>
        } else {
            return null;
        }
    }
    render = () => {
        return (
            <div className="App">
                <Header />
                {this.renderContent()}
                <Footer />
            </div>
        );
    }
}

export default App;
