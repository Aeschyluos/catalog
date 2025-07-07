import React from "react";
import {
  Popper,
  Paper,
  Box,
  Typography,
  IconButton,
  ClickAwayListener,
  Grow,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import CloseIcon from "@mui/icons-material/Close";

function CartDropdown({ anchorEl, open, onClose }) {
  const { cartItems, removeFromCart } = useCart();

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 10], // space between button and dropdown
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper elevation={3} sx={{ width: 300, p: 2 }}>
              <Typography variant="h6" mb={2}>
                Your Cart
              </Typography>

              {cartItems.length === 0 ? (
                <Typography variant="body2" mt={2}>
                  Cart is empty
                </Typography>
              ) : (
                cartItems.map(({ product, quantity }) => (
                  <Box
                    key={product.id}
                    display="flex"
                    justifyContent="space-between"
                    my={1}
                  >
                    <Typography>
                      {product.name} x {quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))
              )}
            </Paper>
          </Grow>
        )}
      </Popper>
    </ClickAwayListener>
  );
}

export default CartDropdown;
