import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { supabase } from "../supabaseClient";
import Auth from '../auth/Auth'
import { cyan } from '@mui/material/colors';

export default function ButtonAppBar() {
  return (

    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="fixed" sx={{ bgcolor: cyan[200] }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clima
          </Typography>  
        
          <Button  color="inherit" onClick={Auth}>
        
            
            Holis
          </Button>
      
         
                        <Typography>


          <Button color="inherit" onClick={() => supabase.auth.signOut()}>
                            Salir
                        </Button>
                        </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
