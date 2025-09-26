import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// All components are nested in App()
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { fontSize: "50px" };
  const style = {};

  return (
    <header className="header" style={style}>
      <h1>Fast Food Pizza .co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry. We are creatig our new menu.</p>
      )}

      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozzarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null; //Conditional Rendering With Multiple returns

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : null}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed!");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>Sorry. We are closed. We will open at {openHour}:00</p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <p className="order">
      We are open untile {closeHour}:00. Come visit us or order online.
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// **** Important Notes *****
// Props meaning: Props is essentially how we pass data between components. And in particular, from parent components to child components.

// Rendering Lists: Actually Rendering a list is when we have an array and we want to create one component for each element of the array. WE USE map METHOD.

// There are 3 ways for conditional rendering:
// 1)conditional rendering with &&
// 2)conditional rendering with ternaries operator
// 3) conditional rendering with multiple returns

// In order to make our lives easier when working with "props" in practice, we can use "Destructuring Props". Each time that we pass some props into a component, that component will then automatically receive this object of props, which will contain all the props that we passed in. And actually, all components receive this props object. So we can use "Destructuring Props" in order to have cleaner code!

// React Fragment: React Fragment basically lets us group some elements without leaving any trace in the HTML tree, so in the DOM. <></> or <React.Fragment><Raect.Fragment/>
