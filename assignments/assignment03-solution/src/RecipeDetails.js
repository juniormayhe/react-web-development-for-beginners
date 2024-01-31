import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function RecipeDetails() {
    const { recipeId } = useParams();
    const { state } = useLocation();

    // Assume you have a function to get the recipe details by recipe ID
    const getRecipeDetailsById = () => {
        return state;
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
