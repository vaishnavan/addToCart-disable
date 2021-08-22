import React from "react";

export default function CartData({ myData, onRemove }) {
  console.log(myData);
  return (
    <>
      <h1>cart items</h1>
      {myData.map((data, i) => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h3>{data.price}</h3>
            <button onClick={() => onRemove(i, data.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}
