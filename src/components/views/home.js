// 引入核心库
import React from 'react';

import '../../asserts/css/home.css'

// 创建组件
export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            remdSongs: [
                {   
                    id: 1,
                    title: '[VIP专享]一周新歌推荐',
                    img: 'http://p1.music.126.net/qZ25SAx2rhH-Qpsb1DWZZg==/109951165188459074.jpg?imageView=1&type=webp&thumbnail=247x0',
                    playback: '3.4亿'
                },
                {
                    id: 2,
                    title: '这个世界很大，可是没人听我说话',
                    img: 'http://p1.music.126.net/cpb3jNJiyua6XaK5i35UdA==/109951165163645522.jpg?imageView=1&type=webp&thumbnail=247x0',
                    playback: '13.2万'
                },
                {
                    id: 3,
                    title: '打野BGM［游戏专用］',
                    img: 'http://p1.music.126.net/boGF139O-OtRO5OTIj40Cg==/109951164712192199.jpg?imageView=1&type=webp&thumbnail=247x0',
                    playback: '28.6万'
                },
                {
                    id: 4,
                    title: '不够优秀 但不想责备努力活着的自己',
                    img: 'http://p1.music.126.net/1-_b4f35fMedhRf_ovCIXw==/109951165153845687.jpg?imageView=1&type=webp&thumbnail=247x0',
                    playback: '363.5万'
                },
                {
                    id: 5,
                    title: 'KORG P1000电子琴',
                    img: 'http://p1.music.126.net/2jy8QSBjtjRSeyLKR3aaCw==/109951164509321497.jpg?imageView=1&type=webp&thumbnail=247x0',
                    playback: '190.7万'
                },
                {
                    id: 6,
                    title: '维吾尔语情歌Muhabbat Nahxiliri',
                    img: 'http://p1.music.126.net/trbygFyU62v_1ZjXVEWbGw==/109951165031519178.jpg?imageView=1&type=webp&thumbnail=247x0',
                    playback: '641.2万'
                },
            ],
            songList: [
                {
                    id: 1,
                    name: '致我们终将逝去的青春(2020重唱版)',
                    singer:'张靓颖 - 致我们终将逝去的青春(2020重唱版)'
                },
                {
                    id: 2,
                    name: '如果我是海',
                    singer:'李荣浩 - 麻雀'
                },
                {
                    id: 3,
                    name: '祝我快乐',
                    singer:'汪苏泷 - 祝我快乐'
                },
                {
                    id: 4,
                    name: '星星之火',
                    singer:'罗云熙 - 星星之火'
                },
                {
                    id: 5,
                    name: '晚来天欲雪',
                    singer:'恋恋故人难 / 云の泣 - 晚来天欲雪'
                },
                {
                    id: 6,
                    name: '先知',
                    singer:'田馥甄 - 先知'
                },
            ]
        }
    }

    render(){
        const {remdSongs , songList} = this.state
        return(<div className='home'>
            <div>
                <h2>推荐歌单</h2>
                <div className="remd_songs">
                    <ul className='clearfix'>
                        {
                            remdSongs.map(item => {
                                return <li onClick={this.goSongSheet.bind(this , item.id)} key={item.id} className='remd_li'>
                                    <div className="remd_img">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <p className='remd_title'>{item.title}</p>

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
                                        <p className="name">{item.name}</p>
                                        
                                        <p className="singer"><i className="iconfont icon-sq"></i>{item.singer}</p>
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

    // 跳转歌单列表
    goSongSheet(id){
        console.log(id);
    }

    // 跳转播放界面
    goPlay(id){
        console.log(id);
    }

    // 打开app
    openapp(){
        alert('哪有app，用网站')
    }

}
