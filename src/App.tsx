import "./App.css";
import {Nav, Title} from "./Styles";
import Switch from "./components/switch/Switch";
import {useApp} from "./useApp";

function App() {
  const {changeLenguage, lenguage} = useApp();
  return (
    <>
      <Nav tabIndex={0}>
        <Switch onChange={changeLenguage} label={lenguage.name} />
      </Nav>
      <Title tabIndex={0} aria-label="Films App">
        Films App
      </Title>
      <app-film-item></app-film-item>
      <app-film-list></app-film-list>
    </>
  );
}

export default App;
