import React, { useState } from 'react'

const BuggyCounter = () => {
    const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("Count reached 3 and crashed!");
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default BuggyCounter