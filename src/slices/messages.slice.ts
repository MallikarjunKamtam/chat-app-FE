import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import Toast from '../common-components/toastify'
import { getAllMessages, postSendMessage } from '../api/messages.api'
import { IPostMessage } from '../models/messages.model'


interface IMessage {
    auto_id: number,
    id: string,
    content: string,
    created_at: string
    sender: {
        id: number,
        user_name: string,
    },
    receiver: {
        id: number,
        user_name: string,
    }
}


const initialState: { messages: IMessage[] } = {
    messages: []
}



export const getAllMessagesAsync = createAsyncThunk(
    '/get-all-messages-by-user',
    async (
        payload: number,
    ) => {
        try {
            const res = await getAllMessages(payload);
            return res;
        } catch (err: any) {

        }
    }
);


export const postSendMessageAsync = createAsyncThunk(
    '/post-messages-by-user',
    async (
        payload: IPostMessage, { dispatch }
    ) => {
        try {
            const res = await postSendMessage(payload);
            dispatch(getAllMessagesAsync(payload?.receiver))
            return res;
        } catch (err: any) {
        }
    }
);

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getAllMessagesAsync.fulfilled, (state, action) => {
            state.messages = action.payload
        })
    },
})

export const messagesActions = messagesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const messagesState = (state: RootState) => state.messages

export default messagesSlice.reducer