import {createSSRApp} from "vue";
import App from "./App.vue";
import {store} from "./store";

export function createApp() {
    const app = createSSRApp(App);
    let baseUrl = "http://localhost:8080";
    let header = {
        "content-type": "application/json",
    }

    function http(url, data, method, success, fail) {
        uni.request({
            url: baseUrl + url, //仅为示例，并非真实接口地址。
            data,
            header,
            method,
            success,
            fail
        })
    }

    app.config.globalProperties.$http = http;

    app.use(store)
    return {
        app,
    };
}
