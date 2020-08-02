// 引入核心库
import React from 'react';

import '../../asserts/css/search.css'

// 创建组件
export default class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            hotList: [
                {name: "Taylor Swift" , id: 1},
                {name: "Billie Eilish" , id: 2},
                {name: "无滤镜" , id: 3},
                {name: "潘玮柏" , id: 4},
                {name: "天外来物" , id: 5},
                {name: "Troye Sivan" , id: 6},
                {name: "亚运会歌征集" , id: 7},
                {name: "上半年音乐榜单" , id: 8},
                {name: "要我怎么办" , id: 9},
                {name: "2020毕业音乐会" , id: 10},
            ]
        }
    }

    
    render(){
        const {hotList} = this.state
        return(<div className='search'>
            <div className="searchpage">
                <form action="#" onSubmit={this.getSearch.bind(this)} method='get' className="m-input">
                    <div className="coverinput">
                        <i className='iconfont icon-fangdajing'></i>
                        <input type="text" name='search' className='input' autoComplete='off'/>
                        <label className="holder">搜索歌曲、歌手、专辑</label>
                    </div>
                </form>
                <div className="hot_words">
                    <div className="hot_list">
                        <h3>热门搜索</h3>
                        <ul className='clearfix'>
                            {
                                hotList.map(item => {
                                    return <li key={item.id} className="keywords" onClick={this.getSearch.bind(this , item.name)}>
                                        {item.name}
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
    }

    getSearch(name){
        console.log(name , 1);
    }
}