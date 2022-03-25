import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
  //<React.StrictMode>
  //<App />               (3 cai dong nay co the thay the bang bat cua the html nao ma ta muon,roi sau do no se them cai the do vao trong the div co id='root',thuc ra dat ten la
  //gi cung duoc khong cu nhat thiet la root)
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
