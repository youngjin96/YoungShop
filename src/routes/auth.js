import { useRef } from "react";

import axios from "axios";

import { Typography, Box, TextField, Button } from "@mui/material";

const Auth = () => {
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    
    const onChangeId = (e) => { idRef.current = e.target.value; };

    const onChangePassword = (e) => { passwordRef.current = e.target.value; }

    const onClickLogin = () => {
        axios.post('http://localhost:5000/users/login', {
			id: idRef.current,
			password: passwordRef.current
		})
    };

    return (
        <Box sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '79vh' }}>
            <Typography
                variant="h3"
                noWrap
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textTransform: 'none'
                }}
            >
                YoungShop
            </Typography>
            <TextField
                ref={idRef}
                label="ID"
                variant="outlined"
                onChange={onChangeId}
                sx={{
                    width: 300,
                    mt: 10,
                    "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#d3d3d3" } },
                    "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { borderColor: "black" } },
                    "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: "black" } }
                }}
            />
            <TextField
                ref={passwordRef}
                label="Password"
                type="password"
                variant="outlined"
                onChange={onChangePassword}
                sx={{
                    width: 300,
                    mt: 2,
                    "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#d3d3d3" } },
                    "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { borderColor: "black" } },
                    "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: "black" } }
                }}
            />
            <Button
                onClick={onClickLogin}
                sx={{
                    width: 300,
                    mt: 4,
                    backgroundColor: "black",
                    color: "white",
                    ':hover': {
                        bgcolor: 'black',
                        color: 'white',
                    },
                }}
            >
                <Typography
                    noWrap
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        textTransform: 'none'
                    }}
                >
                    Login
                </Typography>
            </Button>
            <Typography
                variant="subtitle2"
                noWrap
                sx={{
                    mt: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    textTransform: 'none'
                }}
            >
                계정이 없으신가요? <a href="/member/join" style={{ color: "#4e4dec", textDecoration: "none" }}>회원가입</a>
            </Typography>
        </Box>
    )
}

export default Auth;