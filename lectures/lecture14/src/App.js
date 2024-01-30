import logo from './logo.svg';
import './App.css';
import ExampleWithCleanup from './ExampleWithCleanup';
import ExampleOnPageLoad from './ExampleOnPageLoad';
import ExampleWithDependency from './ExampleWithDependency';
import ExampleWithTimer from './ExampleWithTimer';
import { useState } from 'react';

function App() {

  const [option, setOption] = useState(1);

  const handleSelectOption = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <div style={{ padding: '2em' }}>
      <button onClick={() => handleSelectOption(1)}>Example with cleanup</button>
      <button onClick={() => handleSelectOption(2)}>Example on page load</button>
      <button onClick={() => handleSelectOption(3)}>Example with dependency</button>
      <button onClick={() => handleSelectOption(4)}>Example with timer</button>

      <div style={{ paddingTop: '1em' }}>
        {option === 1 && <div>
          <ExampleWithCleanup />
        </div>}

        {option === 2 && <div>
          <ExampleOnPageLoad />
        </div>}

        {option === 3 && <div>
          <ExampleWithDependency />
        </div>}

        {option === 4 && <div>
          <ExampleWithTimer />
        </div>}
      </div>
    </div>
  );
}

export default App;
