import {
  Typography,
  Box,
  Divider,
  Button,
  Container,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function CheckOut() {
  const { clearCart } = useShoppingCart();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    clearCart();
    handleOpen();
    // Delayed execution after 2 seconds
    setTimeout(() => {
      // Execute your function after the delay
      navigate("/");
    }, 2000);
  };

  return (
    <Container
      sx={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="center">
        Checkout
      </Typography>
      <Divider sx={{ margin: "10px 0", width: "100%" }}></Divider>
      <Typography variant="h6" align="center" sx={{ padding: "20px 0 5px 0" }}>
        Shipping Address
      </Typography>

      {/* Form */}
      <Box
        onSubmit={handleSubmit}
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Name */}
        <Box
          sx={{
            display: "flex",
            paddingBottom: "10px",
          }}
        >
          <TextField
            required
            id="firstName"
            label="First Name"
            variant="outlined"
            sx={{ paddingRight: "10px" }}
          />
          <TextField
            required
            id="lastName"
            label="Last Name"
            variant="outlined"
          />
        </Box>
        {/* Phone Number */}
        <TextField
          required
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          fullWidth
          sx={{ paddingBottom: "10px" }}
        />
        {/* Address */}
        <TextField
          required
          id="address"
          label="Address"
          variant="outlined"
          fullWidth
          sx={{ paddingBottom: "10px" }}
        />
        {/* Post code and suburb */}
        <Box
          sx={{
            display: "flex",
            paddingBottom: "10px",
          }}
        >
          <TextField
            required
            id="postCode"
            label="Post Code"
            variant="outlined"
            sx={{ paddingRight: "5px" }}
          />
          <TextField required id="suburb" label="Suburb" variant="outlined" />
        </Box>
        {/* state */}
        <TextField
          required
          id="state"
          label="State"
          variant="outlined"
          fullWidth
        />
        {/* Payment */}
        <Typography
          variant="h6"
          align="center"
          sx={{ padding: "20px 0 5px 0" }}
        >
          Payment
        </Typography>
        {/* Card name */}
        <TextField
          required
          id="cardholderName"
          label="Cardholder Name"
          variant="outlined"
          fullWidth
          sx={{ paddingBottom: "10px" }}
        />
        {/* Card number */}
        <TextField
          required
          id="cartNumber"
          label="Card Number"
          variant="outlined"
          fullWidth
          sx={{ paddingBottom: "10px" }}
        />
        {/* Expiry date and CVV */}
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            required
            id="expiryDate"
            label="Expiry Date (MM/YY)"
            variant="outlined"
            fullWidth
            sx={{ paddingRight: "5px" }}
          />
          <TextField
            required
            id="cardCVV"
            label="CVV (###)"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ margin: "10px" }}
        >
          Place Order
        </Button>
      </Box>
      <Divider sx={{ margin: "10px 0", width: "100%" }}></Divider>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Order has been finished!
        </Alert>
      </Snackbar>
    </Container>
  );
}
