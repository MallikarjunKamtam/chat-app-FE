import React, { useState, useEffect } from "react";
import BasicModal from "../common-components/modal";
import NewConversationsModalContent from "./newConversationsModalContent";
import NewContactModalContent from "./newContactModalContent";
import { getAllUsersAsync } from "../slices/users.slice";
import { useAppDispatch } from "../app/hooks";
const CONVERSATIONS = "Conversations";
const CONTACTS = "Contacts";
const tabsList = [CONVERSATIONS, CONTACTS];
const btnStyles =
  "border-2 p-4 border-white rounded w-full cursor-pointer hover:opacity-70 text-lg";

function Sidebar() {
  const dispatch = useAppDispatch()
  const [currentTab, setCurrentTab] = useState(CONVERSATIONS);
  const [isModalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    dispatch(getAllUsersAsync())
  }, [])
  return (
    <div className="p-4 w-1/3  h-screen flex flex-col   justify-between">

      <div className="flex items-start justify-center gap-1 w-full h-[800px]  ">
        {tabsList.map((item, index) => (
          <div
            onClick={() => {
              setCurrentTab(item);
            }}
            key={index}
            className={`${btnStyles} ${currentTab === item ? "bg-[#222]" : ""
              } `}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setModalOpen(true);
        }}
        className={btnStyles}
      >
        Create a new {currentTab.slice(0, -1)}{" "}
      </button>
      <BasicModal
        open={isModalOpen}
        setOpen={setModalOpen}
        modalContent={
          <>
            {currentTab === CONVERSATIONS ? (
              <NewConversationsModalContent setModalOpen={setModalOpen} />
            ) : (
              <NewContactModalContent setModalOpen={setModalOpen} />
            )}
          </>
        }
      />
    </div>
  );
}

export default Sidebar;
