import DividingCalculator from "./DividingCalculator";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <>
      <h1>Dividing Calculator</h1>
      <ErrorBoundary>
        <DividingCalculator />
      </ErrorBoundary>
    </>
  );
};
export default App;
