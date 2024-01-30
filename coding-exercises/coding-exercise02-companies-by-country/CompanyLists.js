import React from "react";

// ATTENTION: don't change the Component name "CompanyLists"
const CompanyLists = ({ initialData }) => {
    let sortedCountries = [...initialData].sort((a, b) =>
        a.country.localeCompare(b.country)
    );

    sortedCountries = sortedCountries
        .sort((a, b) => a.country.localeCompare(b.country))
        .map((country) => ({
            ...country,
            companies: [...country.companies].sort((a, b) => a.localeCompare(b)),
        }));

    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    width: "500px",
                }}
            >
                <div>
                    <h2>Original</h2>
                    <ul style={{ border: "1px solid #000", paddingBottom: "1em" }}>
                        {initialData.map((country, index) => (
                            <li key={index}>
                                <h3>{country.country}</h3>
                                <ul>
                                    {country.companies.map((company, idx) => (
                                        <li key={idx}>{company}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>Sorted</h2>
                    <ul style={{ border: "1px solid #000", paddingBottom: "1em" }}>
                        {sortedCountries.map((country, index) => (
                            <li key={index}>
                                <h3>{country.country}</h3>
                                <ul>
                                    {country.companies.map((company, idx) => (
                                        <li key={idx}>{company}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CompanyLists;
