import React from "react";
import product_card from "./Product_data";
import MyButton from "./button";
import "./Product.css";
function Product() {
  console.log(product_card);
  const ListItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <div className="info">
          <MyButton
            backgroundColor="#f2a81d" //the color of the button
            border="2px solid #f2a81d" //color of border on hover
            color="#f2a81d" //color of text on hover
            text="View Gallery" //text on button
          />
          <a href="tel:+2349043007523">
            <MyButton
              backgroundColor="#111826" //the color of the button
              border="2px solid #111826" //color of border on hover
              color="#111826" //color of text on hover
              text="Call" //text on button
            />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="main_component">
      <h1>Products</h1>
      <div className="mains">{ListItems}</div>
    </div>
  );
}

export default Product;
