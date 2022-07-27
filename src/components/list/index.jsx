import cardVazio from "../../img/NoCard.svg";
import Filter from "../filtro";

function List({ arrComp, setItem, array, setArray }) {
  function del(pos) {
    setItem(arrComp.filter((elem, position) => position !== pos));
    setArray(arrComp.filter((elem, position) => position !== pos));
  }
  function list(arra) {
    return arra.map((elem, index) => (
      <li key={index}>
        <div>
          <h2>{elem.description}</h2>
          <p>{elem.type}</p>
        </div>
        <span>{elem.money}</span>
        <button onClick={() => del(index)}>X</button>
      </li>
    ));
  }

  return arrComp.length > 0 ? (
    <>
      <Filter array={array} setArray={setArray} arrComp={arrComp} />
      <ul className="listaComp">{list(array)}</ul>
    </>
  ) : (
    <ul>
      <h2>Você ainda não possui nenhum lançamento</h2>
      <li key={1}>
        <img src={cardVazio} alt="card vazio" />
      </li>
      <li key={2}>
        <img src={cardVazio} alt="card vazio" />
      </li>
      <li key={3}>
        <img src={cardVazio} alt="card vazio" />
      </li>
    </ul>
  );
}

export default List;
