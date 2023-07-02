import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <Counter num={0} amount={2} />
      <Counter num={2} amount={2} />
      <Counter num={3} amount={2} />

    </div>
  );
}

export default App;
