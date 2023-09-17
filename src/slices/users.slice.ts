import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { IUsers } from '../models/users.model'
import { getAllUsers, postCreateUser, } from '../api/user.api'
import { postLogin, postLogout, verifyUser } from '../api/auth.api'
import { LoginCreds } from '../models/login.model'
import Toast from '../common-components/toastify'

// Define a type for the slice state
interface UsersInterface {
    allUsers: IUsers[]
    myProfile: IUsers
}

// Define the initial state using that type
const initialState: UsersInterface = {
    allUsers: [],
    myProfile: {
        user_name: null,
        id: null
    }
}

export const getAllUsersAsync = createAsyncThunk('get-all-users',
    async (currentUser: number) => {
        try {
            const res = await getAllUsers(currentUser)
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
        } catch (err: any) {
            if (err.response.status === 401) {
                Toast('Bad credentials', { type: "error" })
            }
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


export const verifyUserAsync = createAsyncThunk(
    'verify-user',
    async (token: string) => {
        try {
            const res = await verifyUser(token)
            return res
        } catch (err) { throw err }
    })



export const postCreateUserAsync = createAsyncThunk('post-create-user',
    async (data: { user_name: string, password: string, fetchAll: boolean, currentUser?: number }, { dispatch, getState }) => {
        try {

            const res = await postCreateUser(data)
            data?.fetchAll && dispatch(getAllUsersAsync(data?.currentUser))
            return res
        } catch (err: any) {
            Toast(err.response.data.message, { type: "error" })
        }
    })




const usersSLice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
            state.allUsers = action.payload
        }).addCase(postCreateUserAsync.fulfilled, (state, action) => {
            Toast('Created successfully', { type: 'success' })
        }).addCase(verifyUserAsync.fulfilled, (state, action) => {
            state.myProfile = { id: action.payload.user.id, user_name: action.payload.user.user_name }
        })
    },
})

export const usersActions = usersSLice.actions

// Other code such as selectors can use the imported `RootState` type
export const usersState = (state: RootState) => state.users

export default usersSLice.reducer