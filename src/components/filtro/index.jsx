import "./styles.css"

function Filter({setArray, arrComp}) {
    return (
      <div className="filtro">
        <h2>Resumo financeiro</h2>
        <div>
        <button onClick={() => setArray(arrComp)}>Todos</button>
         <button
          onClick={()=>setArray(arrComp.filter((elem) => elem.type === "Entrada"))}
        >
          Entradas
        </button>
        <button onClick={()=>setArray(arrComp.filter((elem) => elem.type === "Saida"))}>
          Despesas
        </button> 
        </div>
      </div>
    );
}
export default Filter
