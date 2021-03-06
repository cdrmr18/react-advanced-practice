import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}

      <h1>{text || 'Kathy'}</h1>
      <button className="btn" onClick={()=> setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error</p> : <h1>No errors</h1>}

      
    </div>
  )
};

export default ShortCircuit;
