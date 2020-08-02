// 引入核心库
import React from 'react';

import '../../asserts/css/rank.css'

// import { NavLink } from "react-router-dom";

// 创建组件
export default class Rank extends React.Component{
    constructor(){
        super()
        this.state = {
            bgImg: require('../../asserts/images/rankbg_img.jpg'),
            rankList: [
                {
                    id: 1,
                    songName: '爸爸妈妈',
                    singer: '李荣浩 - 有理想'
                },{
                    id: 2,
                    songName: '龙卷风',
                    singer: '邓紫棋 - 龙卷风'
                },{
                    id: 3,
                    songName: '空山新雨后',
                    singer: '音阙诗听 / 锦零 - 有理想'
                },{
                    id: 4,
                    songName: '烟火里的尘埃',
                    singer: '华晨宇 - 烟火里的尘埃'
                },{
                    id: 5,
                    songName: '无人之岛',
                    singer: '任然 - 无人之岛'
                },{
                    id: 6,
                    songName: '不能说的秘密',
                    singer: '周杰伦 - 不能说的秘密'
                },
            ]
        }
    }


    render(){
        const {rankList} = this.state
        return(<div className='rank'>
            <div className='cover'>
                <div className='hotop'>
                    <div className='hoticon'></div>
                    <div className='hotime'>
                        更新日期：07月30日
                    </div>
                </div>
            </div>
            <div className="newsong_list">
                <ul>{
                    rankList.map(item => {
                        return <li className='newsong_li' key={item.id} onClick={this.goPlay.bind(this , item.id)}>
                            <div className="content">
                                <div className="newsong_name">
                                    <p className="name">{item.songName}</p>
                                    <p className="singer"><i className="iconfont icon-sq"></i>{item.singer}</p>
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

    // 完整榜单
    toSongList(){
        alert('没有啦，就这些了')
    }
}