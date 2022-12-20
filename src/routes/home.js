import { useDispatch } from "react-redux";

import { Box, Button } from "@mui/material";

import NavBar from "../components/navBar";

const Home = () => {
    const dispatch = useDispatch();

    const a = () => {
		dispatch({ type: 'signIn' });
	}

    return (
        <>
            <NavBar />
            <div>
                <Box style={{height: "150vh"}}>
                    <Button onClick={a}>
                        login
                    </Button>
                </Box>
            </div>
        </>
    )
};

export default Home;