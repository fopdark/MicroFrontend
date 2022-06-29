import axios, { CancelToken } from "axios";

enum HttpMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}
// const _window = (window as any).window;
const token = "_window.currentUser.token" || "";

export const GET = async (url: string, endpoint: string, cancelToken?: any) => {
    return await Request(
        HttpMethods.GET,
        url,
        endpoint,
        undefined,
        cancelToken
    );
};


export const POST = async (
    url: string,
    endpoint: string,
    payload: any,
    cancelToken?: any
) => {

    const {userName} = payload;
    switch (userName) {
        case "admin":
            return {status: 200, message:"Thành công"}
        default:
            return {status: 400, message:"Thất bại"}
    }
};

// export const POST = async (
//     url: string,
//     endpoint: string,
//     payload: any,
//     cancelToken?: any
// ) => {
//     return await Request(HttpMethods.POST, url, endpoint, payload, cancelToken);
// };

export const PUT = async (
    url: string,
    endpoint: string,
    payload: any,
    cancelToken?: any
) => {
    return await Request(HttpMethods.PUT, url, endpoint, payload, cancelToken);
};

export const PATCH = async (
    url: string,
    endpoint: string,
    payload: any,
    cancelToken?: any
) => {
    return await Request(
        HttpMethods.PATCH,
        url,
        endpoint,
        payload,
        cancelToken
    );
};

export const deleteRequest = async (
    url: string,
    endpoint: string,
    cancelToken?: any
) => {
    return await Request(
        HttpMethods.DELETE,
        url,
        endpoint,
        undefined,
        cancelToken
    );
};

const Request = async (
    methodHttp: HttpMethods,
    baseUrl: string,
    endpoint: string,
    body: any = undefined,
    cancelToken: CancelToken
) => {
    try {
        let res = await axios({
            url: endpoint,
            baseURL: baseUrl,
            method: methodHttp,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data: JSON.stringify(body),
            cancelToken: cancelToken,
        });
        if (res.status == 401) {
            console.log(res.status);
        }
        return res.data;
    } catch (err) {
        console.error(err);
    }
};
