import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BrButton, BrInput } from "@govbr-ds-testing/webcomponents-react";

const FormularioWebComponentsReactHook = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Call API or perform any other action with the form data
    console.log("Formulario enviado:", data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <>
                <BrInput
                  {...field}
                  type="text"
                  id="nome"
                  {...register("nome", { required: "Campo obrigatório" })}
                  max={undefined} // Fix: Set max prop to undefined
                  min={undefined} // Fix: Remove min prop
                />
                {errors.nome && (
                  <p>{String(errors?.nome?.message) || "Erro encontrado"}</p>
                )}
              </>
            )}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Campo obrigatório" })}
          />
          {errors.email && <p>{errors}</p>}
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <BrInput
            type="password"
            id="senha"
            {...register("senha", { required: "Campo obrigatório" })}
          />
          {errors.senha && <p>{errors.senha.message}</p>}
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
          <BrButton
            type="submit"
            emphasis="primary"
          >
            Enviar Formulário
          </BrButton>
        </div>
      </form>
    </div>
  );
};

export default FormularioWebComponentsReactHook;
