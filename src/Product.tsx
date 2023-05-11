import React from "react";
import product_card from "./Product_data";
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
          <div className="btn">View Gallery</div>
          <a href="tel:+2349043007523">
            <button className="btn btn-call" id="aboutbtn">
              Call
            </button>
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
