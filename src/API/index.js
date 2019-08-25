import {getMockList} from '../static/mock';

// 获取列表
export const getList = ({pageNo=1, pageSize=10}) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(getMockList({pageNo}))
        }, 800)
    })
}