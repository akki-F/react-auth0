import './App.css'
import { Box, Button } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  return (
    <>
      <Box sx={{ textAlign: "left" }}>{import.meta.env.VITE_AUTH0_ISSUER_BASE_URL}</Box>
      <Box sx={{ textAlign: "left" }}>{user?.name}</Box>
      <Button onClick={handleLogout} >logout</Button>
    </>
  )
}

export default Home
