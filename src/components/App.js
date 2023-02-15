import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";



function App() {

const [pizzas, setPizzas] = useState([])
const [clickedPizza, setClickedPizza] = useState(null)

  useEffect(() =>{
    fetch("http://localhost:3001/pizzas")
    .then((data) => data.json())
    .then((allPizza) => setPizzas(allPizza))
  }, [])

  // console.log(pizzas)

  // if (!pizzas) {
  //   return (
  //     <p>loading...</p>
  //   )
  // }

  function handleClick(pizza){
    setClickedPizza(pizza)
  }

  function onAddPizza(newPizza) {
    const newUpdatedArray = pizzas.map((pizza) => {
      if(pizza.id === newPizza.id) {
        return newPizza
      } else {
        return pizza
      }
    })
    setPizzas(newUpdatedArray)
    console.log(newPizza)
  }

  return (
    <>
      <Header />
      <PizzaForm clickedPizza={clickedPizza} setClickedPizza={setClickedPizza} onAddPizza={onAddPizza} />
      <PizzaList pizzas={pizzas} handleClick={handleClick} />
    </>
  );
}

export default App;
