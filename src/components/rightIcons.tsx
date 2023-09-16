import { Tooltip } from '@mui/material'
import React from 'react'
import { postLogoutAsync } from '../slices/users.slice'
import LogoutIcon from '@mui/icons-material/Logout'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useAppDispatch } from '../app/hooks'
import { IUsers } from '../models/users.model'

const RightIcons = ({
  myProfile,
  setModalOpen,
}: {
  myProfile: IUsers
  setModalOpen
}) => {
  const dispatch = useAppDispatch()
  return (
    <div
      style={{ height: '95vh' }}
      className="flex flex-col justify-between py-10 items-center w-full gap-10 mt-10  "
    >
      <div className="w-full flex items-center flex-col justify-center gap-3 font-bold underline">
        <img
          className="w-[150px] h-[150px] rounded-full"
          src="https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-4.jpg"
          alt="Img"
        />
        <h3 className="">{myProfile?.user_name}</h3>
      </div>
      <div className="flex w-full justify-around">
        <Tooltip title="Add contact" placement="bottom-start">
          <div
            onClick={() => {
              setModalOpen(true)
            }}
            className=" hover:border-[black] hover:text-black font-bold flex items-center gap-2 border rounded p-3 cursor-pointer"
          >
            <AddCircleOutlineIcon role="button" fontSize="small" /> Add contact
          </div>
        </Tooltip>
        <Tooltip title="Logout" placement="bottom-start">
          <div
            onClick={async () => {
              await dispatch(
                postLogoutAsync({ user_name: myProfile.user_name }),
              )
            }}
            className=" hover:border-[black] hover:text-black font-bold flex items-center gap-2 border rounded p-3 cursor-pointer"
          >
            <LogoutIcon role="button" fontSize="small" />
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default RightIcons
