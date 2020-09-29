import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="Am__checkoutProduct">
      <img className="Am__checkoutProduct__image" src={image} />

      <div className="Am__checkoutProduct__info">
        <p className="Am__checkoutProduct__info__title">{title}</p>
        <p className="Am__checkoutProduct__info__price">
          <strong>${price}</strong>
        </p>
        <div className="Am__checkoutProduct__info__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
