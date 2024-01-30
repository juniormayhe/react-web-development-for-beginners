Here is a code exercise that will help you get used to `useState` hook and reinforce event handling. You will be importing a component, setting up state, handling button clicks, and displaying quotes from the array based on the current state.

# Instructions for App.js file

1. Locate the `App.js` file.

2. Import the `QuoteGenerator` component from the "../src/QuoteGenerator.js" file.

3. Render the `QuoteGenerator` component inside the App function.

4. Make sure to return the `QuoteGenerator` component within the `App` function.

5. Ensure that the `App` component is exported as the default export.

# Instructions for QuoteGenerator.js file

1. Open the `QuoteGenerator.js` file.

2. Import necessary components from React and set up the initial state using `useState`.

3. Keep the quotes constant that holds an array of strings (quotes).

4. Keep the functional component named `QuoteGenerator`.

5. Inside the `QuoteGenerator` component, ensure the `currentQuoteIndex` state is using the `useState` hook to initialize it with `0`.

6. Complete the `handleClick` function to update the `currentQuoteIndex` with the newly generated random index. The random index is ready and you don't need to change it. It will pick a random index within the range of the `quotes` array length when the button is clicked. 

7. Complete the `useEffect` function to update the authorImage, using the `currentQuoteIndex` state in `quotes` array.

8. Display the quote from the `quotes` array based on the `currentQuoteIndex` state.

9. Display the image from the `quotes` array based on the `currentQuoteIndex` state.

10. Ensure the `onClick` event handler is attached to the button to trigger the `handleClick` function.

11. Ensure the `QuoteGenerator` component is exported with default export at the end of the file.