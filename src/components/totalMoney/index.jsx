function TotalMoney({ item }) {
  return (
    <div>
      <h2>Valor total:</h2>
      <h2>
        ${" "}
        {item.reduce(
          (acc, current) =>
            current.type === "Entrada"
              ? acc + parseInt(current.money)
              : acc - parseInt(current.money),
          0
        )}
      </h2>
    </div>
  );
}
export default TotalMoney;
