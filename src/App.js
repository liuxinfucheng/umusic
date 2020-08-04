// 引入核心库
import React from 'react';

// 引入路由插件中相关的属性方法
import {Switch , Route , Redirect} from 'react-router-dom';

// 引入主组件样式
import './App.css';

// 引入渲染组件
import Index from './components/pages/index';
import List from './components/pages/list';
import Play from './components/pages/play';
import Detail from './components/pages/detail';

// 创建组件
class App extends React.Component{
    render(){
        return(<div>
            {/* 一级路由出口 */}
            <Switch>
                <Route path='/index' component={Index}></Route>
                <Route path='/list' component={List}></Route>
                <Route path='/detail' component={Detail}></Route>
                {/* 动态路由 */}
                <Route path='/play' component={Play}></Route>
                <Redirect to='/index'></Redirect>
            </Switch>
        </div>)
    }
}

export default App