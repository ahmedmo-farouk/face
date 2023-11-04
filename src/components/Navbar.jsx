import React, { useState } from 'react'
import { AppBar, Toolbar,styled ,Typography, InputBase } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { Height } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});
const Search = styled("div")(({theme}) =>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%",
}));
const Icons = styled("Box")(({theme}) =>({
 display:"none",
 gap:"20px",
 alignItems:"center",
 [theme.breakpoints.up("sm")]:{
  display:"flex"
 }
}))
const UserBox = styled("Box")(({theme}) =>({
  display:"flex",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
   }
 }))

const Navbar = () => {
const [open , setOpen]= useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none" , sm:"block"}}} >LAMA DEV</Typography>
        <PetsIcon sx={{display:{xs :"block" , sm: "none" } } } />
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications  />
          </Badge>
          <Badge  >
            <Avatar sx={{width:30 ,height:30 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick={e=>setOpen(true)} />
          </Badge>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{width:30 ,height:30 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
          <Typography variant='span'>ahmed</Typography> 
        </UserBox>

      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
