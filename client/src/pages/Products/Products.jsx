import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  
  const {data,loading,erros} =useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
 
  const handleChange = (e)=>{
    const value = e.target.value;
    const ischecked= e.target.checked;
    setSelectedSubCats(
      ischecked
      ? [...selectedSubCats,value]
      : selectedSubCats.filter((item)=> item !== value)
    )

  }
  console.log(selectedSubCats);
  return (
    <div className='products'>
      <div className="left">
          <div className="filterItem">
            <h2>Categorias</h2>
            {data?.map((item)=>(
              <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
                 ))}

           </div>
          <div className="filterItem">
            <h2>Filtro por Precio</h2>
            <div className="inputItem">
              <span>0</span>
              <input type='range' nim={0} max={500000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="inputItem">
          <h2>Ordenar por:</h2>
          <input type='radio' id="asc" value= "asc" name='precio' onChange={(e) => setSort("asc")}/>
            <label htmlFor='asc'> Precio (Mas Bajo)</label>
          </div>
          <div className="inputItem">
            <input type='radio' id="desc" value= "desc" name='precio' onChange={(e) => setSort("desc")}/>
            <label htmlFor='desc'> Precio (Mas Alto)</label>
          </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
      
    </div>
  )
}

export default Products