import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import routes from "@routes";
import tesla from "../../assets/tesla.svg";

const Index = () => {
  return (
    <>
      <header>
        <div className="imge">
          <img src={tesla} alt="tesla" />
        </div>
        <div className="container">
          <ul>
            {routes?.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className="text-decoration-none text-white fs-4"
                >
                  {item.content}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Index;
