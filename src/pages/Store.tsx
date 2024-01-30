import { Grid } from "@mui/material";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

export default function Store() {
  return (
    <Grid container spacing={1} paddingTop="10px">
      {storeItems?.map((item) => (
        <StoreItem key={item.id} {...item}></StoreItem>
      ))}
    </Grid>
  );
}
