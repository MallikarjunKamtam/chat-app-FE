import React from 'react'
import SendIcon from '@mui/icons-material/Send'

const ChatTextBox = ({
  sendMessage,
  setText,
  text,
}: {
  text
  setText
  sendMessage
}) => {
  return (
    <div className="w-full flex items-center justify-around ">
      <input
        value={text}
        onChange={(e) => {
          const { value } = e.target
          setText(value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendMessage(text)
          }
        }}
        className="w-11/12 text-black px-3 py-1  rounded"
        type="text"
      />{' '}
      <SendIcon
        onClick={() => {
          sendMessage(text)
        }}
        className=" border p-1 rounded-full  cursor-pointer"
      />
    </div>
  )
}

export default ChatTextBox
