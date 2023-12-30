import React from "react";
import classes from "./ÜrünList.module.css";

const ÜrünList = ({ product, total, wallet, basket, setBasket }) => {
  const counter = basket.find((item) => item.id === product.id);
  const addHandler = () => {
    const itemControl = basket.find((item) => item.id === product.id);
    if (itemControl) {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        itemControl,
      ]);
      itemControl.amount += 1;
      console.log(wallet);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          amount: 1,
        },
      ]);
      console.log(wallet);
    }
  };
  const removeHandler = () => {
    const itemControl = basket.find((item) => item.id === product.id);

    itemControl.amount -= 1;
    if (itemControl.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        itemControl,
      ]);
    }
  };

  return (
    <ul className={classes.ürün}>
      <li>{product.name}</li>
      <li>{product.price}</li>
      <button
        disabled={!counter}
        className={classes.buton}
        onClick={removeHandler}
      >
        ÇIKART
      </button>
      <span>{(counter && counter.amount) || 0}</span>
      <button
        disabled={total + product.price > wallet}
        className={classes.buton}
        onClick={addHandler}
      >
        EKLE
      </button>
    </ul>
  );
};

export default ÜrünList;
