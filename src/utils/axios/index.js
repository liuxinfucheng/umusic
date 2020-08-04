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

// 歌单详情
export function getPlayList(params) {
    return http.get('/playlist/detail' , {
        params
    })
}

// 歌单评论
export function getPlayComment(params) {
    return http.get('/comment/playlist' , {
        params
    })
}

// 歌词接口
export function getLyric(params){
    return http.get('/lyric',{
        params
    })
}

// 获取音乐
export function getUrl(params) {
    return http.get('/song/url' , {
        params
    })
}

// 获取歌曲详情
export function getSongDetail(params) {
    return http.get('/song/detail' , {
        params
    })
}