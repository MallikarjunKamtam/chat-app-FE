import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { IUsers } from '../models/users.model'
import { getAllUsers, postCreateUser, putEditUser } from '../api/user.api'
import { postLogin, postLogout } from '../api/auth.api'
import { LoginCreds } from '../models/login.model'

// Define a type for the slice state
interface UsersInterface {
    allUsers: IUsers[]

    myProfile: { user_name: string }
}

// Define the initial state using that type
const initialState: UsersInterface = {
    allUsers: [],
    myProfile: {
        user_name: null
    }
}

export const getAllUsersAsync = createAsyncThunk('get-all-users',
    async () => {
        try {
            const res = await getAllUsers()
            return res
        } catch (err) { throw err }
    })



export const postLoginAsync = createAsyncThunk(
    '/post-login-user',
    async (
        payload: LoginCreds,
    ) => {
        try {
            const res = await postLogin(payload);
            return res;
        } catch (err) {
            // const errMsg = Utils.handleError(err?.message);
            // Toast(errMsg, { type: "error" });
            throw err;
        }
    }
);


export const postLogoutAsync = createAsyncThunk('post-logout-user',
    async (data: { user_name: string }) => {
        try {
            const res = await postLogout(data)
            return res
        } catch (err) { throw err }
    })




const usersSLice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
            state.allUsers = action.payload.data
        }).addCase(postLoginAsync.fulfilled, (state, action) => {
            // state.myProfile = { user_name: action.payload }
        })
    },
})

export const usersActions = usersSLice.actions

// Other code such as selectors can use the imported `RootState` type
export const usersState = (state: RootState) => state.users

export default usersSLice.reducer