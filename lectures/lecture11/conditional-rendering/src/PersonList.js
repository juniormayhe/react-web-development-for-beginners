import React from 'react';

function PersonList({ people }) {
  return (
    <ul>
      {people.map(person => (
        <li
          key={person.name}
          style={person.phone ? { backgroundColor: 'black', color: 'limegreen' } : {}}>
          {person.name} {person.phone ? `Phone: ${person.phone}` : 'Phone: not available'}
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
