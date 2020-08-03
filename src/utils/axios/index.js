import http from './axios';

// 推荐歌单
export function personalized(params) {
    return http.get('/personalized' , {
        params
    })
}

// 轮播图
export function banner() {
    return http.get('/banner')
}

// 最新音乐
export function getNewSongs() {
    return http.get('/personalized/newsong')
}

// 热歌榜
export function getHotList() {
    return http.get('/playlist/detail?id=3778678')
}

// 热门搜索列表
export function searchHot() {
    return http.get('/search/hot')
}

// 搜索接口
export function searchInfo(params) {
    return http.get('/search' , {
        params
    })
}
