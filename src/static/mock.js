const mock = [
{
    url: 'https://hbimg.huabanimg.com/240f8b7579cbb2eb30c99078e0692741d260ac73152e8-0DCRXc_sq320',
    title: '图片1'
},
{
    url: 'https://hbimg.huabanimg.com/555f3082d0b93d9535bbc779c9318b44ce47721ca700-Wc6l65_fw658',
    title: '图片2'
},
{
    url: 'http://pic1.win4000.com/pic/a/47/918094b2e0_250_300.jpg',
    title: '图片3'
},
{
    url: 'http://img5.imgtn.bdimg.com/it/u=1006794532,232747513&fm=11&gp=0.jpg',
    title: '图片4'
},
{
    url: 'http://pic1.win4000.com/tj/2019-08-09/5d4d239cdb3e3.jpg',
    title: '图片5'
},
{
    url: 'http://pic1.win4000.com/tj/2019-08-16/5d560cb4e7e50.jpg',
    title: '图片1'
},
{
    url: 'http://pic1.win4000.com/wallpaper/2018-07-19/5b5070ca77cee.jpg',
    title: '图片6'
},
{
    url: 'http://pic1.win4000.com/tj/2019-08-16/5d5658b62c076.jpg',
    title: '图片6'
},
{
    url: 'http://pic1.win4000.com/tj/2019-08-16/5d56591a515f2.jpg',
    title: '图片8'
},
{
    url: 'http://img5.imgtn.bdimg.com/it/u=1006794532,232747513&fm=11&gp=0.jpg',
    title: '图片9'
},
{
    url: 'http://pic1.win4000.com/tj/2019-08-16/5d5658b62c076.jpg',
    title: '图片10'
},

]
export const getMockList = ({pageNo, pageSize=5}) => {
    console.log('pageSize', pageSize)
    let list = [];
    for(let i=0;i<pageSize;i++){
        const r = Math.floor(Math.random() * (9 - 1 + 1)+1);
        list[i] = {
            title: `图片:${parseInt(pageNo)}页-No.${i+1}`,
            url: mock[r].url
        }
    }
    return {
        code: 0,
        data: list
    };
}