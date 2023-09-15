import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
const NewConversationsModalContent = ({
  setModalOpen,
}: {
  setModalOpen: any;
}) => {
  return (
    <div className=" h-[300px]     ">
      <div className=" flex  p-3 cursor-pointer justify-end w-full">
        <CloseIcon
          onClick={() => {
            setModalOpen(false);
          }}
        />
      </div>
      <div className="pt-4  m-auto w-3/4 flex items-stretch flex-col gap-4 ">
        <TextField
          label="Id"
          className="font-bold"
          onChange={(e) => {
            const { value } = e.target;
          }}
          id="login-id"
          variant="outlined"
        />
        <TextField
          label="Name"
          className="font-bold"
          onChange={(e) => {
            const { value } = e.target;
          }}
          id="login-id"
          variant="outlined"
        />
        <Stack spacing={2} direction="row">
          <Button onClick={() => {}} variant="contained">
            Create
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default NewConversationsModalContent;
