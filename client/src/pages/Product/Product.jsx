import React, { useState } from 'react'
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

function Product() {
  const[selectedImg,setSelectedImg]=useState(0)
  const[quantity,setQuantity]=useState(1)
  
  const images=[
    "https://jersix.com/wp-content/uploads/2020/03/x-shirt-prod-jersey-sport-tshirt-custom-jersix-2.jpg",
    "https://jersix.com/wp-content/uploads/2019/11/polo-freewear-bowling-darts.jpg"
  ]
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]}/>

        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$1999</span>
        <p> Lorem ipsum dolor sit amet
           consectetur adipisicing elit. 
           Eum tempora natus sapiente, quia esse, 
           odio magnam nam quibusdam at, 
           corrupti eos deserunt dolorem 
           ratione accusamus fuga voluptatem pariatur.
            Dicta, quaerat.
          </p>
          <div className="quantity">
            <button onClick={()=>setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon/>Agregar al carro
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon/> Agregar a lista de deseos
            </div>
            <div className="item">
              <BalanceIcon/> Agregar para comparar
            </div>
          </div>
          <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product