import './App.css';
import '@govbr-ds/core/dist/core.min.css';
import FormularioWebComponents from './components/FormularioWebComponents';
import ListComponents from './components/ListComponents';

function App() {
  return (
    <>
      <div>
        <hr />
        <h2>Formulario com react e web componentes com stenciljs</h2>
        <hr />
        <FormularioWebComponents />
        <hr />
        <h2>Teste dos novos web componentes com stenciljs - Individualmente</h2>
        <hr />
        <ListComponents />
      </div>
    </>
  );
}

export default App;
