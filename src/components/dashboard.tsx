import React, { useState } from 'react'
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
const Dashboard = () => {
  const dispatch = useAppDispatch()
  const { myProfile } = useAppSelector(usersState)
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="flex">
        <div className="flex justify-start items-center w-10/12">
          <Sidebar />
          <Conversations currentUser={6} oppositeUser={5} />
        </div>
        <RightIcons myProfile={myProfile} setModalOpen={setModalOpen} />
      </div>
      <BasicModal
        open={isModalOpen}
        setOpen={setModalOpen}
        modalContent={<NewContactModalContent setModalOpen={setModalOpen} />}
      />
    </>
  )
}

export default Dashboard
