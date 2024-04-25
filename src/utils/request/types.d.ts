import type {
    Method,
    AxiosError,
    AxiosResponse,
    AxiosRequestConfig
} from "axios";

export interface RequestResponse extends AxiosResponse {
    config: RequestConfig;
  }

export interface RequestConfig extends AxiosRequestConfig {
    beforeRequestCallback?: (request: RequestConfig) => void;
    beforeResponseCallback?: (response: RequestConfig) => void;
}

export interface RequestError extends AxiosError {
    isCancelRequest?: boolean;
}
export type resultType = {
    accessToken?: string;
};

export type RequestMethods = Extract<
  Method,
  "get" | "post" | "put" | "delete" | "patch" | "option" | "head"
>;
