// 引入核心库
import React from 'react';

import '../../asserts/css/search.css'
import {searchHot , searchInfo} from '../../utils/axios';

// 创建组件
export default class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            searchHotList: [
                // {name: "Taylor Swift" , id: 1},
                // {name: "Billie Eilish" , id: 2},
                // {name: "无滤镜" , id: 3},
                // {name: "潘玮柏" , id: 4},
                // {name: "天外来物" , id: 5},
                // {name: "Troye Sivan" , id: 6},
                // {name: "亚运会歌征集" , id: 7},
                // {name: "上半年音乐榜单" , id: 8},
                // {name: "要我怎么办" , id: 9},
                // {name: "2020毕业音乐会" , id: 10},
            ],
            searchList : [],
        }
        this.inpVal = React.createRef()
    }

    
    render(){
        const {searchHotList , searchList} = this.state
        let valFlag = ''
        if(this.inpVal.current){
            valFlag = this.inpVal.current.value
        }
        let hotInfo = <div className="hot_words">
                    <div className="hot_list">
                        <h3>热门搜索</h3>
                        <ul className='clearfix'>
                            {
                                searchHotList.map((item , i) => {
                                    return <li key={i} className="keywords" onClick={this.getSearch.bind(this , item.first)}>
                                        {item.first}
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

        return(<div className='search'>
            <div className="searchpage">
                <form action="#" 
                      onInput={this.getInput.bind(this )} 
                      method='get' 
                      className="m-input">
                    <div className="coverinput">
                        <i className='iconfont icon-fangdajing'></i>
                        <input type="text" ref={this.inpVal} name='search' className='input' placeholder='搜索歌曲、歌手、专辑' autoComplete='off'/>
                        {/* <label className="holder">搜索歌曲、歌手、专辑</label> */}
                        {
                            valFlag ? <i onClick={this.clearInfo.bind(this)} className='iconfont icon-chahao'></i> : ''
                        }
                    </div>
                </form>
                {/* 搜索列表 */}
                <div className="searchresult">
                    <ul>
                        {
                            searchList.map(item => {
                                return <li className='newsong_li' key={item.id} onClick={this.goPlay.bind(this , item.id)}>
                                    <div className="content">
                                        <div className="newsong_name">
                                            <p className="name">{item.name}
                                            {
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
                                                    item.artists ?
                                                        item.artists.map(item => {
                                                        return <span key={item.id}>{item.name}</span>
                                                        })
                                                        : ''
                                                } - {item.album.name}
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
                {/* 热搜标签 */}
                {
                    searchList.length == 0 ? hotInfo : ''
                }
                
            </div>
        </div>)
    }

    componentDidMount(){
        this.get_search_hot()
    }

    // 获取热门搜索事件
    get_search_hot(){
        searchHot().then(res => {
            if(res.data.code == 200){
                this.setState({
                    searchHotList: res.data.result.hots
                })
            }
        })
    }

    getInput(e){

    }

    //  清空事件
    clearInfo(){
        this.inpVal.current.value = ''
        this.setState({
            searchList: []
        })
    }

    // 跳转播放界面
    goPlay(id){
        console.log(id);
    }

    // 搜索事件
    getSearch(keywords){
        console.log(keywords , 1);
        this.inpVal.current.value = keywords
        searchInfo({keywords}).then(res => {
            if(res.data.code == 200){
                // console.log(res);
                this.setState({
                    searchList: res.data.result.songs
                })
            }
        })
    }
}