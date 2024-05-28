import './App.css'
import HelloWorld from './HelloWorld'
import Pessoa from './Pessoa';
import SayMyName from './SayMyName';
import Frase from './Frase';
import Lista from './Lista';


function App() { 
  return (
    <div className='App'>
      <h1>Testando o index css</h1>
      <Frase />
      <Frase />
      <Pessoa nome="thiago" idade="20" profissao="Programado" foto="httpps://via.placeholder.com/150" />
     <Lista />
    </div>
  )
}

export default App;