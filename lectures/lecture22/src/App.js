import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";
import UserProfile from "./UserProfile";

// App component using both providers
function App() {
  return (
    <div style={{ padding: "1em 2em" }}>
      <AuthProvider>
        <ThemeProvider>
          <div>
            <h1>Multiple Contexts Example</h1>
            <UserProfile />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;