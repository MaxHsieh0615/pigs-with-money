import React from "react";
import { List } from "../List";


function ProductsList(props){
    return (
      <List>
        {props.products.map(product => (
          <div className="col" key={product.id}>
            <div className="col s12 m12">
              <div className="card" key={product.id}>
                <div className="card-body">
                  <span className="card-title">{product.name}</span>
                  <p className="card-text">{product.info}</p>
                  <p className="card-text">{product.qty}</p>
                  <p className="card-text">{product.price}</p>
                  <button
                    id="addToCart"
                    className="waves-effect waves-light btn btn-success"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </List>
    )
  }

  export default ProductsList;
  