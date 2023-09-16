import React, { useState, useEffect } from 'react'
import BasicModal from '../common-components/modal'
import NewContactModalContent from './newContactModalContent'
import { getAllUsersAsync, usersState } from '../slices/users.slice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import ChatLine from '../common-components/chatListLine'
import { IUsers } from '../models/users.model'

const btnStyles =
  'border-2 p-4 border-white rounded w-full cursor-pointer hover:opacity-70 text-lg'

function Sidebar({
  setCurrentChatUser,
  currentChatUser,
}: {
  setCurrentChatUser: (e: IUsers) => void
  currentChatUser: IUsers
}) {
  const dispatch = useAppDispatch()
  const { allUsers, myProfile } = useAppSelector(usersState)

  useEffect(() => {
    if (myProfile?.id) {
      dispatch(getAllUsersAsync(myProfile?.id))
    }
  }, [myProfile?.id])

  return (
    <div
      style={{ height: '95vh' }}
      className=" px-3 w-1/3   flex flex-col mt-5   justify-start items-start gap-1  overflow-auto  "
    >
      {allUsers?.map((user, index) => (
        <div
          onClick={() => {
            setCurrentChatUser({ ...user })
          }}
          key={index + 'user-item'}
          className="w-full "
        >
          <ChatLine activeUser={currentChatUser} listingUser={{ ...user }} />
        </div>
      ))}
    </div>
  )
}

export default Sidebar
