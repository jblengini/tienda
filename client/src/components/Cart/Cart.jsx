import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { Button } from '@mui/material'
import "./Cart.scss"
const data = [
    {
        id:1,
        img: "https://jersix.com/wp-content/uploads/2019/11/polo-freewear-bowling-darts.jpg",
        img2:"https://images.pexels.com/photos/14792839/pexels-photo-14792839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "remera futbol sublimanda",
        desc: "Lorem ipsum dolor sit ametconsectetur adipisicing elit.um tempora natus sapiente, quia esse,odio magnam nam quibusdam at,corrupti eos deserunt dolorem",
        isNew: true,
        oldPrice: 12341,
        price:11242
      },
      {
        id:2,
        img: "https://jersix.com/wp-content/uploads/2019/11/polo-freewear-bowling-darts.jpg",
        title: "remera basket sublimanda",
        desc: "Lorem ipsum dolor sit ametconsectetur adipisicing elit.um tempora natus sapiente, quia esse,odio magnam nam quibusdam at,corrupti eos deserunt dolorem",
        isNew: true,
        oldPrice: 12341,
        price:11242
      },
];

const Cart = () => {
  return (

    <div className="cart">
        <h1>Tu carro de pedidos</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt=""/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,40)}</p>
                    <div className="price">
                        1 x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon
                        className="delete"
                        //onClick={() => dispatch(removeItem(item.id))}
                />
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$12.500</span>
        </div>
        <Button>Proceder con la compra</Button>
        <span className='reset'>Limpiar </span>
        
    </div>
  )
}


export default Cart