import { Box, Typography } from '@mui/material';
import { FooterStyle } from '../styles/styledComponents';

const Footer = () => {
  return (
    <FooterStyle>
      <Box sx={{ padding: '24px 28px' }}>
        <Typography>Footer</Typography>
      </Box>
    </FooterStyle>
  );
};

export default Footer;
