// 引入核心库
import React from 'react';
// 引入dom库
import ReactDOM from 'react-dom';
// 引入全局样式
import './index.css';

// 全局引入antd
// import 'antd/dist/antd.css';

// 引入rem和重置样式
import './asserts/css/reset.css';
import "./asserts/js/remScale";
import './asserts/font_icon/iconfont.css'

import {BrowserRouter} from 'react-router-dom';

// 引入主组件
import App from './App.js';

// 利用render函数及逆行渲染
// ReactDOM.render(
// <BrowserRouter>
// <React.StrictMode>
//     <App></App>
// </React.StrictMode>
// </BrowserRouter>, 
// document.getElementById('root'))

// 去掉严格模式
ReactDOM.render(
<BrowserRouter>
    <App></App>
</BrowserRouter>, 
document.getElementById('root'))