// TODO: remember to install Material UI framework in your application with:
// npm install @material-ui/core @material-ui/icons
// or
// yarn add @material-ui/core @material-ui/icons
import styles from "./InvoiceList.module.css";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/SendOutlined";
import DoneIcon from "@material-ui/icons/DoneOutline";

const InvoiceList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [invoices, setInvoices] = useState([
    { id: 1, number: "INV001", amount: 100.1, sent: false },
    { id: 2, number: "INV002", amount: 150.25, sent: false },
    { id: 3, number: "INV003", amount: 95.78, sent: false },
  ]);

  const handleSendClick = (invoice) => {
    setOpenModal(true);
    setSelectedInvoice(invoice);
  };

  const handleConfirmSend = () => {
    // Mark the invoice as sent
    const updatedInvoices = invoices.map((inv) =>
      inv.id === selectedInvoice.id ? { ...inv, sent: true } : inv
    );
    setInvoices(updatedInvoices);

    setSnackbarOpen(true);
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      {/* List of invoices */}
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>
                  <Typography color="textSecondary">
                    {invoice.number}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  ${invoice.amount.toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {invoice.sent ? (
                    <DoneIcon className={styles.invoiceDoneIcon} />
                  ) : (
                    <IconButton onClick={() => handleSendClick(invoice)}>
                      <SendIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for confirmation */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className={styles.modal}
      >
        <Box className={styles.modalContent}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h6" color="textPrimary">
                Confirm Send
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="initial">
              Do you want to send invoice{" "}
              <strong>{selectedInvoice?.number}</strong>?
            </Typography>
          </Grid>
          <Grid item className={styles.modalButtonsContainer}>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  onClick={handleConfirmSend}
                  variant="contained"
                  color="primary"
                >
                  Send
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleCloseModal}
                  variant="outlined"
                  color="secondary"
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Box className={styles.snackbarContent}>Invoice sent successfully</Box>
      </Snackbar>
    </div>
  );
};

export default InvoiceList;
