import { Box, Button, Typography, Drawer, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CartItem } from "./CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CloseIcon from "@mui/icons-material/Close";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

// shopping cart
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, clearCart, cartItems } = useShoppingCart();

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeCart}>
      {/* Close Drawer icon */}
      <Button onClick={closeCart}>
        <CloseIcon color="inherit" />
      </Button>
      {/* Items */}
      <Box sx={{ margin: 1, minWidth: 340 }}>
        {cartItems.reduce((total, cartItem) => {
          return total + cartItem.quantity;
        }, 0) > 1 ? (
          <Typography
            variant="h5"
            sx={{ marginBottom: 1, textAlign: "center" }}
          >
            Your Cart (
            {cartItems.reduce((total, cartItem) => {
              return total + cartItem.quantity;
            }, 0)}
            &nbsp;
            {"Items"})
          </Typography>
        ) : (
          <Typography
            variant="h5"
            sx={{ marginBottom: 1, textAlign: "center" }}
          >
            Your Cart (
            {cartItems.reduce((total, cartItem) => {
              return total + cartItem.quantity;
            }, 0)}
            &nbsp;
            {"Item"})
          </Typography>
        )}

        {/* Divider */}
        <Divider />
        {cartItems?.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        {/* show all the items in this component */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          {/* Clear cart button: remove all items from the cart. */}
          {cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity;
          }, 0) > 0 ? (
            <Button
              onClick={clearCart}
              variant="outlined"
              sx={{ color: "grey" }}
            >
              Clear Cart
            </Button>
          ) : null}

          {/* Total price */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "20px" }}>Total Price:</Typography>
            <Typography sx={{ fontSize: "20px", paddingLeft: "5px" }}>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </Typography>
          </Box>
        </Box>

        {/* Check out button */}
        {cartItems.reduce((total, cartItem) => {
          return total + cartItem.quantity;
        }, 0) > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: 2,
            }}
          >
            <Button
              onClick={closeCart}
              component={NavLink}
              to="/checkout"
              variant="contained"
              fullWidth
            >
              Check Out
            </Button>
          </Box>
        ) : null}
      </Box>
    </Drawer>
  );
}
