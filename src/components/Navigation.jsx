import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';

const navLinks = [
  {
    name: "Home",
    link: "/",
    id: 1,
  },
  {
    name: "About Us",
    link: "/about",
    id: 2,
  },
  {
    name: "Products",
    link: "/products",
    id: 3,
  },
  {
    name: "Contact Us",
    link: "/contact",
    id: 4,
  },
];

const Navigation = () => {
  const location = useLocation();
  const isProductDetail = location.pathname.startsWith("/products/");
  return (
    <div className="nav-container">
      <figure>
        <img
          src="https://imgs.search.brave.com/kWfGJsGeAgSCxZOezlxOsj24dAFQYC-NcU2Hhiksjkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucmZzdGF0LmNv/bS9yZW5kZXJmb3Jl/c3QvaW1hZ2VzL3Yy/L2xvZ28taG9tZXBh/Z2UvbG9nby0yLTMu/cG5n"
          alt="logo"
          className="logo"
        />
      </figure>
      <nav>
        <ul className="nav-links">
          {navLinks.map((item) => {
            if (isProductDetail && item.link === "/products") {
              return null;
            }
            return (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
          {isProductDetail && (
            <div className="product-icons">
              <li>
                <Link to="/cart"><ShoppingCart /></Link>
              </li>
              <li>
                <Link to="/wishlist"><Heart /></Link>
              </li>
            </div>
          )}
        </ul>
        <button className="nav-button">Get Started</button>
      </nav>
    </div>
  );
};

export default Navigation;
