import React from 'react'
import { IUsers } from '../models/users.model'

const ConversationHeader = ({ id, user_name }: IUsers) => {
  return (
    <div
      id={id + user_name}
      className="flex justify-center p-5 mb-2 h-[70px] bg-[#191a1d] items-start  "
    >
      <h1 className="font-semibold text-xl">{user_name}</h1>
    </div>
  )
}

export default ConversationHeader
