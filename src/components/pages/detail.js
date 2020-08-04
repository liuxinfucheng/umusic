// 引入核心库
import React from 'react';
import {getPlayList , getPlayComment} from '../../utils/axios/';

// 创建组件
export default class List extends React.Component{
    constructor(){
        super()
        this.state = {
            playDetail: [],
            commentDetail: [],
            songList: [],

        }
    }

    render(){
        const {playDetail , songList , commentDetail} = this.state
        return(<div>
            <h1>歌单详情</h1>
            <div>
                <img style={
                    {width: "100%"}
                } src={playDetail.backgroundCoverUrl} alt=""/>
            </div>
            <div>
                介绍：<div>
                    {playDetail.description}
                </div>
            </div>
            <div>
                更新时间：{playDetail.updateFrequency}
            </div>
            <h1>歌曲列表</h1>
            <ul>
                {
                songList.map(item => {
                    return <li className='newsong_li' key={item.id} onClick={this.goPlay.bind(this , item.id)}>
                        <div className="content">
                            <div className="newsong_name">
                                <p className="name">{item.name}
                                {
                                    item.song.alias ?
                                        item.song.alias.map(item => {
                                        return <span style={
                                            {
                                                color:"#888",
                                                fontSize: "16px"
                                            }
                                        } key={item}>({item})</span>
                                        })
                                        : ''
                                }</p>
                                <p className="singer"><i className="iconfont icon-sq"></i>
                                    {
                                        item.song.artists ?
                                            item.song.artists.map(item => {
                                            return <span key={item.id}>{item.name}</span>
                                            })
                                            : ''
                                    } - {item.song.album.name}
                                </p>
                            </div>
                            <div className="newsong_play">
                                <i className="iconfont icon-bofang"></i>
                            </div>
                        </div>
                    </li>
                })
            }
            </ul>
            <h2>热门评论</h2>
            <ul>
            {
                commentDetail.map(item => {
                    return <li key={item.time}>
                            <div>
                                <img style={
                                    {
                                        width:"40px",
                                        borderRadius:"50%"
                                    }
                                } src={item.user.avatarUrl} alt=""/>
                                <span>{item.user.nickname}</span>
                            <span>点赞数{item.likedCount}</span>
                            <p>评论内容：{item.content}</p>
                            <p>{this.formatTime(item.time)}</p>
                            </div>
                            
                        </li>
                })
            }
            </ul>
        </div>)
    }

    // 挂载
    componentDidMount(){
        // 组件一加载就调取歌单详情
        this.getList()
        // 评论详情
        this.getComment()
    }

    // 歌单详情
    getList(){
        getPlayList({
            id: this.props.location.state.id
        }).then(res => {
            if (res.data.code === 200) {
                this.setState({
                    playDetail: res.data.hotComments
                })
            }
        })
    }

    // 评论详情
    getComment(){
        getPlayComment({
            id: this.props.location.state.id
        }).then(res => {
            if(res.data.code === 200){
                this.setState({
                    commentDetail: res.data.hotComments
                })
            }
        })
    }

    //封装一个事件转化函数
    formatTime(timer) {
        let date = new Date(timer)
        //年份
        let year = date.getFullYear()
        let month = (date.getMonth() + 1 + '').padStart(2, '0')
        //天数
        let day = (date.getDate() + '').padStart(2, '0')
        //小时
        let hours = (date.getHours() + '').padStart(2, '0')
        //分钟
        let minutes = (date.getMinutes() + '').padStart(2, '0')
        //秒数
        let seconds = (date.getSeconds() + '').padStart(2, '0')
        return `${year}年${month}月${day}日`
    }
}