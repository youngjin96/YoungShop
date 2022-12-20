import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const pages = ['Shop', 'Contact', 'Mypage'];

const NavBar = () => {
    const auth = useSelector(state => state.auth.value);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickLogo = () => {
        navigate('/');
    }

    const onClickMenu = (event) => {
        navigate(`/${event.target.name.toLowerCase()}`);
    }

    const onClickLogin = () => {
        navigate('/auth');
    }

    const onClickLogout = () => {
        dispatch({ type: 'signOut' });
    }

    return (
        <AppBar position="sticky" style={{ backgroundColor: "black" }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            name="/"
                            onClick={onClickLogo}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    ml: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'white',
                                    textTransform: 'none'
                                }}
                            >
                                YoungShop
                            </Typography>
                        </Button>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
                        <Button
                            name="/"
                            onClick={onClickLogo}
                        >
                            <Typography
                                variant="h5"
                                noWrap
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'white',
                                    textTransform: 'none'
                                }}
                            >
                                YoungShop
                            </Typography>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                name={page}
                                sx={{
                                    color: 'white',
                                    display: 'block',
                                    padding: 0,
                                    textTransform: 'none',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                }}
                                onClick={onClickMenu}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {auth ? (
                            <Button
                                onClick={onClickLogout}
                                sx={{
                                    textTransform: 'none',
                                    color: 'white',
                                    fontFamily: 'monospace',
                                    fontWeight: 700
                                }}
                            >
                                Logout
                            </Button>
                        ) : (
                                <Button
                                    name="login"
                                    onClick={onClickLogin}
                                    sx={{
                                        textTransform: 'none',
                                        color: 'white',
                                        fontFamily: 'monospace',
                                        fontWeight: 700
                                    }}
                                >
                                    Login
                                </Button>
                            )}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, }}>
                        {auth ? (
                            <IconButton
                                size="large"
                                aria-controls="menu-appbar"
                                color="inherit"
                                onClick={onClickLogout}
                            >
                                <LogoutRoundedIcon />
                            </IconButton>
                        ) : (
                                <IconButton
                                    size="large"
                                    aria-controls="menu-appbar"
                                    color="inherit"
                                    onClick={onClickLogin}
                                >
                                    <LoginRoundedIcon />
                                </IconButton>
                            )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;