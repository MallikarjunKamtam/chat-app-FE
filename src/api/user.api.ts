import axios from "axios";
import { getToken } from "../utils";
const token = getToken()

export const postCreateUser = async ({ password, user_name }: { user_name: string, password: string }) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_CHAT_APP_BASE_URL}/users`,
            data: {
                user_name, password
            }
        })

        return res.data
    }
    catch (err) {

        throw err
    }
}

export const putEditUser = async ({ password, user_name }: { user_name: string, password: string }) => {
    try {
        const res = await axios({
            headers: {
                Authorization: token,
            },
            method: 'put',
            url: `${process.env.REACT_APP_CHAT_APP_BASE_URL}/users`,
            data: {
                user_name, password
            }
        })
        return res.data
    }
    catch (err) {

        throw err
    }
}

export const getAllUsers = async (currentUser: number) => {
    try {
        const res = await axios({
            headers: {
                Authorization: token,
            },
            method: 'get',
            url: `${process.env.REACT_APP_CHAT_APP_BASE_URL}/users?id=${currentUser}`
        })
        return res.data
    }
    catch (err) {

        throw err
    }
}