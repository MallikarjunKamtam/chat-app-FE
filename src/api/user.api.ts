import axios from "axios";
import { REACT_APP_CHAT_APP_BASE_URL } from "../constants";


export const postCreateUser = async ({ password, user_name }: { user_name: string, password: string }) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${REACT_APP_CHAT_APP_BASE_URL}/users`,
            data: {
                user_name, password
            }
        })
    }
    catch (err) {

        throw err
    }
}

export const putEditUser = async ({ password, user_name }: { user_name: string, password: string }) => {
    try {
        const res = await axios({
            method: 'put',
            url: `${REACT_APP_CHAT_APP_BASE_URL}/users`,
            data: {
                user_name, password
            }
        })
    }
    catch (err) {

        throw err
    }
}

export const getAllUsers = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: `http://localhost:3002/users`,
        })

        return res
    }
    catch (err) {

        throw err
    }
}