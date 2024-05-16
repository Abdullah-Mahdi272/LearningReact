// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

import { useState } from "react";
// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   //items = [];
//   //const ifEmpty = items.length === 0 ? <p>No item found</p> : null;
//   // const ifEmpty = () => {
//   //   return items.length === 0 && <p>No item found</p>;
//   // };
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//     </div>
//   );
// }

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        color="dark"
        functionality={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
