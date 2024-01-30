import { useEffect } from 'react';

function ExampleWithCleanup() {

  useEffect(() => {
    const onMouseMove = (event) => {
      console.log('Mouse position:', event.clientX, event.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    // cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };

  }, []); // empty dependency array to ensure the effect runs only once

  return <div>My component</div>;
}

export default ExampleWithCleanup;