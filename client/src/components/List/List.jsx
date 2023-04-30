import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
import useFetch from '../../hooks/useFetch'

const List = ({subCats,maxPrice,sort,catId}) => {

  const{data,loading,error} = useFetch
  (`/products?populate=*&[filters][categories][id]= ${catId}`);



 
    /* const data = [
        {
          id:1,
          img: "https://images.pexels.com/photos/14115020/pexels-photo-14115020.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          img2:"https://images.pexels.com/photos/14792839/pexels-photo-14792839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "remera futbol sublimanda",
          isNew: true,
          oldPrice: 12341,
          price:11242
        },
        {
          id:2,
          img: "https://images.pexels.com/photos/159611/basketball-player-game-sport-159611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "remera basket sublimanda",
          isNew: true,
          oldPrice: 12341,
          price:11242
        },
        {
          id:3,
          img: "https://images.pexels.com/photos/35009/runner-marathon-military-afghanistan.jpg",
          title: "remera running sublimanda",
          isNew: false,
          oldPrice: 12341,
          price:11242
        },
        {
          id:4,
          img: "https://images.pexels.com/photos/2982100/pexels-photo-2982100.jpeg",
          title: "remera rugby sublimanda",
          isNew: false,
          oldPrice: 12341,
          price:11242
        },
        {
            id:5,
            img: "https://images.pexels.com/photos/2982100/pexels-photo-2982100.jpeg",
            title: "remera rugby sublimanda",
            isNew: false,
            oldPrice: 12341,
            price:11242
          },
          {
            id:6,
            img: "https://images.pexels.com/photos/2982100/pexels-photo-2982100.jpeg",
            title: "remera rugby sublimanda",
            isNew: false,
            oldPrice: 12341,
            price:11242
          }
      ]   */

  return (
    <div className="list">
        {loading ? "cargando" : data?.map(item=>(
            <Card item={item} Key = {item.id}/>
        ))}
    </div>
  );
}

export default List