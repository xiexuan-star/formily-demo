import axios from 'axios';

const UNKNOWN_ERROR = '未知错误，请重试';

// const baseApiUrl = import.meta.env.VITE_BASE_API;

const service = axios.create({
  // withCredentials: true,         //跨域
  // baseURL: baseApiUrl,
  // timeout: 6000,
  // "Content-Type": "application/json;charset=UTF-8"
});

// const authorization = "ca3a44299d42485583c4ec5cc05449a4";
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    // if the custom code is not 200, it is judged as an error.
    if (
      (res.result !== undefined && res.result !== 'SUCCESS') ||
      (res.success !== undefined && !res.success)
    ) {
      // Illegal token
      if (res.code === '10212' || res.result === 'NO_LOGIN') {

      }

      // throw other
      const error = new Error(res['resultMsg'] || res['msg'] || UNKNOWN_ERROR) as Error & {
        code: any;
      };
      error.code = res.code;
      return Promise.reject(error);
    } else {
      return Promise.resolve(response);
    }
  },
  error => {
    // 处理 422 或者 500 的错误异常提示
    const { response } = error;
    if (response?.status === 402 && response?.data?.code === '10212') {
      const msg = response.data['resultMsg'] || response.data['msg'] || UNKNOWN_ERROR;
      const error = new Error(msg) as Error & {
        code: any;
      };
    }
    if (error?.response?.status === 404) {
      return Promise.reject('Not Found');
    }
    const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
    error.message = errMsg;
    return Promise.reject(error);
  }
);

//低代码平台返回结果集
export type ResType<T> = {
  code: number;
  map: T;
  recordsFiltered: number;
  recordsTotal?: number;
  result: string;
  resultMsg: string;
  total: number;
};

//医嘱系统返回结果集
export type MedicalResType<T> = {
  code: string;
  data: T;
  msg: number;
  subErrors: {
    code: string;
    msg: string;
  };
  success: string;
};

interface Http {
  get<T>(url: string, params?: any): Promise<ResType<T> | MedicalResType<T>>;

  post<T>(url: string, params?: any, headers?: any): Promise<ResType<T> | MedicalResType<T>>;

  upload<T>(url: string, params: any): Promise<ResType<T> | MedicalResType<T>>;

  download(url: string): void;
}

const http: Http = {
  get(url, params) {

    return new Promise((resolve, reject) => {
      service
        .get(url, { params })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log('err', err);
          reject(err.data);
        });
    });
  },
  post(url, params, headersParams) {
    !params && (params = {});
    if (params.hasUserRole == 1) {
      url += '&hasUserRole=1';
    }
    url = decodeURI(url);
    return new Promise((resolve, reject) => {
      service
        .post(url, params, {
          headers: headersParams?.headers,
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      service
        .post(url, file, {
          headers: { ContentType: 'multipart/formdata' },
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  },
};

export default http;
