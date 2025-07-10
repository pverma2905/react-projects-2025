import React from 'react'

const BuggyComponent = () => {
  throw new Error("I crashed on purpose!");
  return <div>This won't render</div>;
}

export default BuggyComponent