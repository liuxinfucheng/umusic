// 引入核心库
import React from 'react';
import axios from 'axios';

import '../../asserts/css/home.css'

// 引入接口
import {personalized , banner , getNewSongs} from '../../utils/axios/index';

// 引入swiper
import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper.min.js'

// 引入插件
import Swiper from "swiper";

// 创建组件
export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            remdSongs: [],
            songList: [],
            bannerList: []
        }
    }

    render(){
        const {remdSongs , songList , bannerList} = this.state
        return(<div className='home'>
            {/* Swiper */}
            <div className="swiper-container">
                <div className="swiper-wrapper">
                {
                    bannerList.map(item => {
                        return <div key={item.imageUrl} className="swiper-slide">
                            <img className='imgUrl' src={item.imageUrl} alt="" />
                        </div>
                    })
                }
                </div>
                {/* 分页器。如果放置在swiper-container外面，需要自定义样式。 */}
                <div className="swiper-pagination"></div>
            </div>

            <div>
                <h2>推荐歌单</h2>
                <div className="remd_songs">
                    <ul className='clearfix'>
                        {
                            remdSongs.map(item => {
                                return <li onClick={this.goSongSheet.bind(this , item.id)} key={item.id} className='remd_li'>
                                    <div className="remd_img">
                                        <img src={item.picUrl} alt=""/>
                                    </div>
                                    <p className='remd_title'>{item.name}</p>
                                    <div className='playcount'>
                                        <i className='iconfont icon-erji'></i>
                                        <span>{this.addUnit(item.playCount)}</span>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="newsong_list">
                <h2>最新音乐</h2>
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
            </div>
            <div className="footer">
                <div className="fwrap">
                    <div className="logo">
                        优音乐
                    </div>
                    <div className="openapp" onClick={this.openapp.bind(this)}>打开APP，发现更多好音乐</div>
                    <p className="copyright">
                        网易公司版权所有©1997-2020   杭州乐读科技有限公司运营
                    </p>
                </div>
            </div>
        </div>)
    }

    componentDidMount(){
        // 组件一加载就调用所有接口
        // axios.all([personalized({limit: 6}) , banner() , getNewSongs()])
        // .then(axios.spread((remdSongs , bannerList , songList) => {
        //     if(bannerList.data.code == 200){
        //         // 通过filter对数组进行过滤
        //         let banners = bannerList.data.banners.filter((item , i) => i<4)
        //         console.log(banners);
        //         this.setState({
        //             bannerList: banners
        //         }, () => {
        //             let swiper = new Swiper('.swiper-container' , {
        //                 autoplay: true,
        //                 // autoplay:{
        //                 //     disableOnInteraction: false
        //                 // },
        //                 loop: true,
        //                 pagination: {
        //                     el: '.swiper-container'
        //                 }
        //             })
        //         })
        //     }

        //     // 获取推荐歌单
        //     if(songList.data.code == 200){
        //         this.setState({
        //             songList: songList.data.result
        //         })
        //     }

        //     // 最新音乐
        //     if(remdSongs.data.code == 200){
        //         if(remdSongs.data.code == 200){
        //             this.setState({
        //                 remdSongs: remdSongs.data.result
        //             })
        //         }
        //     }
        // }
        // ))

        // 歌单
        this.getPersonalized()
        // 轮播图
        this.getBanner()
        // 最新音乐
        this.getnewSongs()
    }
    // 获取推荐歌单
    getPersonalized(){
        personalized({limit: 6}).then(res => {
            if(res.data.code == 200){
                this.setState({
                    remdSongs: res.data.result
                })
            }
        })
    }

    // 获取轮播图
    getBanner(){
        banner().then(res => {
            if(res.data.code == 200){
                // 通过filter对数组进行过滤
                let banners = res.data.banners.filter((item , i) => i<4)
                // console.log(banners);
                this.setState({
                    bannerList: banners
                }, () => {
                    let swiper = new Swiper('.swiper-container' , {
                        autoplay: true,
                        autoplay:{
                            disableOnInteraction: false
                        },
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    })
                })
            }
        })
    }

    // 获取新音乐
    getnewSongs(){
        getNewSongs().then(res => {
            if(res.data.code == 200){
                this.setState({
                    songList: res.data.result
                })
            }
        })
    }

    // 跳转歌单列表
    goSongSheet(id){
        this.props.history.push({
            pathname: '/detail',
            state: {
                id
            }
        })
    }

    // 跳转播放界面
    goPlay(id){
        this.props.history.push({
            pathname: '/play',
            state: {
                id
            }
        })
    }

    // 打开app
    openapp(){
        alert('哪有app，用网站')
    }

    // 播放量加单位
    addUnit(num){
        if(num > 99999999){
            // 例如48千万
            let res1 = Math.floor(num / 10000000)
            // 例如4.8亿
            let res = res1 / 10 + '亿'
            return res
        }else if(num > 9999){
            // 例如48千
            let res1 = Math.floor(num / 1000)
            // 例如4.8万
            let res = res1 / 10 + '万'
            return res
        }else{
            return num
        }
    }

}
