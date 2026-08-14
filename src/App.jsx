import "./App.css";

const Greeting = props => (<h1>Привіт, {props.name}</h1>)

const Message = props => (
  <h2>{props.text}</h2>
)

function App() {
  return (
    <>
      <Greeting name="Каріна" />
      <Message text="Рандомний текст"/>
    </>
  );
}

export default App;
