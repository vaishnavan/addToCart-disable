import { useState } from "react";
import CartData from "./CartData";
import "./styles.css";

export default function App() {
  const [product, setProduct] = useState([
    {
      id: "12",
      name: "car",
      price: 350
    },
    {
      id: "23",
      name: "bike",
      price: 550
    }
  ]);
  const [show, setShow] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const handleAdd = (i, id) => {
    console.log(id);
    setShow({
      ...show,
      [i]: !show[i]
    });
    const findData = product.find((data) => data.id === id);
    // setCartItem([...cartItem, findData]);
    setCartItem([...cartItem, findData]);
  };

  console.log(cartItem);

  const handleRemove = (i, id) => {
    console.log(i);
    const filterDel = cartItem.filter((data) => data.id !== id);
    setCartItem(filterDel);
    if (filterDel) {
      setShow({
        [i]: !show[i]
      });
    }
  };

  return (
    <div className="App">
      {product.map((data, i) => {
        return (
          <div key={i}>
            <h1>{data.name}</h1>
            <h4>{data.price}</h4>
            {show[i] ? (
              <>
                <button disabled onClick={() => handleAdd(i, data.id)}>
                  Add to cart
                </button>
              </>
            ) : (
              <>
                <button onClick={() => handleAdd(i, data.id)}>
                  Add to cart
                </button>
              </>
            )}
          </div>
        );
      })}
      <CartData myData={cartItem} onRemove={handleRemove} />
    </div>
  );
}
