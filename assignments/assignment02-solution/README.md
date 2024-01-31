# React Web Development for Beginners

This content is part of the [**React Web Development for Beginners**](https://www.udemy.com/course/react-web-development-for-beginners/).

## Assignment: Dividing Calculator App

### Introduction:

Welcome to the Dividing Calculator App project! In this assignment, you will build a React application that calculates the result of dividing numerators by denominators, with error handling for division by zero.

### Instructions:

1. **Setup:**
   - Clone the provided code repository.
   - Install the required dependencies by running:
     ```bash
     npm install
     ```
     or
     ```bash
     yarn install
     ```

2. **Understanding the Code:**
   - Explore the provided code in `App.js`, `DividingCalculator.js`, and `ErrorBoundary.js`.
   - Take note of the components, state variables, and the `divide` function used for division.

3. **Task 1: Implement Division Logic:**
   - In the `DividingCalculator` component, implement the division logic using the `divide` function.
   - Calculate the division result for each pair of numerators and denominators.
   - Display the results on the page.

4. **Task 2: Error Handling:**
   - Implement error handling for division by zero using the provided `ErrorBoundary` component.
   - If a division by zero occurs, display an error message in the `ErrorBoundary` component.
   - Test the error boundary by intentionally setting a denominator to zero in the dataset.

5. **Task 3: Dataset Selection:**
   - Modify the `DividingCalculator` component to dynamically select a dataset based on the `datasetKey` state variable.
   - The dataset should contain both "good" and "bad" pairs of numerators and denominators.

6. **Task 4: Styling (Optional):**
   - If you are comfortable with styling, enhance the visual appearance of the application using CSS.
   - Ensure the error message is clearly visible, and the results are presented in a user-friendly manner.

7. **Testing:**
   - Test the application by running it locally with `yarn start`.
   - Verify that the division results are displayed correctly.
   - Verify that the error boundary catches and handles errors appropriately.

### Submission:

- Zip your project folder (excluding `node_modules`) and submit it through the assigned platform.

### Additional Notes:

- Feel free to explore additional features or improvements to the application.
- Don't hesitate to reach out if you have any questions or need clarification on any task. Happy coding!