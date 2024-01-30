import React from "react";
import CompanyLists from "../src/CompanyLists";

// ATTENTION: don't change the Component name "App"
function App() {
    const initialData = [
        {
            country: "USA",
            companies: ["Google", "Apple", "Microsoft"],
        },
        {
            country: "Germany",
            companies: ["Volkswagen", "Siemens", "Bayer"],
        },
        {
            country: "Japan",
            companies: ["Toyota", "Sony", "Nintendo"],
        },
    ];

    return (
        <div style={{ padding: "0em 1em" }}>
            <h1>Companies by country</h1>

            <CompanyLists initialData={initialData} />
        </div>
    );
}

export default App;
