const mock = [
{
    url: 'https://hbimg.huabanimg.com/240f8b7579cbb2eb30c99078e0692741d260ac73152e8-0DCRXc_sq320',
    title: '图片1'
},
{
    url: 'https://m.baidu.com/se/static/img/iphone/logo_web.png',
    title: '图片2'
},
{
    url: 'https://hbimg.huabanimg.com/37557cfd24fa64c6fa8f23404b956dad67e9ff00711cc8-xqXIu5_sq320',
    title: '图片3'
},
{
    url: 'https://m.baidu.com/se/static/img/iphone/logo_web.png',
    title: '图片4'
},
{
    url: 'https://hbimg.huabanimg.com/f677c48f9b519a6fb5a93aecc9d3301b328d3eee5acaa-z7unep_sq320',
    title: '图片5'
},
{
    url: 'https://m.baidu.com/se/static/img/iphone/logo_web.png',
    title: '图片1'
},
{
    url: 'https://m.baidu.com/se/static/img/iphone/logo_web.png',
    title: '图片6'
},
{
    url: 'https://m.baidu.com/se/static/img/iphone/logo_web.png',
    title: '图片6'
},
{
    url: 'https://m.baidu.com/se/static/img/iphone/logo_web.png',
    title: '图片8'
},
{
    url: 'https://m.baidu.com/se/static/img/iphone/logo_web.png',
    title: '图片9'
},
{
    url: 'https://m.baidu.com/se/static/img/iphone/logo_web.png',
    title: '图片10'
},

]
export const getMockList = ({pageNo, pageSize=5}) => {
    let list = [];
    for(let i=0;i<pageSize;i++){
        list[i] = {
            title: `图片${parseInt(pageNo)}-${i+1}`,
            url: mock[i].url
        }
    }
    return {
        code: 0,
        data: list
    };
}