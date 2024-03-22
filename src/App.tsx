import './App.css';
import '@govbr-ds/core/dist/core.min.css';
import FormularioReact from './components/FormularioReact';
import FormularioWebComponents from './components/FormularioWebComponents';
import ListComponents from './components/ListComponents';

function App() {
  return (
    <>
      <div>
        <h2>Formulario Padrao do React</h2>
        <hr />
        <FormularioReact />
        <hr />
        <h2>Formulario com react e web componentes</h2>
        <hr />
        <FormularioWebComponents />
        <hr />
        <h2>Teste dos novos web componentes - Individualmente</h2>
        <hr />
        <ListComponents />
      </div>
    </>
  );
}

export default App;
