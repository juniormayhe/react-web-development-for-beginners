import GoodComponent from "./GoodComponent";
import BadComponent from "./BadComponent";
import ErrorFallback from "./ErrorFallback";
//import CustomErrorBoundary from "./CustomErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    <div style={{ padding: "2em" }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BadComponent />
      </ErrorBoundary>
      <GoodComponent />
    </div>
  );
}
export default App;
