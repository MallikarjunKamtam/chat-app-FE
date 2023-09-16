import axios from "axios";
import { getToken } from "../utils";
import { IPostMessage } from "../models/messages.model";
const token = getToken()

export const getAllMessages = async ({ receiverId, senderId }: { senderId: number, receiverId: number }) => {
    try {
        const res = await axios({
            headers: {
                Authorization: token,
            },
            method: 'get',
            url: `${process.env.REACT_APP_CHAT_APP_BASE_URL}/messages/${senderId}/to/${receiverId}`,
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
            url: `${process.env.REACT_APP_CHAT_APP_BASE_URL}/messages`,
            data
        })

        return res.data
    }
    catch (err) {

        throw err
    }
}