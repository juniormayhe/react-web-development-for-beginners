import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function Home() {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" fontWeight="bold" pb={2} >Welcome to Cooking Recipes 🥣</Typography>

            <Link to="/recipes">Go to Recipes</Link>
        </Box>
    );
}

export default Home;
