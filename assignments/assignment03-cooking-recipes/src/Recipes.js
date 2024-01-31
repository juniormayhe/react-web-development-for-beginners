import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Stack, Box } from '@mui/material';

function Recipes() {
    // notice this state is reset every time the page renders the recipe list,
    // when you are redirected from home or from details component.
    // you could move this state to a parent component to make it an application state.
    // in production like apps, this is usually set by a request to a service (API) or a database.
    const [recipes, setRecipes] = useState([
        { recipeId: 1, name: 'Recipe 1', description: 'This is Recipe 1' },
        { recipeId: 2, name: 'Recipe 2', description: 'This is Recipe 2' },
        { recipeId: 3, name: 'Recipe 3', description: 'This is Recipe 3' },
    ]);

    const navigate = useNavigate();

    const handleAddRecipe = () => {
        let maxRecipeId = Math.max(...recipes.map((recipe) => recipe.recipeId));
        const noMaxFound = !isFinite(maxRecipeId);
        if (noMaxFound) {
            maxRecipeId = 0;
        }

        const newRecipe = {
            recipeId: maxRecipeId + 1,
            name: `Recipe ${maxRecipeId + 1}`,
            description: `This is Recipe ${maxRecipeId + 1}`,
        };

        setRecipes([...recipes, newRecipe]);
    };

    const handleRemoveRecipe = (recipeId) => {
        // Add a logic to remove a recipe and update the recipes state

    };

    const handleRecipeDetails = (recipe) => {
        // Use the navigate function from the React Router useNavigate hook
        // to redirect user to the path /recipes/recipeId,
        // and pass the recipe as state to the RecipeDetails component.

    };


    return (
        <div>
            <Typography variant="h5" fontWeight="bold" pb={2}>Cooking Recipes</Typography>
            <Stack direction="row" gap={2} pb={2}>
                <Button variant="contained" onClick={handleAddRecipe}>
                    Add Recipe
                </Button>
            </Stack>


            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Recipe ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recipes.map((recipe) => (
                            <TableRow key={recipe.recipeId}>
                                <TableCell>{recipe.recipeId}</TableCell>
                                <TableCell>{recipe.name}</TableCell>
                                <TableCell>{recipe.description}</TableCell>
                                <TableCell>
                                    <Stack direction="row" gap={2}>
                                        <Button onClick={() => handleRecipeDetails(recipe)} variant="outlined">
                                            View Details
                                        </Button>
                                        {/* 
                                        This is an alternative way to navigate to the detail page, using react router dom Link component.
                                        <Button component={Link} to={`/recipes/${recipe.recipeId}`} variant="outlined">
                                            View Details
                                        </Button> */}
                                        <Button onClick={() => handleRemoveRecipe(recipe.recipeId)} variant="outlined">
                                            Remove
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box pt={2}>
                <Link to="/" >Go to Home</Link>
            </Box>
        </div>
    );
}

export default Recipes;
