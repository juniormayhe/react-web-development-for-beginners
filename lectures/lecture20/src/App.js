import React from 'react';
import List from './list';
import withFilter from './withFilter';

const FilteredList = withFilter(List);

function App() {
  const items = [
    { id: 1, text: 'Chocolate Lava Cake' },
    { id: 2, text: 'Chocolate Mousse' },
    { id: 3, text: 'Raspberry Tart' },
    { id: 4, text: 'Strawberry Cheesecake' },
  ];

  return <FilteredList items={items} />;
}

export default App;
