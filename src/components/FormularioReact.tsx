import { useState } from 'react';
import { BrButton } from '@govbr-ds-testing/webcomponents-react';

const FormularioReact = () => {
  const [nome, setNome] = useState('Natanael');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [formSend, setFormSend] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(
      'Formulario enviado:',
      'Nome:',
      nome,
      'Email:',
      email,
      'Senha:',
      senha
    );
    setFormSend(true);
  };

  const handleValueChange = (event: any) => {
    console.log('teste', event);
  };
  return (
    <div className="App">
      {formSend === true && (
        <>
          {/* <br-message state="success" show-icon> */}
          Formulario enviado com sucesso!
          {/* </br-message>
          <br-message state="info" show-icon> */}
          <div>
            <h5>Dados enviados:</h5>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <p>Senha: {senha}</p>
          </div>
          {/* </br-message> */}
        </>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onInput={(event: any) => {
              console.log('teste', event);
              setEmail(event.target.value);
            }}
            // onChange={(event) => {
            //   setEmail(event)
            // }}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            // onChange={(event) => {
            //   setSenha(event.target.value)
            // }}
            required
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            marginTop: '10px',
          }}
        >
          <BrButton
            type="submit"
            emphasis="secondary"
            id="limpar"
            style={{
              marginRight: 10,
            }}
          >
            Cancelar
          </BrButton>
          <BrButton
            className="mr-1"
            id="send"
            type="submit"
            emphasis="primary"
            onClick={handleSubmit}
          >
            Enviar Formulário
          </BrButton>
        </div>
      </form>
    </div>
  );
};

export default FormularioReact;
