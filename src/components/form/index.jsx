import { useState } from "react";



function Form({ item, setItem, setArray}) {
  const [value, setValue] = useState({ type: "Entrada" });

  function add() {
    setItem([...item, value]);
    setArray([...item, value])
  }

  return (
    <form onSubmit={(event) => add(event.preventDefault())}>
      <div>
        <p>Descrição</p>
        <input
          required={true}
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) =>
            setValue({ ...value, description: event.target.value })
          }
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div>
        <label>Valor</label>
        <input
          required={true}
          type="number"
          placeholder="insira o valor"
          onChange={(event) =>
            setValue({ ...value, money: event.target.value })
          }
        />
      </div>
      <div>
        <select
          onChange={(event) => setValue({ ...value, type: event.target.value })}
        >
          <option>Entrada</option>
          <option>Saida</option>
        </select>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
