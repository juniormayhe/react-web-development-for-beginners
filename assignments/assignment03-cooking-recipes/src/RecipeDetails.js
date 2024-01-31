import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function RecipeDetails() {

    /* Extract the recipe ID with a React Router hook here */
    const { recipeId } =

    /* Extract the location state with a React Router hook here */
    const { state } =

    // Assume you have a function to get the recipe details by recipe ID
    const getRecipeDetailsById = () => {
        // Return the recipe from the location object state 

    };

    const recipeDetails = getRecipeDetailsById(recipeId);

    return (
        <Box sx={{ bgcolor: 'white', borderRadius: '1em', padding: '1em' }}>
            <Typography><strong>Recipe ID:</strong> {recipeId}</Typography>
            <Typography><strong>Name:</strong> {recipeDetails.name}</Typography>
            <Typography><strong>Description:</strong> {recipeDetails.description}</Typography>
            <Button component={Link} to="/recipes" variant="outlined" sx={{ marginTop: '1em' }}>
                Go Back to Recipes
            </Button>
        </Box>
    );
}

export default RecipeDetails;
