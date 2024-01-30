import React from "react";
import InvoiceList from "./InvoiceList";
import { Box, Container, Typography } from "@material-ui/core";
import styles from "./App.module.css";

// ATTENTION: don't change the Component name "App"
function App() {
  return (
    <Box className={styles.app}>
      <Container maxWidth="sm" className={styles.container}>
        <Typography color="primary" variant="h4">
          📃 Invoice Dispatcher
        </Typography>
        <InvoiceList />
      </Container>
    </Box>
  );
}

export default App;
