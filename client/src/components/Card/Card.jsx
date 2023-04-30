import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
const REACT_APP_UPLOAD_URL = process.env.REACT_APP_UPLOAD_URL
export const Card = ({item}) => {
  console.log(item);
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className="card">
      <div className="image">
        {item?.attributes.isNew && <span>Neva Temporada</span>}
        <img src={REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
         alt="" className='mainImg'/>

        {item.attributes?.img2?.data?.attributes?.url && <img src={REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url}
         alt="" className='secondImg'/>}
        {/* <img src={REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url}
         alt="" className='secondImg'/> */}
      </div>
      <h2>{item?.attributes.title}</h2>
      <div>
        <div className="prices">
          <h3>${item?.attributes?.oldprice  || item?.attributes.price+500 }</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </div>
    </Link>
    
  )
}

export default Card

