import React, { useState } from "react";

Counter.propTypes = {};

function Counter(props) {
  const [cout, setCount] = useState(0);

  return (
    <div>
      {cout}
      <button onClick={() => setCount((x) => x + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
