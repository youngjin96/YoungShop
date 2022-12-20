import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Typography, Box, TextField, Button } from "@mui/material";

const Auth = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    
    const onChange = (e) => {
        if (e.target.id === "userId") {
            setUserId(e.target.value);
        } else {
            setUserPassword(e.target.value);
        }
    };

    const onClickLogin = () => {
        navigate("/");
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
                id="userId"
                label="ID"
                variant="outlined"
                sx={{
                    width: 300,
                    mt: 10,
                    "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#d3d3d3" } },
                    "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { borderColor: "black" } },
                    "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: "black" } }
                }}
                onChange={onChange}
            />
            <TextField
                id="userPassword"
                label="Password"
                type="password"
                variant="outlined"
                sx={{
                    width: 300,
                    mt: 2,
                    "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#d3d3d3" } },
                    "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { borderColor: "black" } },
                    "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: "black" } }
                }}
                
                onKeyUp={(e) => {
                    let searchQuery = e.target.value.toLowerCase();
                    setTimeout(() => {
                      if (searchQuery === e.target.value.toLowerCase()) {
                        setUserId(searchQuery);
                      }
                    }, 400);
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