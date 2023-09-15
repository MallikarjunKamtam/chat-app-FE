import axios from "axios";
import { REACT_APP_CHAT_APP_BASE_URL } from "../constants";
import { getToken } from "../utils";
import { IPostMessage } from "../models/messages.model";
const token = getToken()

export const getAllMessages = async (id: number) => {
    try {
        const res = await axios({
            headers: {
                Authorization: token,
            },
            method: 'get',
            url: `${REACT_APP_CHAT_APP_BASE_URL}/messages/${id}`,
        })

        return res.data
    }
    catch (err) {
        throw err
    }
}


export const postSendMessage = async (data: IPostMessage) => {
    try {
        const res = await axios({
            headers: {
                Authorization: token,
            },
            method: 'post',
            url: `${REACT_APP_CHAT_APP_BASE_URL}/messages`,
            data
        })

        return res.data
    }
    catch (err) {

        throw err
    }
}