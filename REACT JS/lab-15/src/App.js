import './App.css';
import Header from './Header';
import Footer from './Footer';
import Propstrial from './Props';

function App() {
  let array = ["Using", "Map", "Method", "Displaying", "Array"];
  let products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 25, inStock: true },
    { name: "Keyboard", price: 75, inStock: false },
    { name: "Monitor", price: 300, inStock: true }
  ];

  return (
    <>
      <div>
        <h2>Array Example</h2>
        {array.map(array => {
          return (
            <div>
              {array}
            </div>
          )
        })}
      </div>

      <div>
        <h2>Product List</h2>
        <table border="5" cellPadding="5">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>In Stock</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => {
                return (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.inStock ? "Yes" : "No"}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
