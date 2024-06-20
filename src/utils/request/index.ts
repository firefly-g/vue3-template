import Axios, {
    type AxiosInstance,
    type AxiosRequestConfig,
    type CustomParamsSerializer
  } from "axios";
import type {
    RequestError,
    RequestMethods,
    RequestResponse,
    RequestConfig
  } from "./types.d";
import { stringify } from "qs";
console.log(import.meta.env.VITE_BASE_API,'import.meta.env.VITE_BASE_PATH')
const defaultConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10000,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    paramsSerializer: {
        serialize: stringify as unknown as CustomParamsSerializer
    }
};
class Request{
    constructor() {
        this.httpInterceptorsRequest();
        this.httpInterceptorsResponse();
    }
    /** 初始化配置对象 */
    private static initConfig: RequestConfig = {};
    /** 保存当前Axios实例对象 */
    private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);
    
    private  httpInterceptorsRequest():void{
        Request.axiosInstance.interceptors.request.use(
            async(config:RequestConfig):Promise<any>=>{
                return config
                // if(typeof config.beforeRequestCallback==="function"){
                //     config.beforeRequestCallback(config)
                //     return config
                // }
                // if(Request.initConfig.beforeRequestCallback){
                //     Request.initConfig.beforeRequestCallback(config);
                //     return config
                // }
            }, (error:RequestError) => {
                return Promise.reject(error);
            })
    }
    
    private httpInterceptorsResponse():void{
        Request.axiosInstance.interceptors.response.use(
            (response: RequestResponse)=>{
                const config = response.config;
                if (typeof config.beforeResponseCallback === "function") {
                    config.beforeResponseCallback(response);
                    return response.data;
                  }
                  if (Request.initConfig.beforeResponseCallback) {
                    Request.initConfig.beforeResponseCallback(response);
                    return response.data;
                  }
                  return response.data;
            },(error:RequestError) => {
                error.isCancelRequest = Axios.isCancel(error);
                return Promise.reject(error);
        })
    }
    /** 通用请求工具函数 */
    public request<T>(
        config : RequestConfig
    ): Promise<T> {
        // 单独处理自定义请求/响应回调
        return new Promise((resolve, reject) => {
            Request.axiosInstance
            .request(config)
            .then((response: undefined) => {
            resolve(response);
            })
            .catch(error => {
            reject(error);
            });
        });
    }
}


export const service = new Request();