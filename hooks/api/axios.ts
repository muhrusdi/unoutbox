import axios, { AxiosHeaders, AxiosRequestHeaders } from "axios"

axios.defaults.baseURL = process.env.HOST_URL

const BASE_URL = process.env.HOST_URL

export { axios }

axios.interceptors.request.use(
  config => {
    if (config?.headers?.get("x-request-id") === "basic-location") {
    } else {
      config.baseURL = "/"
    }

    if (config?.headers?.get("x-request-id") === "auth") {
      config.auth = {
        username: process.env.USERNAME_API_KEY || "",
        password: process.env.PASSWORD_API_KEY || "",
      }

      return config
    } else if (config?.headers?.get("x-request-id") === "basic-location") {
      config.auth = {
        username: process.env.USERNAME_API_LOC_KEY || "",
        password: process.env.PASSWORD_API_LOC_KEY || "",
      }

      return config
    }

    config.headers = {
      // Authorization: `Bearer ${cookie}`,
      ...config.headers,
    } as AxiosRequestHeaders

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (typeof window !== "undefined") {
        const path = window.location.pathname
        if (!path.startsWith("/auth")) {
          // window.location.href = `/auth/${type}/login`
        }
      }
    }
    return Promise.reject(error)
  }
)

export const axiosQuery = (
  path: string,
  options?: {
    headers?: AxiosHeaders
    method?: string
    body?: FormData | string
    signal?: AbortSignal
  }
) =>
  axios(path, {
    ...options,
  }).then(d => d.data)
