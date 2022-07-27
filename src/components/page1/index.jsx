import NuKenzie from "../../img/NuKenzie.svg";
import imgM from "../../img/image.svg";

function Page1({exchange}) {
 
  return (
    <section className="page1">
      <div>
      <img src={NuKenzie} alt="Logo Nu Kenzie" />
      <h1>Centralize o controle das suas finanças</h1>
      <p>de forma rápida e segura</p>
      <button onClick={exchange}>Iniciar</button>
      </div>
      <figure>
      <img src={imgM} alt="" />
      </figure>
    </section>
  );
}

export default Page1;
