import axios from "axios";

const GlobalUrl = "http://192.168.40.20:8000"
// const GlobalUrl = process.env.REACT_APP_API_ROOT


export const doPost = async (url, data) => {
    return await axios.post(GlobalUrl + url, data)
        .then((res) => {
            return res.data;

        })
}

export const doGetPayment = async (url, setState) => {
    setState(prev => {
        return {
            ...prev,
            loading: true,
            error: false,
            success: false
        }
    })
    return await axios.get(GlobalUrl + url)
        .then((res) => {
            setState(prev => {
                return {
                    ...prev,
                    loading: false,
                    success: true,
                    error: false,
                    data: res?.data
                }
            })
        }).catch((e) => {
            setState(prev => {
                return {
                    ...prev,
                    loading: false,
                    success: false,
                    error: true,
                    data: e?.response
                }
            })
        })
}