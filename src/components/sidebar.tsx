import React, { useState, useEffect } from 'react'
import BasicModal from '../common-components/modal'
import NewContactModalContent from './newContactModalContent'
import { getAllUsersAsync, usersState } from '../slices/users.slice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import ChatLine from '../common-components/chatListLine'

const btnStyles =
  'border-2 p-4 border-white rounded w-full cursor-pointer hover:opacity-70 text-lg'

function Sidebar() {
  const dispatch = useAppDispatch()
  const { allUsers } = useAppSelector(usersState)
  useEffect(() => {
    dispatch(getAllUsersAsync())
  }, [])
  return (
    <div
      style={{ height: '95vh' }}
      className="p-4 w-1/3   flex flex-col mt-5   justify-start items-center gap-1  overflow-auto"
    >
      {allUsers?.map((user, index) => (
        <div key={index + 'user-item'} className="w-full ">
          <ChatLine name={user.user_name} />
        </div>
      ))}
    </div>
  )
}

export default Sidebar
