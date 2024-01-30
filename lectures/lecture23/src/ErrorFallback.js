const ErrorFallback = ({ error }) => (
    <div
        style={{
            color: "red",
            border: "1px solid red",
            borderRadius: "1em",
            padding: "0 1em",
            margin: "1em 0",
        }}
    >
        <h2>😢 Something went wrong</h2>
        <p>{error.message ?? "Unknown error"}</p>
    </div>
);

export default ErrorFallback;
