import React from 'react'

function ChatLine({ name }: { name: string }) {
  return (
    <div className="w-full rounded h-[70px] bg-[#222] text-lg cursor-pointer hover:bg-[#333] hover:text-xl border-b-[0.5px] border-[#444] flex items-center justify-between px-4">
      <div className="flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src="https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-4.jpg"
          alt="Img"
        />
        <h1 className="ml-10">{name}</h1>
      </div>
      <div className="text-xs">10:12 PM</div>
    </div>
  )
}

export default ChatLine
