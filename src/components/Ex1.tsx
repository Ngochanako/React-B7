import React, { useEffect, useState } from 'react';

export default function Ex1() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count}</h1>
    </div>
  );
}
