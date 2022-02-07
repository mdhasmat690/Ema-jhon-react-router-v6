import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import {NavLink} from 'react-router-dom'

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([])

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setDisplayProduct(data)
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const exists = cart.find(pd =>pd.key===product.key)
    let newCart = []
    if(exists){
      const rest = cart.filter(pd=>pd.key !==product.key)
      exists.quantity=exists.quantity + 1
      newCart = [...rest, product]

    }else{
      product.quantity = 1
      newCart = [...cart, product]
    }
    console.log(newCart ,'new cart clg');
    setCart(newCart);
    //save to local storage
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProduct(matchProduct);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search-Product"
        />
      </div>

      <div className="shop-container">
        <div className="product-container">
          {products?.length ? (
            <>
              {displayProduct.map((product) => (
                <Product
                  product={product}
                  key={product.key}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </>
          ) : (
            <h3>Loading</h3>
          )}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
          <NavLink  to="/orders">
          <button className="btn-purchase">Review Your Order</button>
          </NavLink>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
