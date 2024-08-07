import logo from './logo.svg';
import './App.css';
import Propscomponents from './components/Propscomponents';


function App() {
  return (
    <div className="App">
    <Propscomponents name="aiza" age="28"/>
    <Propscomponents  name="alizeh" age="23">
     
      <p>hello everyone</p>
    </Propscomponents>
    </div>
  );
}

export default App;
