import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  textDecoration: "underline",
  fontSize: 15,
  height: "40px",
  fontWeight: "bold",
  width: "100%",
}));

export default function LoginModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoginButton onClick={handleOpen}>Login</LoginButton>
      
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Login</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Please enter your credentials.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
