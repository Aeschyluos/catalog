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
import { Add, Remove, Close as CloseIcon } from "@mui/icons-material";
import { useCart } from "../context/CartContext";

function CartDropdown({ anchorEl, open, onClose }) {
  const { cartItems, removeFromCart, addToCart } = useCart();

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
              offset: [0, 10],
            },
          },
        ]}
        sx={{ zIndex: 1100 }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper elevation={3} sx={{ width: 320, p: 2 }}>
              <Typography variant="h6" mb={2}>
                Your Cart
              </Typography>

              {cartItems.length === 0 ? (
                <Typography variant="body2">Cart is empty</Typography>
              ) : (
                cartItems.map(({ product, quantity }) => (
                  <Box
                    key={product._id}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    my={1}
                  >
                    <Box>
                      <Typography fontWeight="bold">{product.name}</Typography>
                      <Typography variant="body2">
                        Rp {(product.price * quantity).toLocaleString("id-ID")}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                      <IconButton
                        size="small"
                        onClick={() => addToCart(product, -1)}
                      >
                        <Remove fontSize="small" />
                      </IconButton>
                      <Typography>{quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => addToCart(product, 1)}
                      >
                        <Add fontSize="small" />
                      </IconButton>

                      <IconButton
                        size="small"
                        onClick={() => removeFromCart(product._id)}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </Box>
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
