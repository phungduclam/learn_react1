import React, { useState } from "react";

ColoerBox.propTypes = {};

function ColoerBox(props) {
  const [color, setColor] = useState("white"); //cai nay la mau khoi tao cua no

  return (
    <div>
      {/* render ra cai color */}
      {color}

      <button onClick={() => setColor("black")}>change to black</button>
      <button onClick={() => setColor("white")}>change to white</button>
    </div>
  );
}

export default ColoerBox;
