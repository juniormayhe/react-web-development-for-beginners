# React Web Development for Beginners

This content is part of the [**React Web Development for Beginners**](https://www.udemy.com/course/react-web-development-for-beginners/).

## Assignment: Invoice Dispatcher App

### Introduction:

Welcome to the Invoice Dispatcher App project! In this assignment, you will build a simple React application for managing and dispatching invoices. The application allows you to view a list of invoices, mark them as sent, and receive a confirmation message.

### Instructions:

1. **Setup:**
   - Make sure you have Node.js installed on your machine.
   - Clone the provided code repository.
   - Install the required dependencies by running:
     ```
     npm install
     ```
     or
     ```
     yarn install
     ```

2. **Understanding the Code:**
   - Explore the provided code in `App.js` and `InvoiceList.js`.
   - Take note of the components, state variables, and Material UI components used in the application.

3. **Task 1: Implement Sending Invoices:**
   - In the `InvoiceList` component, implement the functionality to mark an invoice as sent when the "Send" button is clicked.
   - Utilize the `handleSendClick`, `handleConfirmSend`, and related state variables.

4. **Task 2: Modal Confirmation:**
   - Finish implementing the modal confirmation in the `InvoiceList` component.
   - Display a modal when the "Send" button is clicked to confirm the sending of the selected invoice.
   - Implement the "Send" and "Cancel" buttons in the modal.

5. **Task 3: Snackbar Notification:**
   - Implement a Snackbar notification that appears when an invoice is successfully sent.
   - Use the `Snackbar` component with the appropriate state variables and functions.

6. **Task 4: Styling (Optional):**
   - If you are comfortable with styling, enhance the visual appearance of the application using the provided CSS modules (`App.module.css` and `InvoiceList.module.css`).
   - Feel free to add your creative touch to improve the user interface.

7. **Testing:**
   - Test the application by running it locally with `yarn start`.
   - Ensure that clicking the "Send" button triggers the modal, and confirming the send updates the invoice list and displays the Snackbar.

### Submission:

- Zip your project folder (excluding `node_modules`) and submit it through the assigned platform.

### Additional Notes:

- Don't hesitate to refer to the Material UI documentation for any styling or component-related questions: [Material UI Documentation](https://mui.com/).
- Feel free to reach out if you have any questions or need clarification on any task. Happy coding!