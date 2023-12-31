import React from 'react'
import { IUsers } from '../models/users.model'

function ChatLine({
  listingUser,
  activeUser,
}: {
  listingUser: IUsers
  activeUser: IUsers
}) {
  return (
    <div
      className={`w-full rounded h-[70px]  text-lg cursor-pointer hover:bg-[#333] hover:text-xl border-b-[0.5px] border-[#444] flex items-center justify-between px-4 ${
        activeUser?.id === listingUser?.id ? 'bg-[#0c250c]' : 'bg-[#222]'
      }`}
    >
      <div className="flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src="https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-4.jpg"
          alt="Img"
        />
        <h1 className="ml-10">{listingUser?.user_name}</h1>
      </div>
      <div className="text-xs">10:12 PM</div>
    </div>
  )
}

export default ChatLine
