import React, { useState } from 'react'
import Sidebar from './sidebar'
import { Button } from '@mui/material'
import { postLogout } from '../api/auth.api'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { postLogoutAsync, usersState } from '../slices/users.slice'
import Toast from '../common-components/toastify'
import Conversations from './conversations'

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const { myProfile } = useAppSelector(usersState)
  console.log(myProfile, 'myProfile')

  return (
    <>
      <div
        onClick={() => {
          dispatch(postLogoutAsync({ user_name: myProfile.user_name }))
        }}
        className="bg-[#black]  border border-white w-[80px] rounded-2xl overflow-hidden float-right flex items-center justify-center m-3"
      >
        <Button color="inherit" className="">
          Logout
        </Button>
      </div>
      <div className="flex justify-around">
        <Sidebar />
        <Conversations currentUser={6} oppositeUser={5} />
      </div>
    </>
  )
}

export default Dashboard
