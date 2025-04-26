import Card from 'react-bootstrap/Card';
import React from 'react'

function ImageAndTextExample() {
  return (
    <>
      <Card>
        <Card.Img variant="top" style={{width: "200px", height: "auto"}} src="src/image/hi3BG/AponiaBG.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    </>
  );
}

export default ImageAndTextExample;