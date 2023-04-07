import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img
                src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
            />
            <button>
                <Link className="link" to="/products/1">
                Hombre
                </Link>
            </button>
            </div>    
            <div className="row">
                <img
                src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
            />
            <button>
                <Link to="/products/1" className="link">
                Mujer
                </Link>
            </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                {" "}
            <img
                src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
            />
            <button>
                <Link to="/products/1" className="link">
                Nuevo
                </Link>
            </button>
            </div>
        </div>    
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img
                    src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <button>
                    <Link to="/products/1" className="link">
                    Hombre
                    </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    {" "}
                    <img
                        src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                        Deportes
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img
                src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
            />
            <button>
                <Link to="/products/1" className="link">
                Equipos
                </Link>
            </button>
            </div>
                
        </div>
        

    </div>
  )
}

export default Categories