import React, { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getAllMessagesAsync,
  messagesState,
  postSendMessageAsync,
} from '../slices/messages.slice'
import moment from 'moment'

import ConversationHeader from './coversationHeader'
import ChatTextBox from './chatTextBox'

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
  }, [text, messages])

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
    <div
      style={{ height: '95vh' }}
      className="flex flex-col  justify-between pt-2 pb-5 w-2/3 bg-[#222] relative rounded "
    >
      <ConversationHeader opponentName={'Arjun'} />
      <section className=" flex flex-col justify-end  mx-2    ">
        <div
          style={{ height: '80vh' }}
          ref={scrollableDivRef}
          className="overflow-scroll     justify-end w-full"
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
        <ChatTextBox sendMessage={sendMessage} setText={setText} text={text} />
      </section>
    </div>
  )
}

export default Conversations
