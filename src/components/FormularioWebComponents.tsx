import React, { useState } from "react";
import { BrButton, BrInput } from "@govbr-ds-testing/webcomponents-react";
import MessageValidation from "./MessageValition";

const FormularioWebComponentsReactHook = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [formErrors, setFormErrors] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [formSend, setFormSend] = useState(false);

  const validateForm = () => {
    let errors = { nome: "", email: "", senha: "" };
    let isValid = true;

    if (nome.trim() === "") {
      errors.nome = "Campo obrigatório";
      isValid = false;
    }

    if (email.trim() === "") {
      errors.email = "Campo obrigatório";
      isValid = false;
    }

    if (senha.trim() === "") {
      errors.senha = "Campo obrigatório";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Call API to register data
      console.log(
        "Formulario enviado:",
        "Nome:",
        nome,
        "Email:",
        email,
        "Senha:",
        senha
      );

      setFormSend(true);
    }
  };

  return (
    <div className="App">
      {formSend === true && (
        <>
          Formulario enviado com sucesso!
          <div>
            <h5>Dados enviados:</h5>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <p>Senha: {senha}</p>
          </div>
        </>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <BrInput
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
            danger={formErrors.nome ? true : false}
          />

          {formErrors.nome && <MessageValidation message={formErrors.nome} />}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <BrInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            danger={formErrors.nome ? true : false}
          />
          <MessageValidation message={formErrors.email} />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <BrInput
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
            danger={formErrors.nome ? true : false}
          />
          <MessageValidation message={formErrors.senha} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginTop: "10px",
          }}
        >
          <BrButton
            type="reset"
            emphasis="secondary"
            style={{ marginRight: 10 }}
          >
            Cancelar
          </BrButton>
          <BrButton type="submit" emphasis="primary" onClick={handleSubmit}>
            Enviar Formulário
          </BrButton>
        </div>
      </form>
    </div>
  );
};

export default FormularioWebComponentsReactHook;
