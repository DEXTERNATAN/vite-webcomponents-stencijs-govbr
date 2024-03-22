import {
  BrButton,
  BrCheckbox,
  BrInput,
  BrItem,
  BrList,
  BrRadio,
  BrTextarea,
} from '@govbr-ds-testing/webcomponents-react';

import { useState } from 'react';

const ListComponents = () => {
  const [value, setValue] = useState(5);
  const [loading, setLoading] = useState(false);
  const [emphasis, setEmphasis] = useState('primary');
  const [markdownContent, setMarkdownContent] = useState('');

  return (
    <>
      <br />
      <h2>Input</h2>
      <hr />
      <BrInput
        label="Teste"
        autocomplete="on"
        autofocus={loading}
        button
        density="small"
        minlength={value}
        name="teste"
        placeholder="Digite algo"
        readonly={loading}
        required
        size={2}
        step={2}
        success
        type="url"
        value={emphasis}
        warning
      ></BrInput>
      <br />
      <h2>Button</h2>
      <hr />
      <BrButton
        className="mr-1"
        id="enviar"
        type="submit"
        loading={loading}
        emphasis="primary"
        value={emphasis}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }}
        style={{
          paddingTop: 10,
          border: '1px solid red',
        }}
      >
        Enviar Formulário
      </BrButton>
      <br />
      <h2>Item</h2>
      <hr />
      <BrItem disabled>
        <div className="br-radio">
          <input id="radio-01" type="radio" name="radio" value="radio-01" />
          <label htmlFor="radio-01">Rótulo do Radio 01</label>
        </div>
      </BrItem>
      <BrItem
        selected
        onClick={() => {
          console.log('click');
        }}
      >
        <div className="br-radio">
          <input id="radio-02" type="radio" name="radio" value="radio-02" />
          <label htmlFor="radio-02">Rótulo do Radio 01</label>
        </div>
      </BrItem>
      <br />
      <h2>Checkbox</h2>
      <hr />
      <BrCheckbox
        valid
        // required
        // invalid
        autofocus
        checked={loading}
        // disabled={loading}
        id="checkbox-01"
        name={emphasis}
        value={emphasis}
        label={emphasis}
      ></BrCheckbox>
      <br />
      <h2>TextArea</h2>
      <hr />
      <BrTextarea
        value={emphasis}
        label="teste"
        autofocus
        placeholder="Digite algo"
        density="small"
        required
        textAux="Crie uma execelente historia de usuarios"
      ></BrTextarea>
      <br />
      <h2>Radio</h2>
      <hr />
      <BrRadio
        // valid
        // required
        // invalid
        autofocus
        checked={loading}
        // disabled={loading}
        id="radio-01"
        name="radio"
        value={emphasis}
        label={emphasis}
      ></BrRadio>
      <br />
      <h2>Lista</h2>
      <hr />
      <BrList horiontal density="large" title="Minha lista de tarefas">
        <BrItem
          disabled
          style={{
            paddingTop: 1,
            border: '1px solid red',
          }}
        >
          <div className="br-radio">
            <input id="radio-01" type="radio" name="radio" value="radio-01" />
            <label htmlFor="radio-01">Rótulo do Radio 01</label>
          </div>
        </BrItem>
        <BrItem
          selected
          style={{
            paddingTop: 1,
            border: '1px solid blue',
          }}
        >
          <div className="br-radio">
            <input id="radio-02" type="radio" name="radio" value="radio-02" />
            <label htmlFor="radio-02">Rótulo do Radio 01</label>
          </div>
        </BrItem>
        <BrItem>
          <div className="row align-items-center">
            <div className="col-auto">
              <i className="fas fa-heartbeat" aria-hidden="true"></i>
            </div>
            <div className="col">Texto principal</div>
            <div className="col-auto">META</div>
          </div>
        </BrItem>
      </BrList>
    </>
  );
};

export default ListComponents;
