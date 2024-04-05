# React + Web Components Stenciljs + Vite

Este projeto visa mostrar o uso dos web componentes do dsgov que foram construidos com stenciljs.

Fique a vontade para fazer um fork ou adicionar novas alterações.

## Instalação

Para instalar as bibliotecas `@govbr-ds-testing/webcomponents` e `@govbr-ds-testing/webcomponents-react`, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em seu sistema. Caso não tenha, você pode baixá-los e instalá-los a partir do site oficial: [Node.js](https://nodejs.org/).

2. Abra o terminal ou prompt de comando em seu sistema operacional.

3. Execute o seguinte comando para instalar a biblioteca `@govbr-ds-testing/webcomponents`:

    ```bash
    npm install @govbr-ds-testing/webcomponents 
    ```

    ```bash
    npm install @govbr-ds-testing/webcomponents-react
    ```

## Como usar

1. Importe o componente desejado em seu arquivo JavaScript/TypeScript onde você deseja utilizá-lo:

    ```bash
    import { BrButton } from '@govbr-ds-testing/webcomponents-react';
    ```

2. Em seguida, você pode utilizar o componente BrButton em seu código JSX/TSX da seguinte maneira:

    ```bash
    <BrButton type="submit" emphasis="primary">
        Enviar Formulário
    </BrButton>
    ```
    Certifique-se de substituir "primary" pela variante desejada do botão, como "secondary", "tertiary", entre outras opções disponíveis na documentação da biblioteca.

## Observações

Ao utilizar os web componentes do govbr no react voce deve se atentar ao seguinte. Os eventos de api sao diferentes, para entender melhor criamos a tabela abaixo:

Tabela comparativa entre `onChange` no React padrão e `OnValueChange` nos web componentes do govbr:

| Funcionalidade         | `onChange` no React padrão                                    | `OnValueChange` nos web componentes do govbr                  |
|------------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| Propósito              | Captura eventos de alteração em elementos de formulário.     | Captura eventos de alteração em elementos de formulário.     |
| Uso                    | Principalmente usado em componentes controlados.              | Principalmente usado em componentes não controlados.          |
| Tipo de evento         | Dispara quando o valor do elemento é alterado pelo usuário.   | Dispara quando o valor do elemento é alterado pelo usuário.   |
| Componentes suportados | Pode ser usado em qualquer componente de formulário.          | Específico para os web componentes do govbr.                  |
| Sintaxe                | `<input onChange={handleChange} />`                          | `<gov-input OnValueChange={handleValueChange} />`            |
| Manipulação de estado  | Requer atualização manual do estado do componente.            | Atualiza automaticamente o estado do componente.             |
| Compatibilidade        | Funciona com qualquer biblioteca/framework JavaScript.         | Específico para o uso com os web componentes do govbr.       |
| Vantagens              | Oferece maior controle sobre o estado do componente.           | Simplifica a integração com os web componentes do govbr.     |
| Desvantagens           | Pode exigir mais código para gerenciar o estado.              | Menos flexível em termos de controle direto do estado.        |

Essa tabela compara as principais diferenças e semelhanças entre `onChange` no React e `OnValueChange` nos web componentes do govbr, destacando suas características, usos e vantagens/desvantagens.


## Como Contribuir

Se você deseja contribuir com melhorias ou correções para as bibliotecas @govbr-ds-testing/webcomponents e @govbr-ds-testing/webcomponents-react, siga as diretrizes de contribuição disponíveis no repositório oficial da biblioteca no GitLab.

## Autor

Serpro.

## Licença

As bibliotecas @govbr-ds-testing/webcomponents e @govbr-ds-testing/webcomponents-react estão disponíveis sob a licença MIT. Certifique-se de revisar e concordar com os termos da licença antes de utilizar as bibliotecas em seus projetos.