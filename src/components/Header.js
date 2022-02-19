import React from "react";

const Header = (props) => {
  console.log("Header", props.data);

  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-No"> {props.data.length} </span>
        <img src="https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1128229893?k=20&m=1128229893&s=612x612&w=0&h=uOQYRr-vTDnW60Mn8MWSwt6i9uK2SGni8jR1CKKELK8=" />
      </div>
    </div>
  );
};
export default Header;
