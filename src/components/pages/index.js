// 引入核心库
import React from 'react';

// 样式
import '../../asserts/css/index.css'

// 引入要渲染的组件
import Home from '../views/home';
import Rank from '../views/rank';
import Search from '../views/search';

// 调用路由插件
import {Switch , Route , Redirect , NavLink} from 'react-router-dom';


// 创建组件
export default class Index extends React.Component{
    render(){
        return(<div className='index'>
            <div className='title clearfix'>
                <p className='tName'>优音乐</p>
                <div className='downapp'>下载APP</div>
            </div>
            {/* 导航链接视图 */}
            <div className="tabBar">
                <NavLink activeClassName='select' to='/index/home'>推荐音乐</NavLink>
                <NavLink activeClassName='select' to='/index/rank'>排行榜</NavLink>
                <NavLink activeClassName='select' to='/index/search'>搜索</NavLink>
            </div>
            {/* 二级路由出口 */}
            <Switch>
                <Route path='/index/home' component={Home}></Route>
                <Route path='/index/rank' component={Rank}></Route>
                <Route path='/index/search' component={Search}></Route>
                <Redirect to='/index/home'></Redirect>
            </Switch>
        </div>)
    }
}