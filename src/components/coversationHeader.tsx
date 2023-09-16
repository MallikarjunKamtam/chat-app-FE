import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const ConversationHeader = ({ opponentName }: { opponentName }) => {
  return (
    <div className="flex justify-center p-5 mb-2 h-[70px] bg-[#191a1d] items-start  ">
      <h1 className="font-semibold text-xl">{opponentName}</h1>
    </div>
  )
}

export default ConversationHeader
