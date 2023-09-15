import React, { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getAllMessagesAsync,
  messagesState,
  postSendMessageAsync,
} from '../slices/messages.slice'
import moment from 'moment'
import SendIcon from '@mui/icons-material/Send'
import { scrollTopAction } from '../utils'

const Conversations = ({
  currentUser,
  oppositeUser,
}: {
  currentUser: number
  oppositeUser: number
}) => {
  const scrollableDivRef = useRef(null)
  const dispatch = useAppDispatch()
  const { messages } = useAppSelector(messagesState)
  const [text, setText] = useState('')

  useEffect(() => {
    dispatch(getAllMessagesAsync(currentUser))
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [text])

  const scrollToBottom = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight
    }
  }

  const sendMessage = (text: string) => {
    text &&
      dispatch(
        postSendMessageAsync({
          content: text,
          sender: oppositeUser,
          receiver: currentUser,
        }),
      )

    setText('')
  }

  return (
    <section className="w-1/2 bg-[#222]  my-10 rounded flex flex-col justify-end  p-2  relative ">
      <div
        ref={scrollableDivRef}
        className="overflow-scroll  h-[700px]   mb-10 justify-end w-full"
      >
        {messages?.map((message, index) => (
          <div
            key={index + message?.created_at}
            className={`text-start text-xs p-3  text-white mb-1 rounded w-fit max-w-lg ${
              currentUser === message?.sender?.id
                ? 'bg-[#111d0a] self-end'
                : 'bg-[#081b17]'
            }`}
          >
            {message?.content}
            <p className="italic mt-4 text-end">
              {moment(+message?.created_at).format('h:mm A')}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-around absolute">
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
          className="w-11/12 text-black px-3 py-1 mt-3 rounded"
          type="text"
        />{' '}
        <SendIcon className=" border p-1 rounded-full mt-3 cursor-pointer" />
      </div>
    </section>
  )
}

export default Conversations
