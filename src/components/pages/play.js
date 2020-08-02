// 引入核心库
import React from 'react';
// import qs from 'querystring';

// 创建组件
export default class Play extends React.Component{
    render(){
        console.log(this);
        // 这两步用node就可以直接转换
        // let queryStr = this.props.location.search.slice(1)
        // let obj = qs.parse(queryStr)
        return(<div>
            <h1>play</h1>
            <div>
                <button onClick={() => {this.props.history.go(-1)}}>返回</button>
            </div>
            {/* 动态路由 */}
            {/* <div>动态路由接收参数---{this.props.match.params.id}</div> */}
            {/* 接收query参数，需要原生js实现 */}
            {/* 使用node，querystring可以拆分当前url  {obj.id} */}
            {/* state接收参数 */}
            <h2>state的参数---{this.props.location.state.id}</h2>
            
        </div>)
    }
}