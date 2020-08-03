// 引入核心库
import React from 'react';

import '../../asserts/css/rank.css'

import {getHotList} from '../../utils/axios/index';

// import { NavLink } from "react-router-dom";

// 创建组件
export default class Rank extends React.Component{
    constructor(){
        super()
        this.state = {
            bgImg: require('../../asserts/images/rankbg_img.jpg'),
            rankList: [
                // {
                //     id: 1,
                //     songName: '爸爸妈妈',
                //     singer: '李荣浩 - 有理想'
                // },{
                //     id: 2,
                //     songName: '龙卷风',
                //     singer: '邓紫棋 - 龙卷风'
                // },{
                //     id: 3,
                //     songName: '空山新雨后',
                //     singer: '音阙诗听 / 锦零 - 有理想'
                // },{
                //     id: 4,
                //     songName: '烟火里的尘埃',
                //     singer: '华晨宇 - 烟火里的尘埃'
                // },{
                //     id: 5,
                //     songName: '无人之岛',
                //     singer: '任然 - 无人之岛'
                // },{
                //     id: 6,
                //     songName: '不能说的秘密',
                //     singer: '周杰伦 - 不能说的秘密'
                // },
            ],
            hottime: ''
        }
    }


    render(){
        const {rankList , hottime} = this.state
        return(<div className='rank'>
            <div className='cover'>
                <div className='hotop'>
                    <div className='hoticon'></div>
                    <div className='hotime'>
                        更新日期：{this.formatTime(hottime)}
                    </div>
                </div>
            </div>
            <div className="newsong_list">
                <ul>{
                    rankList.map((item , i) => {
                        return <li className='newsong_li' key={item.id} onClick={this.goPlay.bind(this , item.id)}>
                            <div className="content">
                                <div className="newsong_name">
                                    <p className="name"><span>{i < 9 ? '0' + (i + 1) : (i + 1)}</span> {item.name} {
                                            item.alias ?
                                                item.alias.map(item => {
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
                                            item.ar ?
                                                item.ar.map(item => {
                                                    return <span key={item.id}>{item.name}</span>
                                                })
                                                : ''
                                        } - {item.al.name}
                                    </p>
                                </div>
                                <div className="newsong_play">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </div>
                        </li>
                    })
                }</ul>
                <div className="hotdn">
                    <span onClick={this.toSongList.bind(this)} className="hotview">查看完整榜单</span>
                </div>
            </div>
        </div>)
    }

    componentDidMount(){
        this.gethotlist()
    }
    
    // 封装一个路由跳转的方法
    goPlay(id){
        // props属性中，有路由的属性和方法
        // this.props.history.push(`/play/${id}`)
        this.props.history.push({
            pathname:'/play',
            state: {
                id
            }
        })
        // console.log(this.props);
    }

    // 获取热歌榜
    gethotlist(){
        getHotList().then(res => {
            if(res.data.code == 200){
                // console.log(res.data.playlist);
                let hotList = res.data.playlist.tracks.filter((item , i) => i < 20)
                this.setState({
                    hottime: res.data.updateTime,
                    rankList: hotList
                })
                // console.log(hotList);
            }
        })
    }

    // 时间转化函数
    formatTime(timer){
        let date = new Date(timer)
        //年份
        // let year = date.getFullYear()
        let month = (date.getMonth() + 1 + '').padStart(2, '0')
        //天数
        let day = (date.getDate() + '').padStart(2, '0')
        //小时
        // let hours = (date.getHours() + '').padStart(2, '0')
        // //分钟
        // let minutes = (date.getMinutes() + '').padStart(2, '0')
        // //秒数
        // let seconds = (date.getSeconds() + '').padStart(2, '0')
        return `${month}月${day}日`
    }

    // 完整榜单
    toSongList(){
        alert('没有啦，就这些了')
    }
}