import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid className='pt-5' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 ExcelR Store. All rights reserved.
        </Typography>
  
      </Grid>
    </Grid>
  );
};

export default Footer;
