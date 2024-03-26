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
    const errors = { nome: "", email: "", senha: "" };
    let isValid = true;
    console.log(errors, isValid);
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
    console.log("Formulario enviado", nome, email, senha);
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
        <div>
          <div
            style={{
              color: "white",
              fontSize: "12px",
              marginTop: "5px",
              border: "1px solid green",
              padding: "10px",
              backgroundColor: "green",
              borderRadius: "5px",
            }}
          >
            Formulario enviado com sucesso!
          </div>
          <div>
            <h5>Dados enviados:</h5>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <p>Senha: {senha}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <BrInput
            required
            id="nome"
            type="text"
            name="nome"
            value={nome}
            danger={formErrors.nome ? true : false}
            onValueChange={(event) => [
              setNome(event.target.value),
              validateForm(),
            ]}
          />

          {formErrors.nome && <MessageValidation message={formErrors.nome} />}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <BrInput
            required
            id="email"
            type="email"
            name="email"
            value={email}
            danger={formErrors.email ? true : false}
            onValueChange={(event) => [
              setEmail(event.target.value),
              validateForm(),
            ]}
          />
          {formErrors.email && <MessageValidation message={formErrors.email} />}
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <BrInput
            required
            id="senha"
            name="senha"
            value={senha}
            type="password"
            danger={formErrors.senha ? true : false}
            onValueChange={(event) => [
              setSenha(event.target.value),
              validateForm(),
            ]}
          />
          {formErrors.senha && <MessageValidation message={formErrors.senha} />}
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
