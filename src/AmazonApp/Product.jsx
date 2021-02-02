import React from "react";
import "./Product.scss";
import { useStateValue } from "./StateProvider";

function Product({ title, image, price, rating, id }) {
  const [{ }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="Am__product">
      <div className="Am__product__info">
        <p>{title}</p>
        <p className="Am__product__info__price">
          <strong>${price}</strong>
        </p>
        <div className="Am__product__info__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><span role="img">🌟</span></p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
