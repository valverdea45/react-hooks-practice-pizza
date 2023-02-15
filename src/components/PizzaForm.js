import React from "react";

function PizzaForm({ clickedPizza, setClickedPizza, onAddPizza }) {

  if(!clickedPizza) {
    return (
      <form onSubmit={null}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
    )
  }

  function handleValueChange(e) {
   setClickedPizza({...clickedPizza, [e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  function handleVegainChange(e) {
    if (e.target.value === "Vegetarian") {
      setClickedPizza({...clickedPizza, [e.target.name]: true})
    } else {
      setClickedPizza({...clickedPizza, [e.target.name]: false})
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${clickedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(clickedPizza)
    })
    .then((data) => data.json())
    .then((newPizza) => onAddPizza(newPizza))
  } 

  console.log(clickedPizza)
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={clickedPizza.topping}
            onChange={handleValueChange}
          />
        </div>
        <div className="col">
          <select onChange={handleValueChange} className="form-control" name="size" value={clickedPizza.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={handleVegainChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={clickedPizza.vegetarian ? true : false}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input onChange={handleVegainChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={clickedPizza.vegetarian ? false : true}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
