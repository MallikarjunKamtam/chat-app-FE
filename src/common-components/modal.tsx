import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function BasicModal({
  setOpen,
  open,
  modalContent,
}: {
  open: boolean;
  setOpen: (event: boolean) => void;
  modalContent: any;
}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {<div className="  min-w-[700px]  ">{modalContent}</div>}
        </Box>
      </Modal>
    </div>
  );
}
