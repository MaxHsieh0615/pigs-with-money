import React from "react";
import { List } from "../List";
import {Button,Input,Col,Card,CardTitle} from 'react-materialize'

function ProductsList(props){
    return (
      <List>
        {props.products.map(product => (
          <Col m={6} s={12} key={product.id}>
            <Card className='small' header={<CardTitle image='img/sample-1.jpg'>{product.name}</CardTitle>}
              actions={[<Button waves='light' key={product.id} onClick={props.addCart}> Buy</Button>]}>
              <p>{product.info}</p>
              <p className="card-text">Qty: {product.qty}</p>
              <p className="card-text">Price: ${product.price}</p>
              <Input s={12} type='select' label="Buy For" onChange={props.updateBuyFor}>  
                  <option value='1'>Option 1</option>
              </Input>
            </Card>
          </Col>
        ))}
      </List>
    )
  }

  export default ProductsList;
  