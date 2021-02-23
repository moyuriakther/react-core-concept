// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  var names = ["Anik", "Suhail", "Selim"];
  var job = ["Developer", "Web Designer"];
  const products = [
    { name: "Photoshop", price: "$99.99" },
    { name: "Illistrator", price: "$59.99" },
    { name: "Adobe Reader", price: "$5.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>My First React app</p>
        <ul>
          {names.map((name) => (
            <li>{name}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
        {/* <Product product ={products[0]}></Product>
        <Product product ={products[1]}></Product>
        <Product product = {products[2]}></Product> */}
        <Users></Users>
        <Count></Count>
        <Person name={names[0]} job={job[0]}></Person>
        <Person name="Salman" job="actor"></Person>
        <Person name="Rohit" job="Doctor"></Person>
      </header>
    </div>
  );
}
function Person(props) {
  //props diye component a data pass hocche
  const stylePerson = {
    border: "2px solid yellow",
    margin: "10px",
    padding: "10px",
  };
  return (
    <div style={stylePerson}>
      <h1>MY Name : {props.name}</h1>
      <h3>My Profession: {props.job}</h3>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    backgroundColor: "lightgray",
    border: "2px solid gray",
    borderRadius: "5px",
    height: "200px",
    width: "200px",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}
function Count() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  },[]);
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
        <ul>
          {
            users.map(user =><li>{user.name}</li>)
          }
        </ul>
    </div>
  );
}

export default App;
