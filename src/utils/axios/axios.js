import axios from 'axios';

let http = axios.create({
    // 服务器地址
    baseURL:'http://localhost:3000'
})

// 响应拦截
http.interceptors.response.use(res => {
    return res
})

export default http