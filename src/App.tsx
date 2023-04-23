import React from "react";
import OrderedList from "./components/OrderedList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <OrderedList data={data} />
      </div>
    </div>
  );
}

export default App;

const data = [
  { id: "1", title: "string1", order: 1 },
  { id: "2", title: "string2", order: 2 },
  { id: "3", title: "string3", order: 3 },
  { id: "4", title: "string4", order: 4 },
];
