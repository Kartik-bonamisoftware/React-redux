import React from "react";

const Home = (props) => {
  console.log("Home", props);

  return (
    <div>
      <h1>Home Component </h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.att.com/idpassets/sales/uf/deals/cell-phone-deals/839650-Animated-Multi-Tile-iPhone12-retina.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price : $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "i-Phone 11 Pro" })
            }
          >
            Add To Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
