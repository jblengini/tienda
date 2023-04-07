import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  
  
    return (
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
          
{/*             <div className="item">
              <img src="/img/en.png" alt="" />
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div> */}
            
            <div className="item">
              <Link className ="link" to="/products/1">Hombre</Link>
            </div>
            <div className="item">
              <Link className ="link" to="/products/2">Mujer</Link>
            </div>
            <div className="item">
              <Link className ="link" to="/products/3">Niños</Link>
            </div>
            <div className="item">
              <Link className ="link" to="/products/3">Equipos</Link>
            </div>
          </div>
          <div className="center">
            <Link className ="link" to="/">Soport Team</Link>
          </div>
          <div className="right">
            <div className="item">
              <Link className ="link" to="/">Inicio</Link>
            </div>
            <div className="item">
              <Link className ="link" to="/">Nosotros</Link>
            </div>
            <div className="item">
              <Link className ="link" to="/">Contacto</Link>
            </div>
{/*             <div className="item">
              <Link className ="link" to="/">Equipos</Link>
            </div> */}
            <div className="icons">
              <SearchIcon/>
              <PersonOutlineOutlinedIcon/>
              <FavoriteBorderOutlinedIcon/>
              <div className="cartIcon" >
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };
  
  export default Navbar;
  