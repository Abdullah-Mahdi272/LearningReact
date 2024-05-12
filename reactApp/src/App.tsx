import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //items = [];
  //const ifEmpty = items.length === 0 ? <p>No item found</p> : null;
  // const ifEmpty = () => {
  //   return items.length === 0 && <p>No item found</p>;
  // };
  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
