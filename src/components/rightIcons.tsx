import { Tooltip } from '@mui/material'
import React from 'react'
import { postLogoutAsync } from '../slices/users.slice'
import LogoutIcon from '@mui/icons-material/Logout'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useAppDispatch } from '../app/hooks'

const RightIcons = ({
  myProfile,
  setModalOpen,
}: {
  myProfile
  setModalOpen
}) => {
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col justify-start items-end w-[80px] gap-10 mt-10">
      <Tooltip title="Add contact" placement="bottom-start">
        <div
          onClick={() => {
            setModalOpen(true)
          }}
          className=""
        >
          <AddCircleOutlineIcon role="button" fontSize="large" />
        </div>
      </Tooltip>

      <Tooltip title="Logout" placement="bottom-start">
        <div
          onClick={async () => {
            await dispatch(postLogoutAsync({ user_name: myProfile.user_name }))
          }}
          className=""
        >
          <LogoutIcon role="button" fontSize="large" />
        </div>
      </Tooltip>
    </div>
  )
}

export default RightIcons
