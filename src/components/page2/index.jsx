import logo2 from "../../img/NuKenzie2.svg";
import Form from "../form";
import { useState } from "react";
import TotalMoney from "../totalMoney";
import List from "../list";

function Page2() {
  const [item, setItem] = useState([]);
  const [array, setArray] = useState(item);

  return (
    <main className="page2">
      <header>
        <img src={logo2} alt="Logo Nu Kenzie" />
        <button>Inicio</button>
      </header>
      <div>
        <section>
          <Form item={item} setItem={setItem} setArray={setArray} />
          <span>
            <TotalMoney item={array} />
          </span>
        </section>
        <section>
          <List
            arrComp={item}
            setItem={setItem}
            array={array}
            setArray={setArray}
          />
        </section>
      </div>
    </main>
  );
}
export default Page2;
