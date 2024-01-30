import { useShoppingCart } from "../context/ShoppingCartContext";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Card, CardMedia, Typography, Box, IconButton } from "@mui/material";

type CartItemProps = {
  id: number;
  quantity: number;
};

// cart item
export function CartItem({ id, quantity }: CartItemProps) {
  // use context to increase and decrease an item, or remove all items from cart
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  // find the specific item
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null; // if no item then return null

  // find the item then display it
  return (
    <Card
      sx={{
        marginBottom: 1,
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          margin: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          alt="product image"
          sx={{ width: 100, height: 100 }}
          image={item.imgUrl}
        ></CardMedia>

        {/* increase, decrease,and  remove */}
        <Box
          sx={{
            paddingLeft: 2,
          }}
        >
          <Typography sx={{ paddingTop: 1 }}>Item: {item.name}</Typography>
          <Typography>
            Price: {formatCurrency(item.price * quantity)}
          </Typography>
          <Typography>No.: {quantity}</Typography>
          <Box>
            {/* increase the number of item */}
            <IconButton
              aria-label="increase"
              color="primary"
              onClick={() => increaseCartQuantity(id)}
            >
              <AddCircleIcon />
            </IconButton>
            {/* remove all the items */}
            <IconButton
              aria-label="remove"
              color="error"
              onClick={() => removeFromCart(id)}
            >
              <HighlightOffIcon />
            </IconButton>
            {/* decrease the number of item */}
            <IconButton
              aria-label="decrease"
              color="error"
              onClick={() => decreaseCartQuantity(id)}
            >
              <RemoveCircleIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
