import { useState, MouseEvent } from 'react';
import {
  Typography,
  IconButton,
  Tooltip,
  Popover,
  Stack,
  List,
  ListItemButton,
  ListItem,
} from '@mui/material';
import {
  ShoppingCartItemList,
  ShoppingCartImage,
  ShoppingCartDescription,
  ShoppingCartActions,
} from '../styles/styledComponents';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ShoppingCartItem = () => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleActionsPopover = (event: MouseEvent<HTMLButtonElement>) => {
    setIsActionsOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const closeActionsPopover = () => {
    setIsActionsOpen(false);
    setAnchorEl(null);
  };

  return (
    <ShoppingCartItemList>
      <picture>
        <ShoppingCartImage
          src='https://media.revistagq.com/photos/61641b095c35f3d47d7c5454/1:1/w_1600%2Cc_limit/Metroid-Dread.jpeg'
          alt='Product image'
        />
      </picture>
      <ShoppingCartDescription>
        <ShoppingCartActions>
          <Typography variant='h5'>Item A</Typography>
          <IconButton onClick={handleActionsPopover}>
            <Tooltip title='Actions'>
              <MoreVertIcon />
            </Tooltip>
          </IconButton>
        </ShoppingCartActions>
        <Typography variant='h6'>$ 999</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          molestiae beatae esse delectus ratione ad, obcaecati corrupti eligendi
          ducimus accusantium.
        </Typography>
      </ShoppingCartDescription>
      <Popover
        id='123'
        open={isActionsOpen}
        anchorEl={anchorEl}
        onClose={closeActionsPopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <List>
          <ListItemButton>
            <ListItem sx={{ display: 'flex', gap: '12px' }}>
              <RemoveShoppingCartIcon />
              <Typography>Remove from Cart</Typography>
            </ListItem>
          </ListItemButton>
        </List>
      </Popover>
    </ShoppingCartItemList>
  );
};

export default ShoppingCartItem;
