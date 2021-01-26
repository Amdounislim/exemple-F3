import React, { useState } from "react";

const Header = (props) => {
  const [myInput, setMyInput] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMyInput(e.target.value)} />
      <button onClick={()=>props.Add(myInput)}>ADD</button>
    </div>
  );
};

export default Header;
