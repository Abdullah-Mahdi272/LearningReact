// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import AlertWithButton from "./components/AlertWithButton";
import Button from "./components/Button";
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
  return (
    <div>
      <Alert>My Alert</Alert>
      <Button color="dark" functionality={() => {}}>
        My Button
      </Button>
    </div>
  );
}

export default App;
