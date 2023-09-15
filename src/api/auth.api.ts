import axios from "axios";
import { getToken } from "../utils";
import { LoginCreds } from "../models/login.model";
import { REACT_APP_CHAT_APP_BASE_URL } from "../constants";



const token = getToken()

export const postLogin = async ({ password, user_name }: LoginCreds) => {
    try {
        const res = await axios({
            headers: {
                Authorization: token,
            },
            method: 'post',
            url: `${REACT_APP_CHAT_APP_BASE_URL}/auth/login`,
            data: {
                user_name, password
            }
        })

        if (res?.data) {
            console.log(res.data.token, ' res.data.token res.data.token')
            window.location.href = 'Bearer' + res.data.token
        }
    }
    catch (err) {
        throw err
    }
}

export const postLogout = async ({ user_name }: { user_name: string, }) => {

    try {
        const res = await axios({
            headers: {
                Authorization: token,
            },
            method: 'post',
            url: `${REACT_APP_CHAT_APP_BASE_URL}/auth/logout`,
            data: {
                user_name
            }
        })
        localStorage.removeItem('chat_app_token')
        window.location.href = '/login'

        return res
    }
    catch (err) {
        throw err
    }
}