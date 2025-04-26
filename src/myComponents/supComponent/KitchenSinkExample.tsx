import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap'

function KitchenSinkExample({product}) {
  return (
    <Card style={{ width: '18rem', margin: '1rem 1rem 1rem 1rem' }}>
      <Card.Img variant="top" style={{width: "200px", height: "auto"}} src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button href="#">Chi tiết</Button>
        <Button href="#">Add to card</Button>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;