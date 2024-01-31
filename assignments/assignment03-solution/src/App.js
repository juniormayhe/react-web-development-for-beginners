import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';
import { AppBar, Button, Box, Container, CssBaseline, Stack, Typography } from '@mui/material';

function App() {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Recipes', path: '/recipes' },
  ];

  return (
    <Router>
      <Box>
        <CssBaseline />
        <AppBar position="static">
          <Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center" py={2}>
              <Typography variant="h6" component="div">
                Cooking Recipes 🥣
              </Typography>
              <Stack direction="row" spacing={2}>
                <nav>
                  {navItems.map((item, index) => (
                    <Button
                      key={item.label}
                      component={Link}
                      to={item.path}
                      color="inherit"
                    >
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </Stack>
            </Stack>
          </Container>
        </AppBar>

        <Container maxWidth="md">
          <Box sx={{ mt: 10, px: 4, py: 4, borderRadius: '0.5em', bgcolor: '#f0f0f0' }}>

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:recipeId" element={<RecipeDetails />} />

            </Routes>

          </Box>
        </Container>
      </Box>
    </Router >
  );
}

export default App;
