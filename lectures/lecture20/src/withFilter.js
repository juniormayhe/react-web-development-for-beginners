// withFilter.js
import React, { useState } from 'react';

function withFilter(Component) {
    return function FilteredComponent(props) {
        const [searchTerm, setSearchTerm] = useState('');

        const handleSearch = (event) => {
            setSearchTerm(event.target.value);
        };

        const filteredItems = props.items.filter((item) =>
            item.text.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter search term"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Component {...props} items={filteredItems} />
            </div>
        );
    };
}

export default withFilter;
