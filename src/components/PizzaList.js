import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, handleClick }) {

  const pizzaCards = pizzas.map((pizza) => {
    return <Pizza key={pizza.topping} pizza={pizza} handleClick={handleClick} />
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaCards
          //render Pizza here
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
