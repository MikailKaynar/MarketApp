import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import ÜrünList from "./components/ÜrünList.js";

function App() {
  const ürünler = [
    { id: 1, name: "Bardak", price: 25 },
    { id: 2, name: "Avize", price: 210 },
    { id: 3, name: "Masa", price: 850 },
    { id: 4, name: "Abajur", price: 110 },
    { id: 5, name: "Scooter", price: 8000 },
    { id: 6, name: "Kol Saati", price: 450 },
    { id: 7, name: "Kol Saati2", price: 450 },
    { id: 8, name: "Kol Saati3", price: 450 },
  ];

  const [number, setNumber] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((def, item) => {
        return (
          def + item.amount * ürünler.find((ürün) => ürün.id === item.id).price
        );
      }, 0)
    );
    console.log(basket);
  }, [basket]);

  const changeHandler = (event) => {
    setNumber(event.target.value);
  };
  const setbasketHandler = () => {
    setWallet(number);
    setBasket([]);
    setTotal(0);
    setNumber(0)
  };

  return (
    <>
      <div className={classes.header}>
        <li className={classes.logo}>Armarkapp</li>
        <div className={classes.headerright}>
          <li>
            <label>BAKİYE MİKTARINIZI GİRİNİZ : </label>
            <input value={number} type="number" onChange={changeHandler}></input>
            <button className={classes.buton} onClick={setbasketHandler}> BAKİYE EKLE </button>
          </li>
          <li>SEPET FİYATI -- | {total}$</li>
          <li>{wallet - total}$</li>
          <li className={classes.active}>SEPET</li>
        </div>
      </div>
      <div className={classes.gridcontainer}>
        {ürünler.map((ürün) => (
          <ÜrünList
            key={ürün.id}
            product={ürün}
            basket={basket}
            total={total}
            wallet={wallet}
            setBasket={setBasket}
          />
        ))}
      </div>
    </>
  );
}

export default App;
