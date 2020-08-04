// 引入核心库
import React from 'react';
import $ from 'jquery';
// import qs from 'querystring';

import '../../asserts/css/play.css';

import {getLyric , getUrl , getSongDetail} from '../../utils/axios/';

// 创建组件
export default class Play extends React.Component{
    constructor(){
        super()
        this.state = {
            imgPause: require('../../asserts/images/pause.png'),
            imgPlay: require('../../asserts/images/play.png'),
            songUrl: '',
            lyric: '',
            songDetail: [],
            flag: true,  // 用来控制播放和暂停
            playTime: "00:00"
        }
        // 创建ref
        this.playIcon = React.createRef()
        this.audio = React.createRef()
    }
    render(){
        const {songUrl , 
               lyric , 
               songDetail , 
               imgPause , 
               imgPlay ,
               flag ,
               playTime ,
        } = this.state
        // console.log(this);
        // 这两步用node就可以直接转换
        // let queryStr = this.props.location.search.slice(1)
        // let obj = qs.parse(queryStr)
        return (<div className='play'>
            <div className='playbox'>
                <div className="play_img_all" >
                    <div className="play_top" onClick={this.toPlay.bind(this)}>
                        {
                            flag ? <img src={imgPlay} alt=""/> : ""
                        }
                    </div>
                    <i ref={this.playIcon} className="play_icon"></i>
                    <div className="play_img_box" onClick={this.toPlay.bind(this)}>
                        <div className="small_img">
                            {songDetail.al ? <img src={songDetail.al.picUrl} alt="" /> : ''}
                        </div>
                    </div>
                </div>
                <div className="play_txt">
                    <div className="play_txt_name">
                        {songDetail.al ? <div>{songDetail.al.name}-<span className="singer">{songDetail.ar[0].name}</span></div> : ''}
                    </div>
                    <div className="play_txt_geci">
                        <div className="geci_box">
                            {/* 把对象转化成数组之后 循环遍历  Object.entries 把对象转化成枚举型的数组 类似for in*/}
                            {
                                Object.entries(lyric).map((item, i) => {
                                    //当播放器时间和歌词的时间匹配的时候 加高亮
                                    if(playTime == item[0]){
                                        return <p key={i} className='active'>{item[1]}</p>
                                    }else{
                                        return <p key={i}>{item[1]}</p>
                                    }
                                    
                                })
                            }
                            <p ></p>
                        </div>
                    </div>
                </div >
                <div className="audio_box">
                    <audio ref={this.audio} src={songUrl}></audio>
                </div >
            </div>
        </div >)
    }

    componentDidMount(){
        this.getMusicUrl()
        this.getMusicLyric()
        this.getsongdetail()
    }

    // 获取歌曲
    getMusicUrl(){
        getUrl({id: this.props.location.state.id}).then(res => {
            if(res.data.code === 200){
                this.setState({
                    songUrl: res.data.data[0].url
                })
            }
        })
    }

    // 时间转化事件
    tranTime(timer){
        let minute = (Math.floor(timer / 60) + '').padStart(2 , '0')
        let second = (Math.floor(timer % 60 + '')).padStart(2 , '0')
        return `${minute}:${second}`
    }

    // 歌词滚动事件
    moveLyric(){
        let active = $('.active').eq(0)
        let index = $('.geci_box').childern().index(active)
        let offset = 31
        if(active){
            if(active.offsetTop > offset){
                // 移动Y轴
                $('.geci_box').css("transform" , `translateY(-${index*offset}px)`)
            }
        }
    }

    // 获取歌词
    getMusicLyric(){
        getLyric({id: this.props.location.state.id}).then(res => {
            if(res.data.code === 200){
                let lyricInfo = res.data.lrc.lyric
                // 创建一个正则
                let reg = /\[(.*?)](.*)/g
                // 把字符串的每一处[]符号都替换掉
                lyricInfo.replace(reg , (a , b , c) => {

                })
                // this.setState({
                //     lyric: res.data.lrc.lyric
                // })
            }
        })
    }

    // 歌曲信息
    getsongdetail(){
        getSongDetail({ids: this.props.location.state.id}).then(res => {
            if(res.data.code === 200){
                this.setState({
                    songDetail: res.data.songs[0]
                })
            }
        })
    }

    // 播放事件
    toPlay(){
        this.setState({
            flag : !this.state.flag
        } , () => {
            if(this.state.flag){
                // flag为真就是暂停音乐
                this.audio.current.pause()
                // 出现播放按钮
                this.playIcon.current.style.display = 'block'
            }else{
                this.audio.current.play()
                this.playIcon.current.style.display = 'none'
            }

        })
    }
}