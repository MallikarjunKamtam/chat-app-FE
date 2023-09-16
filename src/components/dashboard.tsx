import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import { Button, Tooltip } from '@mui/material'
import { postLogout } from '../api/auth.api'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { postLogoutAsync, usersState } from '../slices/users.slice'
import Toast from '../common-components/toastify'
import Conversations from './conversations'

import BasicModal from '../common-components/modal'
import NewContactModalContent from './newContactModalContent'
import RightIcons from './rightIcons'
import { IUsers } from '../models/users.model'
const Dashboard = () => {
  const dispatch = useAppDispatch()

  const { myProfile, allUsers } = useAppSelector(usersState)
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentChatUser, setCurrentChatUser] = useState<IUsers>({
    user_name: allUsers[0]?.user_name || null,
    id: allUsers[0]?.id || null,
  })

  useEffect(() => {
    if (allUsers?.length) {
      const defaultChatUser = allUsers[0]
      setCurrentChatUser({
        ...defaultChatUser,
      })
    }
  }, [allUsers?.length])

  return (
    <>
      <BasicModal
        open={isModalOpen}
        setOpen={setModalOpen}
        modalContent={
          <NewContactModalContent fetchAll={true} setModalOpen={setModalOpen} />
        }
      />

      <div className="flex">
        <div className="flex justify-start items-center w-10/12">
          <Sidebar
            currentChatUser={currentChatUser}
            setCurrentChatUser={setCurrentChatUser}
          />
          <Conversations
            currentUser={{ ...myProfile }}
            oppositeUser={currentChatUser}
          />
        </div>
        <div className="w-2/12">
          <RightIcons myProfile={myProfile} setModalOpen={setModalOpen} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
